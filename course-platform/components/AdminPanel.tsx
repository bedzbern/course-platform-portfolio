'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore';

export function AdminPanel() {
  const { isAdmin, user } = useAuth();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [targetUid, setTargetUid] = useState('');

  if (!isAdmin || !user || !db) return null;

  const deleteProgress = async () => {
    const ref = doc(db!, 'progress', user.uid);
    const snap = await getDoc(ref);
    const data = snap.exists() ? snap.data() : {};
    await setDoc(ref, { ...data, completed: [] });
    setMessage('Progress cleared');
  };

  const deleteScores = async () => {
    const ref = doc(db!, 'progress', user.uid);
    const snap = await getDoc(ref);
    const data = snap.exists() ? snap.data() : {};
    await setDoc(ref, { ...data, exerciseScores: {}, totalPoints: 0 });
    setMessage('Exercise scores cleared');
  };

  const wipeAll = async () => {
    if (!window.confirm('Delete ALL progress and exercise data? This cannot be undone.')) return;
    const ref = doc(db!, 'progress', user.uid);
    await deleteDoc(ref);
    setMessage('All data wiped');
  };

  const wipeUserData = async () => {
    const uid = targetUid.trim();
    if (!uid) { setMessage('Enter a UID'); return; }
    if (!window.confirm(`Delete ALL progress data for user "${uid}"? This cannot be undone.`)) return;
    const ref = doc(db!, 'progress', uid);
    await deleteDoc(ref);
    setMessage(`Data wiped for ${uid}`);
    setTargetUid('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 bg-white border-4 border-[#0d0d0d] p-4 shadow-xl min-w-[260px]">
          <p className="text-xs font-bold text-zinc-500 mb-3 uppercase tracking-wider">Admin Panel</p>
          <p className="text-[10px] font-mono text-zinc-400 mb-3 break-all">Your UID: {user.uid}</p>
          <div className="space-y-2">
            <button
              onClick={deleteProgress}
              className="w-full text-left px-3 py-2 text-sm font-bold bg-zinc-100 hover:bg-zinc-200 border border-[#0d0d0d] transition-colors cursor-pointer"
            >
              Delete All Progress
            </button>
            <button
              onClick={deleteScores}
              className="w-full text-left px-3 py-2 text-sm font-bold bg-zinc-100 hover:bg-zinc-200 border border-[#0d0d0d] transition-colors cursor-pointer"
            >
              Delete All Exercise Scores
            </button>
            <button
              onClick={wipeAll}
              className="w-full text-left px-3 py-2 text-sm font-bold bg-red-50 text-red-700 hover:bg-red-100 border border-red-500 transition-colors cursor-pointer"
            >
              Wipe Everything
            </button>
          </div>
          <div className="mt-4 pt-4 border-t-2 border-[#0d0d0d]">
            <p className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-wider">Cross-User Wipe</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={targetUid}
                onChange={e => setTargetUid(e.target.value)}
                placeholder="Target user UID"
                className="flex-1 border-2 border-[#0d0d0d] px-2 py-1.5 text-xs bg-[#f5f0e8] font-mono"
              />
              <button
                onClick={wipeUserData}
                className="px-3 py-1.5 text-xs font-bold bg-red-50 text-red-700 hover:bg-red-100 border border-red-500 transition-colors cursor-pointer shrink-0"
              >
                Wipe
              </button>
            </div>
          </div>
          {message && (
            <p className="mt-3 text-xs font-bold text-green-700">{message}</p>
          )}
        </div>
      )}
      <button
        onClick={() => { setOpen(!open); setMessage(''); }}
        className="w-12 h-12 bg-[#cc0000] text-white font-bold text-lg border-2 border-[#0d0d0d] shadow-lg hover:bg-[#aa0000] transition-colors cursor-pointer flex items-center justify-center"
        title="Admin"
      >
        A
      </button>
    </div>
  );
}
