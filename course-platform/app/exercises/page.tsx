import Link from 'next/link';
import { getAllPhases } from '@/lib/snapshots';

export default function ExercisesIndexPage() {
  const phases = getAllPhases();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black uppercase mb-2">Phase Exercises</h1>
      <p className="text-zinc-500 mb-8">
        Each exercise asks you to recreate the snapshot for that phase. Use the playground to write your code, then check your answer.
      </p>

      <div className="space-y-4">
        {phases.map(p => (
          <div key={p.phase} className="border-2 border-[#0d0d0d] bg-white p-5 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-[#cc0000] text-white px-3 py-0.5 text-xs font-bold">PHASE {p.phase}</span>
                <h2 className="text-lg font-bold">{p.label}</h2>
              </div>
              <p className="text-sm text-zinc-500">{p.goal}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <Link
                href={`/exercises/phase-${p.phase}`}
                className="border-2 border-[#0d0d0d] px-4 py-2 text-sm font-bold hover:bg-[#0d0d0d] hover:text-[#f5f0e8] transition-colors"
              >
                View Exercise →
              </Link>
              <Link
                href={`/playground?phase=phase-${p.phase}`}
                className="bg-[#cc0000] text-white px-4 py-2 text-sm font-bold hover:bg-[#aa0000] transition-colors"
              >
                Open Playground →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
