'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface Props {
  currentId: string;
  nextId?: string;
  nextLabel: string;
}

export function CompleteAndNext({ currentId, nextId, nextLabel }: Props) {
  const { user } = useAuth();
  const router = useRouter();

  const handleClick = async () => {
    if (user && db) {
      const ref = doc(db, 'progress', user.uid);
      const snap = await getDoc(ref);
      const list: string[] = snap.exists() ? (snap.data().completed || []) : [];
      if (!list.includes(currentId)) {
        list.push(currentId);
        await setDoc(ref, { completed: list });
      }
    }
    if (nextId) {
      router.push(`/lessons/${nextId}`);
    }
  };

  if (!nextId) return <div />;

  return (
    <button
      onClick={handleClick}
      className="bg-[#cc0000] text-white px-6 py-3 font-bold text-sm hover:bg-[#aa0000] transition-colors flex items-center gap-2 cursor-pointer"
    >
      Complete &amp; Continue →
    </button>
  );
}
