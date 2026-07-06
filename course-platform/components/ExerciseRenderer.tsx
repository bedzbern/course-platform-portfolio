'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import type { Exercise } from '@/lib/exercises';
import { getExercisesByLesson } from '@/lib/exercises';
import { saveExerciseScore, getExerciseScores, type ExerciseScore } from '@/lib/progress-utils';
import { ExerciseChoice } from './ExerciseChoice';
import { ExerciseCodeCheck } from './ExerciseCodeCheck';

interface Props {
  lessonId: string;
}

export function ExerciseRenderer({ lessonId }: Props) {
  const { user, loading: authLoading } = useAuth();
  const exercises = getExercisesByLesson(lessonId);
  const [scores, setScores] = useState<Record<string, ExerciseScore>>({});
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (authLoading) return;
    if (!user) { setFetched(true); return; }
    getExerciseScores(user.uid).then(s => { setScores(s); setFetched(true); });
  }, [user, authLoading]);

  const handleScore = (exerciseId: string, earned: number, total: number) => {
    setScores(prev => ({
      ...prev,
      [exerciseId]: prev[exerciseId]?.earned! >= earned ? prev[exerciseId] : { earned, total },
    }));
    if (user && earned > 0) {
      saveExerciseScore(user.uid, exerciseId, earned, total);
    }
  };

  if (exercises.length === 0) return null;
  if (!fetched) return null;

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-xl font-bold border-b-2 border-[#0d0d0d] pb-1">Lesson Exercises</h2>
      {exercises.map((ex) => {
        const score = scores[ex.id];
        const completed = !!score && score.earned >= score.total;
        return (
          <div key={ex.id}>
            {ex.type === 'choice' ? (
              <ExerciseChoice exercise={ex} completed={completed} onScore={handleScore} />
            ) : (
              <ExerciseCodeCheck exercise={ex} completed={completed} onScore={handleScore} />
            )}
          </div>
        );
      })}
    </div>
  );
}
