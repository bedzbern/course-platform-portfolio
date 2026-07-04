'use client';

import { useState } from 'react';
import type { SnapshotFile } from '@/lib/snapshots';

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
      <pre className="p-3 text-xs font-mono bg-[#1e1e2e] text-[#cdd6f4] overflow-x-auto max-h-80 overflow-y-auto">
        <code>{current?.content}</code>
      </pre>
    </div>
  );
}
