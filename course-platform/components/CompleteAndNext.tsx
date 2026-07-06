'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = async () => {
    if (!user) {
      setShowOverlay(true);
      return;
    }
    if (user && db) {
      const ref = doc(db!, 'progress', user.uid);
      const snap = await getDoc(ref);
      const data = snap.exists() ? snap.data() : {};
      const list: string[] = data.completed || [];
      if (!list.includes(currentId)) {
        list.push(currentId);
        await setDoc(ref, { ...data, completed: list });
      }
    }
    if (nextId) {
      router.push(`/lessons/${nextId}`);
    }
  };

  if (!nextId) return <div />;

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-[#cc0000] text-white px-6 py-3 font-bold text-sm hover:bg-[#aa0000] transition-colors flex items-center gap-2 cursor-pointer"
      >
        Complete &amp; Continue →
      </button>

      {showOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setShowOverlay(false)}>
          <div
            className="bg-white border-4 border-[#0d0d0d] p-8 max-w-sm w-full mx-4 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-lg font-black mb-2">Sign In Required</h3>
            <p className="text-sm text-zinc-600 mb-6">
              Create an account or log in to save your progress and track points across lessons.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/auth/login"
                className="block text-center bg-[#cc0000] text-white font-bold py-3 px-6 border-2 border-[#0d0d0d] hover:bg-[#aa0000] transition-colors"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="block text-center bg-white text-[#0d0d0d] font-bold py-3 px-6 border-2 border-[#0d0d0d] hover:bg-zinc-100 transition-colors"
              >
                Create Account
              </Link>
              <button
                onClick={() => setShowOverlay(false)}
                className="text-sm text-zinc-500 hover:text-zinc-800 transition-colors mt-2 cursor-pointer"
              >
                Continue without saving
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
