'use client';

import { useState, type ReactNode } from 'react';

export function PreWrapper({ children }: { children: ReactNode }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = extractText(children);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for insecure contexts
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 text-xs px-2 py-1 bg-zinc-700 text-zinc-300 rounded hover:bg-zinc-600 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre>{children}</pre>
    </div>
  );
}

function extractText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node && typeof node === 'object' && 'props' in node) {
    return extractText((node as { props: { children: ReactNode } }).props.children);
  }
  return '';
}
