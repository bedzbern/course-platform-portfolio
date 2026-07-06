import Link from 'next/link';
import { getLessonsByPhase } from '@/lib/lessons';

export default function SyllabusPage() {
  const phases = getLessonsByPhase();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-black uppercase mb-2">Course Syllabus</h1>
      <p className="text-zinc-600 mb-4">37 lessons across 6 phases. Start at Phase 1 and go in order.</p>
      <div className="mb-10">
        <Link href="/exercises" className="text-[#cc0000] font-bold text-sm hover:underline">
          View Phase Exercises →
        </Link>
      </div>

      {phases.filter(p => p.phase > 0).map((phase) => (
        <div key={phase.phase} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#cc0000] text-white px-3 py-1 text-sm font-bold">PHASE {phase.phase}</span>
            <h2 className="text-2xl font-bold">{phase.label}</h2>
            <span className="text-zinc-400 text-sm">{phase.lessons.length} lessons</span>
          </div>

          <div className="border-4 border-[#0d0d0d] divide-y-2 divide-[#0d0d0d]">
            {phase.lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/lessons/${lesson.id}`}
                className="flex items-center gap-4 px-5 py-3 hover:bg-[#e8e0d0] transition-colors group"
              >
                <span className="text-xs font-mono bg-[#0d0d0d] text-[#f5f0e8] px-2 py-0.5 shrink-0">
                  {lesson.number}
                </span>
                <span className="font-medium group-hover:text-[#cc0000] transition-colors">
                  {lesson.title}
                </span>
                <span className="ml-auto text-zinc-400 text-xs group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
          <Link
            href={`/exercises/phase-${phase.phase}`}
            className="inline-block mt-3 border-2 border-[#0d0d0d] px-4 py-2 text-sm font-bold hover:bg-[#0d0d0d] hover:text-[#f5f0e8] transition-colors"
          >
            Phase {phase.phase} Exercise →
          </Link>
        </div>
      ))}
    </div>
  );
}
