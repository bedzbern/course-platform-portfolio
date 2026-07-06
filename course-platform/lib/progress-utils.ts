import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export interface ExerciseScore {
  earned: number;
  total: number;
}

export async function saveExerciseScore(
  userId: string,
  exerciseId: string,
  earned: number,
  total: number,
): Promise<void> {
  if (!db) return;
  const ref = doc(db, 'progress', userId);
  const snap = await getDoc(ref);
  const data = snap.exists() ? snap.data() : {};
  const existingScores: Record<string, ExerciseScore> = data.exerciseScores || {};

  const prev = existingScores[exerciseId];
  if (prev && prev.earned >= earned) return;

  existingScores[exerciseId] = { earned, total };

  const allScores = Object.values(existingScores);
  const totalPoints = allScores.reduce((sum, s) => sum + s.earned, 0);

  await setDoc(ref, {
    ...data,
    exerciseScores: existingScores,
    totalPoints,
  });
}

export async function getExerciseScores(userId: string): Promise<Record<string, ExerciseScore>> {
  if (!db) return {};
  const ref = doc(db, 'progress', userId);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data().exerciseScores || {}) : {};
}

export async function getUserTotalPoints(userId: string): Promise<number> {
  if (!db) return 0;
  const ref = doc(db, 'progress', userId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return 0;
  const scores: Record<string, ExerciseScore> = snap.data().exerciseScores || {};
  return Object.values(scores).reduce((sum, s) => sum + s.earned, 0);
}
