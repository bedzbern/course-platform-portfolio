'use client';

import { useEffect, useState } from 'react';

interface Item {
  id: string;
  text: string;
  done: boolean;
}

export function TryItChecklist({ lessonId }: { lessonId: string }) {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`checklist-${lessonId}`);
      if (saved) setItems(JSON.parse(saved));
    } catch { /* ignore */ }
  }, [lessonId]);

  useEffect(() => {
    try {
      localStorage.setItem(`checklist-${lessonId}`, JSON.stringify(items));
    } catch { /* ignore */ }
  }, [items, lessonId]);

  const addItem = () => {
    const text = input.trim();
    if (!text) return;
    setItems(prev => [...prev, { id: crypto.randomUUID(), text, done: false }]);
    setInput('');
  };

  const toggleItem = (id: string) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, done: !i.done } : i));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') addItem();
  };

  return (
    <div className="border-2 border-[#0d0d0d] bg-white p-4 sm:p-6 mt-6">
      <h3 className="text-lg font-bold mb-3 uppercase">Try It Checklist</h3>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a task..."
          className="flex-1 border-2 border-[#0d0d0d] px-3 py-1.5 text-sm bg-transparent outline-none"
        />
        <button
          onClick={addItem}
          className="border-2 border-[#0d0d0d] px-4 py-1.5 text-sm font-bold hover:bg-[#0d0d0d] hover:text-[#f5f0e8] transition-colors cursor-pointer"
        >
          Add
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-zinc-500 text-sm">No tasks yet. Add one above!</p>
      ) : (
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.id} className="flex items-center gap-2 group">
              <button
                onClick={() => toggleItem(item.id)}
                className={`w-5 h-5 border-2 border-[#0d0d0d] shrink-0 cursor-pointer flex items-center justify-center transition-colors ${
                  item.done ? 'bg-[#cc0000] border-[#cc0000]' : 'bg-white hover:bg-zinc-200'
                }`}
              >
                {item.done && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              <span className={`flex-1 text-sm ${item.done ? 'line-through text-zinc-400' : ''}`}>
                {item.text}
              </span>
              <button
                onClick={() => removeItem(item.id)}
                className="text-zinc-400 hover:text-red-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
