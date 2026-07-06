import Link from 'next/link';
import { getLessonsByPhase } from '@/lib/lessons';
import { SyllabusProgress } from '@/components/SyllabusProgress';

export default function SyllabusPage() {
  const phases = getLessonsByPhase().filter(p => p.phase > 0);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-black uppercase mb-2">Course Syllabus</h1>
      <p className="text-zinc-600 mb-4">37 lessons across 6 phases. Start at Phase 1 and go in order.</p>
      <div className="mb-10">
        <Link href="/exercises" className="text-[#cc0000] font-bold text-sm hover:underline">
          View Phase Reviews →
        </Link>
      </div>

      <SyllabusProgress phases={phases} />
    </div>
  );
}
