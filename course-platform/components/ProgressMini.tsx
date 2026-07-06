'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getAllLessons } from '@/lib/lessons';
import { TOTAL_COURSE_POINTS } from '@/lib/exercises';

export function ProgressMini() {
  const { user, loading: authLoading } = useAuth();
  const [pct, setPct] = useState(0);
  const [points, setPoints] = useState(0);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (authLoading) return;
    if (!user || !db) {
      setFetched(true);
      return;
    }
    const fetch = async () => {
      try {
        const ref = doc(db!, 'progress', user.uid);
        const snap = await getDoc(ref);
        const all = getAllLessons().length;
        const data = snap.exists() ? snap.data() : {};
        const done = (data.completed || []).length;
        setPct(all > 0 ? Math.round((done / all) * 100) : 0);
        const pts = data.totalPoints || 0;
        setPoints(pts);
      } catch {
        // Firestore unavailable
      }
      setFetched(true);
    };
    fetch();
  }, [user, authLoading]);

  if (!fetched && authLoading) return null;

  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="font-bold text-zinc-500">{points}/{TOTAL_COURSE_POINTS} pts</span>
      <span className="font-bold text-zinc-500">{pct}%</span>
      <div className="w-20 h-2.5 bg-zinc-300 border border-[#0d0d0d]">
        <div className="h-full bg-[#cc0000] transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
