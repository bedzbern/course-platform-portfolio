'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

interface LessonInfo {
  id: string;
  number: string;
  title: string;
}

interface PhaseInfo {
  phase: number;
  label: string;
  lessons: LessonInfo[];
}

export function SyllabusProgress({ phases }: { phases: PhaseInfo[] }) {
  const { user, loading: authLoading } = useAuth();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (authLoading) return;
    if (!user || !db) {
      setFetched(true);
      return;
    }
    const fetch = async () => {
      try {
        const ref = doc(db, 'progress', user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          setCompleted(new Set(snap.data().completed || []));
        }
      } catch {
        // Firestore unavailable — show empty progress
      }
      setFetched(true);
    };
    fetch();
  }, [user, authLoading]);

  const ready = !authLoading;

  return (
    <>
      {phases.map((phase) => {
        const phaseDone = phase.lessons.filter(l => completed.has(l.id)).length;
        return (
          <div key={phase.phase} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#cc0000] text-white px-3 py-1 text-sm font-bold">PHASE {phase.phase}</span>
              <h2 className="text-2xl font-bold">{phase.label}</h2>
              <span className="text-zinc-400 text-sm">{phase.lessons.length} lessons</span>
              {ready && (
                <span className="text-xs font-bold text-zinc-500 ml-auto">
                  {phaseDone}/{phase.lessons.length} completed
                </span>
              )}
            </div>

            <div className="border-4 border-[#0d0d0d] divide-y-2 divide-[#0d0d0d]">
              {phase.lessons.map((lesson) => {
                const done = completed.has(lesson.id);
                return (
                  <Link
                    key={lesson.id}
                    href={`/lessons/${lesson.id}`}
                    className={`flex items-center gap-4 px-5 py-3 transition-colors group ${
                      done ? 'bg-[#f0f0e8]' : 'hover:bg-[#e8e0d0]'
                    }`}
                  >
                    <span className={`w-5 h-5 border-2 shrink-0 flex items-center justify-center ${
                      done
                        ? 'bg-[#cc0000] border-[#cc0000]'
                        : 'border-[#0d0d0d] group-hover:bg-zinc-200'
                    }`}>
                      {done && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="text-xs font-mono bg-[#0d0d0d] text-[#f5f0e8] px-2 py-0.5 shrink-0">
                      {lesson.number}
                    </span>
                    <span className={`font-medium transition-colors ${
                      done ? 'text-zinc-500' : 'group-hover:text-[#cc0000]'
                    }`}>
                      {lesson.title}
                    </span>
                    <span className="ml-auto text-zinc-400 text-xs group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                );
              })}
            </div>
            <Link
              href={`/exercises/phase-${phase.phase}`}
              className="inline-block mt-3 border-2 border-[#0d0d0d] px-4 py-2 text-sm font-bold hover:bg-[#0d0d0d] hover:text-[#f5f0e8] transition-colors"
            >
              Phase {phase.phase} Exercise →
            </Link>
          </div>
        );
      })}
    </>
  );
}
