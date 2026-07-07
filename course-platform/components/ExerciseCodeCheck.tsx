'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import type { CodeExercise } from '@/lib/exercises';
import { runDOMChecks, type DOMCheckResult } from '@/lib/dom-checker';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface Props {
  exercise: CodeExercise;
  completed: boolean;
  onScore: (exerciseId: string, earned: number, total: number) => void;
}

export function ExerciseCodeCheck({ exercise, completed, onScore }: Props) {
  const [tab, setTab] = useState<'html' | 'css'>('html');
  const [htmlCode, setHtmlCode] = useState(exercise.starterCode.html);
  const [cssCode, setCssCode] = useState(exercise.starterCode.css);
  const [results, setResults] = useState<DOMCheckResult[] | null>(null);
  const [checking, setChecking] = useState(false);

  const hasCss = !!exercise.starterCode.css;

  const buildDocument = () => {
    if (cssCode.trim()) {
      return htmlCode.replace('</head>', `<style>\n${cssCode}\n</style>\n</head>`);
    }
    return htmlCode;
  };

  const handleCheck = async () => {
    setChecking(true);
    setResults(null);
    const fullDoc = buildDocument();
    const res = await runDOMChecks(fullDoc, exercise.checks);
    setResults(res);
    setChecking(false);

    const allPassed = res.every(r => r.passed);
    if (allPassed) {
      onScore(exercise.id, exercise.points, exercise.points);
    } else {
      onScore(exercise.id, 0, exercise.points);
    }
  };

  const allPassed = results && results.every(r => r.passed);

  const currentCode = tab === 'html' ? htmlCode : cssCode;
  const setCurrentCode = (val: string) => {
    if (tab === 'html') setHtmlCode(val);
    else setCssCode(val);
  };
  const editorLanguage = tab === 'html' ? 'html' : 'css';

  return (
    <div className="border-4 border-[#0d0d0d] bg-white">
      <div className="bg-[#0d0d0d] text-[#f5f0e8] px-5 py-2 font-bold text-sm flex items-center justify-between">
        <span>Code Challenge</span>
        <span className="text-zinc-400">{exercise.points} pts</span>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <p className="font-bold mb-1">{exercise.prompt}</p>
          <p className="text-sm text-zinc-600">{exercise.instructions}</p>
        </div>

        <div className="flex gap-1 border-b-2 border-[#0d0d0d]">
          <button
            onClick={() => setTab('html')}
            className={`px-4 py-1.5 text-xs font-bold cursor-pointer border-t-2 border-l-2 border-r-2 rounded-t-sm -mb-[2px] transition-colors ${
              tab === 'html'
                ? 'bg-[#0d0d0d] text-[#f5f0e8] border-[#0d0d0d]'
                : 'bg-zinc-100 text-zinc-600 border-transparent hover:bg-zinc-200'
            }`}
          >
            HTML
          </button>
          {hasCss && (
            <button
              onClick={() => setTab('css')}
              className={`px-4 py-1.5 text-xs font-bold cursor-pointer border-t-2 border-l-2 border-r-2 rounded-t-sm -mb-[2px] transition-colors ${
                tab === 'css'
                  ? 'bg-[#0d0d0d] text-[#f5f0e8] border-[#0d0d0d]'
                  : 'bg-zinc-100 text-zinc-600 border-transparent hover:bg-zinc-200'
              }`}
            >
              CSS
            </button>
          )}
        </div>

        <div className="h-[280px] border-2 border-[#0d0d0d]">
          <MonacoEditor
            height="100%"
            language={editorLanguage}
            theme="vs-dark"
            value={currentCode}
            onChange={(val) => setCurrentCode(val || '')}
            options={{
              automaticLayout: true,
              minimap: { enabled: false },
              fontSize: 13,
              scrollBeyondLastLine: false,
              padding: { top: 8, bottom: 8 },
              tabCompletion: 'on',
              snippetSuggestions: 'inline',
              wordBasedSuggestions: 'currentDocument',
              suggestOnTriggerCharacters: true,
              acceptSuggestionOnEnter: 'smart',
            }}
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleCheck}
            disabled={checking || completed}
            className="bg-[#cc0000] text-white px-5 py-2 text-sm font-bold hover:bg-[#aa0000] transition-colors disabled:opacity-50 cursor-pointer"
          >
            {checking ? 'Checking...' : completed ? 'Completed' : 'Run Checks →'}
          </button>
          <button
            onClick={() => { setHtmlCode(exercise.starterCode.html); setCssCode(exercise.starterCode.css); setResults(null); }}
            className="border-2 border-[#0d0d0d] px-4 py-2 text-sm font-bold hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            Reset Code
          </button>
        </div>

        {completed && !results && (
          <div className="p-3 text-sm font-medium bg-green-50 text-green-800 border border-green-600">
            Completed — {exercise.points} pts earned
          </div>
        )}

        {results && (
          <div className="space-y-2">
            {exercise.checks.map((check, i) => {
              const r = results[i];
              return (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-3 text-sm border ${
                    r.passed
                      ? 'border-green-600 bg-green-50 text-green-800'
                      : 'border-red-500 bg-red-50 text-red-700'
                  }`}
                >
                  <span className="font-bold shrink-0 mt-0.5">{r.passed ? '✓' : '✗'}</span>
                  <div>
                    <p className="font-medium">{r.message}</p>
                  </div>
                </div>
              );
            })}
            {allPassed && (
              <div className="p-3 text-sm font-bold bg-green-100 text-green-900 border border-green-700">
                All checks passed! You earned {exercise.points} points.
              </div>
            )}
            {!allPassed && (
              <div className="p-3 text-sm bg-zinc-100 border-2 border-[#0d0d0d]">
                <p className="font-bold mb-1">Hint</p>
                <p>{exercise.hint}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
