'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import type { SnapshotFile } from '@/lib/snapshots';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

function detectLang(name: string): string {
  if (name.endsWith('.html')) return 'html';
  if (name.endsWith('.css')) return 'css';
  if (name.endsWith('.js')) return 'javascript';
  return 'plaintext';
}

export function SnapshotViewer({ files }: { files: SnapshotFile[] }) {
  const [tab, setTab] = useState(0);
  const current = files[tab];

  if (files.length === 0) {
    return <p className="text-zinc-500 text-sm">No snapshot files available.</p>;
  }

  return (
    <div className="border-2 border-[#0d0d0d] bg-white">
      <div className="flex flex-wrap border-b-2 border-[#0d0d0d]">
        {files.map((f, i) => (
          <button
            key={f.name}
            onClick={() => setTab(i)}
            className={`px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
              tab === i
                ? 'bg-[#0d0d0d] text-[#f5f0e8]'
                : 'hover:bg-zinc-200'
            }`}
          >
            {f.name}
          </button>
        ))}
      </div>
      <div className="h-80">
        <MonacoEditor
          language={detectLang(current?.name || '')}
          theme="vs-dark"
          value={current?.content || ''}
          options={{
            readOnly: true,
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 12,
            scrollBeyondLastLine: false,
            padding: { top: 12, bottom: 12 },
          }}
        />
      </div>
    </div>
  );
}
