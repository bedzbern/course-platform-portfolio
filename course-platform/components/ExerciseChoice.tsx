'use client';

import { useState } from 'react';
import type { ChoiceExercise } from '@/lib/exercises';

interface Props {
  exercise: ChoiceExercise;
  completed: boolean;
  onScore: (exerciseId: string, earned: number, total: number) => void;
}

export function ExerciseChoice({ exercise, completed, onScore }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (index: number) => {
    if (completed || revealed) return;
    setSelected(index);
    setRevealed(true);
    if (index === exercise.correctIndex) {
      onScore(exercise.id, exercise.points, exercise.points);
    } else {
      onScore(exercise.id, 0, exercise.points);
    }
  };

  const isCorrect = selected === exercise.correctIndex;

  return (
    <div className="border-4 border-[#0d0d0d] bg-white">
      <div className="bg-[#0d0d0d] text-[#f5f0e8] px-5 py-2 font-bold text-sm flex items-center justify-between">
        <span>Exercise</span>
        <span className="text-zinc-400">{exercise.points} pts</span>
      </div>
      <div className="p-5">
        <p className="font-bold mb-4">{exercise.prompt}</p>
        <div className="space-y-2">
          {exercise.options.map((option, i) => {
            let btnStyle = 'border-2 border-[#0d0d0d] hover:bg-zinc-100';
            if (revealed && i === exercise.correctIndex) {
              btnStyle = 'border-2 border-green-600 bg-green-50 text-green-800';
            } else if (revealed && i === selected && i !== exercise.correctIndex) {
              btnStyle = 'border-2 border-red-500 bg-red-50 text-red-700';
            } else if (completed) {
              btnStyle = 'border-2 border-zinc-300 text-zinc-400';
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={completed}
                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${btnStyle}`}
              >
                <span className="font-mono mr-3 text-zinc-400">{String.fromCharCode(65 + i)}</span>
                {option}
              </button>
            );
          })}
        </div>
        {revealed && (
          <div className={`mt-4 p-3 text-sm font-medium ${isCorrect ? 'bg-green-50 text-green-800 border border-green-600' : 'bg-red-50 text-red-700 border border-red-500'}`}>
            <p className="font-bold mb-1">{isCorrect ? 'Correct!' : 'Not quite.'}</p>
            <p>{exercise.explanation}</p>
          </div>
        )}
        {completed && !revealed && (
          <div className="mt-4 p-3 text-sm font-medium bg-green-50 text-green-800 border border-green-600">
            Completed — {exercise.points} pts earned
          </div>
        )}
      </div>
    </div>
  );
}
