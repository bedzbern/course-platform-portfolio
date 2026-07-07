'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getAllLessons, getLessonsByPhase } from '@/lib/lessons';
import { getPhasePoints, TOTAL_COURSE_POINTS } from '@/lib/exercises';

export default function ProgressPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [scores, setScores] = useState<Record<string, any>>({});
  const [loaded, setLoaded] = useState(false);
  const [selectedPhases, setSelectedPhases] = useState<Set<number>>(new Set());

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
        const data = snap.data();
        setCompleted(new Set(data.completed || []));
        setScores(data.exerciseScores || {});
      }
      setLoaded(true);
    };
    fetchProgress();
  }, [user]);

  const togglePhase = (phase: number) => {
    setSelectedPhases(prev => {
      const next = new Set(prev);
      next.has(phase) ? next.delete(phase) : next.add(phase);
      return next;
    });
  };

  const resetSelectedPhases = async () => {
    const phases = getLessonsByPhase().filter(p => selectedPhases.has(p.phase));
    const lessonIds = new Set(phases.flatMap(p => p.lessons.map(l => l.id)));

    const phasePrefixes = new Set(Array.from(selectedPhases).map(p => `0${p}-`));

    const newCompleted = new Set(completed);
    lessonIds.forEach(id => newCompleted.delete(id));

    const newScores = { ...scores };
    Object.keys(newScores).forEach(key => {
      for (const prefix of phasePrefixes) {
        if (key.startsWith(prefix)) {
          delete newScores[key];
          break;
        }
      }
    });

    const totalPoints = Object.values(newScores).reduce((sum: number, s: any) => sum + (s.earned || 0), 0);

    if (!window.confirm(`Reset progress for ${selectedPhases.size} selected phase(s)? This cannot be undone.`)) return;

    if (user && db) {
      await setDoc(doc(db!, 'progress', user.uid), {
        completed: Array.from(newCompleted),
        exerciseScores: newScores,
        totalPoints,
      });
    }

    setCompleted(newCompleted);
    setScores(newScores);
    setSelectedPhases(new Set());
  };

  if (loading || !loaded) {
    return <div className="text-center py-20 text-zinc-500">Loading...</div>;
  }

  const phases = getLessonsByPhase().filter(p => p.phase > 0);
  const allIds = getAllLessons().map(l => l.id);
  const total = allIds.length;
  const done = completed.size;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const userTotalPoints = Object.values(scores).reduce((sum: number, s: any) => sum + (s.earned || 0), 0);

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

      <div className="mb-8 p-4 bg-white border-4 border-[#0d0d0d] flex items-center gap-4">
        <span className="text-sm font-bold">Total Points</span>
        <span className="text-2xl font-bold text-[#cc0000]">{userTotalPoints}</span>
        <span className="text-zinc-500 text-sm">/ {TOTAL_COURSE_POINTS}</span>
        <div className="flex-1 h-4 bg-zinc-300 border border-[#0d0d0d] max-w-xs">
          <div className="h-full bg-[#cc0000] transition-all" style={{ width: `${TOTAL_COURSE_POINTS > 0 ? Math.round((userTotalPoints / TOTAL_COURSE_POINTS) * 100) : 0}%` }} />
        </div>
      </div>

      {phases.map(phase => {
        const phaseDone = phase.lessons.filter(l => completed.has(l.id)).length;
        const phasePts = getPhasePoints(phase.phase);
        const phaseEarned = phase.lessons.reduce((sum, l) => {
          const exIds = Object.keys(scores).filter(id => id.startsWith(l.id.split('-')[0] + '-' + l.id.split('-')[1] + '-'));
          return sum + exIds.reduce((s, id) => s + (scores[id]?.earned || 0), 0);
        }, 0);
        const checked = selectedPhases.has(phase.phase);
        return (
          <div key={phase.phase} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => togglePhase(phase.phase)}
                  className="w-4 h-4 accent-[#cc0000]"
                />
                <span className="bg-[#cc0000] text-white px-3 py-1 text-sm font-bold">PHASE {phase.phase}</span>
              </label>
              <h2 className="text-xl font-bold">{phase.label}</h2>
              <span className="text-zinc-400 text-xs ml-auto flex items-center gap-3">
                <span>{phaseDone}/{phase.lessons.length} completed</span>
                <span>{phaseEarned}/{phasePts.total} pts</span>
              </span>
            </div>
            <div className="border-4 border-[#0d0d0d] divide-y-2 divide-[#0d0d0d]">
              {phase.lessons.map(lesson => {
                const done = completed.has(lesson.id);
                return (
                  <Link
                    key={lesson.id}
                    href={`/lessons/${lesson.id}`}
                    className={`flex items-center gap-4 px-5 py-3 transition-all group cursor-pointer border-l-4 border-l-transparent ${
                      done ? 'bg-[#f0f0e8]' : 'hover:bg-[#d8d0c0] hover:border-l-[#cc0000]'
                    }`}
                  >
                    <span className={`w-5 h-5 border-2 shrink-0 flex items-center justify-center ${
                      done ? 'bg-[#cc0000] border-[#cc0000]' : 'border-[#0d0d0d] group-hover:bg-zinc-300'
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
                    <span className={`ml-auto text-xs font-bold transition-all ${
                      done ? 'text-zinc-400' : 'text-zinc-500 group-hover:text-[#cc0000] group-hover:translate-x-1'
                    }`}>→</span>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}

      {user && db && selectedPhases.size > 0 && (
        <div className="mt-8 border-t-2 border-[#0d0d0d] pt-6">
          <button
            onClick={resetSelectedPhases}
            className="border-2 border-red-500 text-red-600 px-5 py-2.5 text-sm font-bold hover:bg-red-50 transition-colors cursor-pointer"
          >
            Reset Selected Phases ({selectedPhases.size})
          </button>
        </div>
      )}
    </div>
  );
}
