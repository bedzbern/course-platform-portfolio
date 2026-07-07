'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

let completionRegistered = false;

type Tab = 'html' | 'css' | 'js';

const DEFAULT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`;

const DEFAULT_CSS = `body {
  font-family: system-ui, sans-serif;
  background: #f5f0e8;
  color: #0d0d0d;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}`;

const DEFAULT_JS = `console.log('Hello from the playground!');`;

interface CodePlaygroundProps {
  standalone?: boolean;
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
  answerHtml?: string;
  answerCss?: string;
  answerJs?: string;
}

export function CodePlayground({
  standalone = false,
  initialHtml = DEFAULT_HTML,
  initialCss = DEFAULT_CSS,
  initialJs = DEFAULT_JS,
  answerHtml,
  answerCss,
  answerJs,
}: CodePlaygroundProps) {
  const [open, setOpen] = useState(standalone);
  const [tab, setTab] = useState<Tab>('html');
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [showingAnswer, setShowingAnswer] = useState(false);
  const [savedHtml, setSavedHtml] = useState('');
  const [savedCss, setSavedCss] = useState('');
  const [savedJs, setSavedJs] = useState('');
  const [splitPos, setSplitPos] = useState(60);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<any>(null);
  const dragging = useRef(false);
  const dragAxis = useRef<'x' | 'y'>('y');

  const handleBeforeMount = (monaco: any) => {
    if (completionRegistered) return;
    completionRegistered = true;

    const HTML_TAGS = [
      'html', 'head', 'body', 'title', 'meta', 'link', 'style', 'script',
      'header', 'nav', 'main', 'section', 'article', 'aside', 'footer',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'span', 'div', 'a', 'img', 'ul', 'ol', 'li', 'dl', 'dt', 'dd',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'form', 'input', 'textarea', 'button', 'select', 'option', 'label',
      'figure', 'figcaption', 'blockquote', 'pre', 'code', 'br', 'hr',
      'strong', 'em', 'b', 'i', 'u', 'small', 'mark', 'sub', 'sup',
      'iframe', 'video', 'audio', 'canvas', 'svg',
    ];

    try {
      monaco.languages.registerCompletionItemProvider('html', {
        triggerCharacters: ['<', '!'],
        provideCompletionItems: (model: any, position: any) => {
          const textUntil = model.getValueInRange({
            startLineNumber: position.lineNumber,
            startColumn: 1,
            endLineNumber: position.lineNumber,
            endColumn: position.column,
          });
          const word = model.getWordUntilPosition(position);
          const wordText = word.word;
          const col = position.column;

          const mkRange = (start: number, end: number) => ({
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: start,
            endColumn: end,
          });

          // Emmet-style: tag.class → <tag class="class">, .class → <div class="class">
          // tag#id → <tag id="id">, #id → <div id="id">
          const emmetMatch = textUntil.match(/((?:\w[\w-]*)?)([.#])([\w][\w-]*)$/);
          if (emmetMatch) {
            const tag = emmetMatch[1] || 'div';
            const symbol = emmetMatch[2];
            const suffix = emmetMatch[3];
            const attr = symbol === '.' ? 'class' : 'id';
            const matchLen = emmetMatch[0].length;
            return {
              suggestions: [{
                label: `${tag}${symbol}${suffix}`,
                detail: `<${tag} ${attr}="${suffix}">`,
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: `<${tag} ${attr}="${suffix}">$0</${tag}>`,
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: mkRange(col - matchLen, col),
              }],
            };
          }

          // <tag → complete tag name with closing tag
          if (textUntil.includes('<') && !textUntil.includes('>')) {
            const tagStart = textUntil.lastIndexOf('<');
            const partial = textUntil.slice(tagStart + 1);
            if (/^\w*$/.test(partial)) {
              const suggestions = HTML_TAGS
                .filter(t => t.startsWith(partial))
                .map(t => ({
                  label: t,
                  detail: `<${t}>...</${t}>`,
                  kind: monaco.languages.CompletionItemKind.Property,
                  insertText: `${t}>$0</${t}>`,
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                  range: mkRange(tagStart + 2, col),
                }));
              return { suggestions };
            }
          }

          // ! → HTML5 boilerplate
          if (wordText === '!' || textUntil.trim() === '!') {
            return {
              suggestions: [{
                label: '! HTML5 boilerplate',
                kind: monaco.languages.CompletionItemKind.Snippet,
                insertText: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  $0\n</body>\n</html>',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: mkRange(word.startColumn, word.endColumn),
              }],
            };
          }

          return { suggestions: [] };
        },
      });
    } catch {}
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    editor.addAction({
      id: 'format-document',
      label: 'Format Document',
      keybindings: [monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KeyF],
      run: () => {
        editor.getAction('editor.action.formatDocument')?.run();
      },
    });
  };

  const formatCode = () => {
    editorRef.current?.getAction('editor.action.formatDocument')?.run();
  };

  useEffect(() => {
    if (standalone) setOpen(true);
  }, [standalone]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1100px)');
    setIsHorizontal(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsHorizontal(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.source === iframeRef.current?.contentWindow && e.data?.type === 'console') {
        setConsoleLogs(prev => [...prev, e.data.message]);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const buildDocument = () => {
    const consoleScript = `(function(){var origLog=console.log;var origWarn=console.warn;var origError=console.error;console.log=function(){parent.postMessage({type:'console',message:Array.from(arguments).map(String).join(' ')},'*');return origLog.apply(console,arguments)};console.warn=function(){parent.postMessage({type:'console',message:'\\u26A0 '+Array.from(arguments).map(String).join(' ')},'*');return origWarn.apply(console,arguments)};console.error=function(){parent.postMessage({type:'console',message:'\\u2715 '+Array.from(arguments).map(String).join(' ')},'*');return origError.apply(console,arguments)};window.onerror=function(msg){parent.postMessage({type:'console',message:'\\u2715 '+msg},'*')}})();`;
    const isFullDoc = /<!DOCTYPE html>/i.test(html.trim());
    if (isFullDoc) {
      let result = html;
      result = result.replace(/<link[^>]*href=["']style\.css["'][^>]*\/?>/gi, `<style>\n${css}\n</style>`);
      const allJs = js.trim() ? `${consoleScript}\n${js}` : consoleScript;
      result = result.replace('</body>', `<script>\n${allJs}\n</script>\n</body>`);
      return result;
    }
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${css}</style>
  <script>${consoleScript}<\/script>
</head>
<body>
${html}
<script>${js}<\/script>
</body>
</html>`;
  };

  const runCode = () => {
    setConsoleLogs([]);
    const doc = buildDocument();
    if (iframeRef.current) {
      iframeRef.current.srcdoc = doc;
    }
  };

  const openInNewTab = () => {
    const doc = buildDocument();
    const blob = new Blob([doc], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  };

  const reset = () => {
    setHtml(initialHtml);
    setCss(initialCss);
    setJs(initialJs);
    setShowingAnswer(false);
  };

  const toggleAnswer = () => {
    if (showingAnswer) {
      setHtml(savedHtml || initialHtml);
      setCss(savedCss || initialCss);
      setJs(savedJs || initialJs);
      setShowingAnswer(false);
    } else {
      setSavedHtml(html);
      setSavedCss(css);
      setSavedJs(js);
      if (answerHtml !== undefined) setHtml(answerHtml);
      if (answerCss !== undefined) setCss(answerCss);
      if (answerJs !== undefined) setJs(answerJs);
      setShowingAnswer(true);
    }
  };

  const getCode = () => {
    switch (tab) {
      case 'html': return { value: html, set: setHtml };
      case 'css': return { value: css, set: setCss };
      case 'js': return { value: js, set: setJs };
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    dragAxis.current = isHorizontal ? 'x' : 'y';
    document.body.style.cursor = isHorizontal ? 'col-resize' : 'row-resize';
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (dragAxis.current === 'y') {
        const y = e.clientY - rect.top;
        const pct = (y / rect.height) * 100;
        setSplitPos(Math.max(20, Math.min(80, pct)));
      } else {
        const x = e.clientX - rect.left;
        const pct = (x / rect.width) * 100;
        setSplitPos(Math.max(20, Math.min(80, pct)));
      }
    };

    const handleMouseUp = () => {
      if (dragging.current) {
        dragging.current = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const code = getCode();
  const tabs: { key: Tab; label: string }[] = [
    { key: 'html', label: 'HTML' },
    { key: 'css', label: 'CSS' },
    { key: 'js', label: 'JS' },
  ];

  const handleBar = (
    <div
      className={`shrink-0 flex items-center justify-center bg-zinc-300 hover:bg-zinc-400 transition-colors ${
        isHorizontal ? 'w-3 cursor-col-resize' : 'h-3 cursor-row-resize'
      }`}
      onMouseDown={handleMouseDown}
    >
      <div className={`rounded-full bg-zinc-500 ${isHorizontal ? 'w-0.5 h-6' : 'w-6 h-0.5'}`} />
    </div>
  );

  const editorPanel = (
    <div className="flex flex-col min-h-0 min-w-0 h-full w-full">
      <div className="flex border-b-2 border-[#0d0d0d] shrink-0">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 text-sm font-bold transition-colors cursor-pointer ${
              tab === t.key
                ? 'bg-[#0d0d0d] text-[#f5f0e8]'
                : 'hover:bg-zinc-200'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="h-full flex-1 min-h-0">
        <MonacoEditor
          height="100%"
          key={tab}
          language={tab === 'js' ? 'javascript' : tab}
          theme="vs-dark"
          value={code.value}
          onChange={(val) => code.set(val || '')}
          beforeMount={handleBeforeMount}
          onMount={handleEditorDidMount}
          options={{
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 13,
            scrollBeyondLastLine: false,
            padding: { top: 8, bottom: 8 },
            autoClosingBrackets: 'always',
            autoClosingQuotes: 'always',
            tabCompletion: 'on',
            snippetSuggestions: 'inline',
            wordBasedSuggestions: 'currentDocument',
            suggestOnTriggerCharacters: true,
            acceptSuggestionOnEnter: 'smart',
            acceptSuggestionOnCommitCharacter: true,
          }}
        />
      </div>
      <div className="flex gap-2 px-4 py-2 border-t-2 border-[#0d0d0d] shrink-0 flex-wrap">
        <button
          onClick={runCode}
          className="bg-[#cc0000] text-white px-5 py-1.5 text-sm font-bold hover:bg-[#aa0000] transition-colors cursor-pointer"
        >
          Run →
        </button>
        <button
          onClick={openInNewTab}
          className="border-2 border-[#0d0d0d] px-4 py-1.5 text-sm font-bold hover:bg-[#0d0d0d] hover:text-[#f5f0e8] transition-colors cursor-pointer"
        >
          Preview ↗
        </button>
        <button
          onClick={formatCode}
          className="border-2 border-[#0d0d0d] px-4 py-1.5 text-sm font-bold hover:bg-[#0d0d0d] hover:text-[#f5f0e8] transition-colors cursor-pointer"
        >
          Format ⇧⌥F
        </button>
        <button
          onClick={reset}
          className="border-2 border-[#0d0d0d] px-4 py-1.5 text-sm font-bold hover:bg-[#0d0d0d] hover:text-[#f5f0e8] transition-colors cursor-pointer"
        >
          Reset
        </button>
        {(answerHtml !== undefined || answerCss !== undefined || answerJs !== undefined) && (
          <button
            onClick={toggleAnswer}
            className={`border-2 px-4 py-1.5 text-sm font-bold transition-colors cursor-pointer ${
              showingAnswer
                ? 'bg-[#0d0d0d] text-[#f5f0e8] border-[#0d0d0d]'
                : 'border-[#cc0000] text-[#cc0000] hover:bg-[#cc0000] hover:text-white'
            }`}
          >
            {showingAnswer ? 'Restore My Code' : 'Show Answer'}
          </button>
        )}
      </div>
    </div>
  );

  const previewPanel = (
    <div className="flex flex-col min-h-0 min-w-0 h-full w-full">
      <div className="bg-zinc-100 px-4 py-1.5 text-xs font-bold text-zinc-500 uppercase tracking-wider shrink-0 flex items-center justify-between">
        <span>Preview</span>
        <button
          onClick={openInNewTab}
          className="text-zinc-400 hover:text-[#cc0000] transition-colors cursor-pointer text-xs font-bold"
          title="Open preview in a new tab"
        >
          Open in New Tab ↗
        </button>
      </div>
      <iframe
        ref={iframeRef}
        title="Preview"
        className="w-full flex-1 min-h-0 bg-white"
        sandbox="allow-scripts"
      />
      {consoleLogs.length > 0 && (
        <div className="border-t-2 border-[#0d0d0d] bg-[#1e1e1e] text-[#d4d4d4] font-mono text-xs shrink-0 max-h-[120px] overflow-y-auto">
          <div className="px-3 py-1 text-[#888] text-[10px] uppercase tracking-wider font-bold">Console</div>
          {consoleLogs.map((msg, i) => (
            <div key={i} className="px-3 py-0.5 border-t border-[#333]">{msg}</div>
          ))}
        </div>
      )}
    </div>
  );

  const inner = (
    <div
      ref={containerRef}
      className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} flex-1 min-h-0`}
    >
      <div
        className="flex min-h-0 min-w-0"
        style={{ flex: `${splitPos} 1 0` }}
      >
        {editorPanel}
      </div>

      {handleBar}

      <div
        className="flex min-h-0 min-w-0"
        style={{ flex: `${100 - splitPos} 1 0` }}
      >
        {previewPanel}
      </div>
    </div>
  );

  if (standalone) {
    return inner;
  }

  return (
    <div className="border-2 border-[#0d0d0d] bg-white mt-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-3 font-bold text-left hover:bg-zinc-100 transition-colors cursor-pointer"
      >
        <span>Live Code Playground</span>
        <span className="text-sm text-zinc-500">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="border-t-2 border-[#0d0d0d]">
          <div className="h-[500px] sm:h-[60vh] flex flex-col">
            {inner}
          </div>
        </div>
      )}
    </div>
  );
}
