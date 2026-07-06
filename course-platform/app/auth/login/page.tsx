'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    const loginEmail = email.trim().toLowerCase() === 'admin' ? 'admin@admin.com' : email;
    try {
      await login(loginEmail, password);
      router.push('/progress');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <div className="max-w-sm mx-auto px-6 py-20">
      <h1 className="text-3xl font-black uppercase mb-2 text-center">Login</h1>
      <p className="text-zinc-500 text-center mb-8">Track your progress across all 37 lessons.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email or username"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border-3 border-[#0d0d0d] px-4 py-3 bg-[#f5f0e8] font-inherit text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="border-3 border-[#0d0d0d] px-4 py-3 bg-[#f5f0e8] font-inherit text-sm"
        />
        {error && <p className="text-[#cc0000] text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-[#cc0000] text-white font-bold py-3 px-6 border-3 border-[#0d0d0d] cursor-pointer hover:bg-[#aa0000] transition-colors"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm mt-6 text-zinc-500">
        No account?{' '}
        <Link href="/auth/register" className="text-[#cc0000] font-bold hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
