'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/auth';

export function Navbar() {
  const { user, logout, isAdmin } = useAuth();

  return (
    <nav className="bg-[#0d0d0d] border-b-4 border-[#cc0000]">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-[#f5f0e8] font-bold text-lg tracking-widest">
          MANGA PORTFOLIO COURSE
        </Link>
        <ul className="flex items-center gap-6 text-sm min-h-[28px]">
          <li><Link href="/syllabus" className="text-[#f5f0e8] hover:text-[#cc0000] transition-colors">Syllabus</Link></li>
          <li><Link href="/about" className="text-[#f5f0e8] hover:text-[#cc0000] transition-colors">About</Link></li>
          <li><Link href="/faq" className="text-[#f5f0e8] hover:text-[#cc0000] transition-colors">FAQ</Link></li>
          {user ? (
            <>
              <li><Link href="/progress" className="text-[#f5f0e8] hover:text-[#cc0000] transition-colors">Progress</Link></li>
              <li><span className="text-zinc-400 text-xs">{isAdmin ? 'Admin' : user.email}</span></li>
              <li><button onClick={logout} className="text-[#cc0000] hover:text-white transition-colors cursor-pointer">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link href="/auth/login" className="text-[#f5f0e8] hover:text-[#cc0000] transition-colors">Login</Link></li>
              <li><Link href="/auth/register" className="bg-[#cc0000] text-white px-4 py-1.5 rounded hover:bg-[#aa0000] transition-colors">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
