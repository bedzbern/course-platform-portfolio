'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    try {
      await register(email, password);
      router.push('/progress');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  return (
    <div className="max-w-sm mx-auto px-6 py-20">
      <h1 className="text-3xl font-black uppercase mb-2 text-center">Sign Up</h1>
      <p className="text-zinc-500 text-center mb-8">Create an account to save your progress.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border-3 border-[#0d0d0d] px-4 py-3 bg-[#f5f0e8] font-inherit text-sm"
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={6}
          className="border-3 border-[#0d0d0d] px-4 py-3 bg-[#f5f0e8] font-inherit text-sm"
        />
        {error && <p className="text-[#cc0000] text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-[#cc0000] text-white font-bold py-3 px-6 border-3 border-[#0d0d0d] cursor-pointer hover:bg-[#aa0000] transition-colors"
        >
          Create Account
        </button>
      </form>

      <p className="text-center text-sm mt-6 text-zinc-500">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-[#cc0000] font-bold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
