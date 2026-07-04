'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export function MarkComplete({ lessonId }: { lessonId: string }) {
  const { user } = useAuth();
  const [completed, setCompleted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!user || !db) return;
    const fetch = async () => {
      const ref = doc(db!, 'progress', user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setCompleted((snap.data().completed || []).includes(lessonId));
      }
      setLoaded(true);
    };
    fetch();
  }, [user, lessonId]);

  const toggle = async () => {
    if (!user || !db) return;
    const ref = doc(db!, 'progress', user.uid);
    const snap = await getDoc(ref);
    const list: string[] = snap.exists() ? (snap.data().completed || []) : [];
    const next = completed ? list.filter((id: string) => id !== lessonId) : [...list, lessonId];
    setCompleted(!completed);
    await setDoc(ref, { completed: next });
  };

  if (!user || !loaded) return null;

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 border-2 px-5 py-2.5 font-bold text-sm transition-colors ${
        completed
          ? 'bg-[#cc0000] text-white border-[#cc0000]'
          : 'bg-white text-[#0d0d0d] border-[#0d0d0d] hover:bg-[#0d0d0d] hover:text-[#f5f0e8]'
      }`}
    >
      {completed ? (
        <>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Completed
        </>
      ) : (
        'Mark Complete'
      )}
    </button>
  );
}
