'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getAllLessons, getLessonsByPhase } from '@/lib/lessons';

export default function ProgressPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user || !db) return;
    const fetchProgress = async () => {
      const ref = doc(db!, 'progress', user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setCompleted(new Set(snap.data().completed || []));
      }
      setLoaded(true);
    };
    fetchProgress();
  }, [user]);

  const toggleLesson = async (id: string) => {
    if (!user || !db) return;
    const next = new Set(completed);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setCompleted(next);
    await setDoc(doc(db!, 'progress', user.uid), { completed: Array.from(next) });
  };

  if (loading || !loaded) {
    return <div className="text-center py-20 text-zinc-500">Loading...</div>;
  }

  const phases = getLessonsByPhase().filter(p => p.phase > 0);
  const allIds = getAllLessons().map(l => l.id);
  const total = allIds.length;
  const done = completed.size;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-black uppercase mb-2">Your Progress</h1>
      <p className="text-zinc-500 mb-6">{user?.email}</p>

      <div className="border-4 border-[#0d0d0d] p-6 mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="font-bold">{done} / {total} lessons</span>
          <span className="text-2xl font-black">{pct}%</span>
        </div>
        <div className="h-4 bg-zinc-300 border-2 border-[#0d0d0d]">
          <div className="h-full bg-[#cc0000] transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {phases.map(phase => {
        const phaseDone = phase.lessons.filter(l => completed.has(l.id)).length;
        return (
          <div key={phase.phase} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#cc0000] text-white px-3 py-1 text-sm font-bold">PHASE {phase.phase}</span>
              <h2 className="text-xl font-bold">{phase.label}</h2>
              <span className="text-zinc-400 text-xs">{phaseDone}/{phase.lessons.length}</span>
            </div>
            <div className="border-2 border-[#0d0d0d] divide-y divide-[#0d0d0d]">
              {phase.lessons.map(lesson => (
                <div key={lesson.id} className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#e8e0d0] transition-colors">
                  <button
                    onClick={() => toggleLesson(lesson.id)}
                    className={`w-5 h-5 border-2 border-[#0d0d0d] shrink-0 cursor-pointer hover:bg-zinc-200 transition-colors flex items-center justify-center ${
                      completed.has(lesson.id) ? 'bg-[#cc0000] border-[#cc0000]' : 'bg-white'
                    }`}
                  >
                    {completed.has(lesson.id) && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span className="text-xs font-mono text-zinc-400 w-14">{lesson.number}</span>
                  <Link href={`/lessons/${lesson.id}`} className="font-medium hover:text-[#cc0000] transition-colors">
                    {lesson.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
