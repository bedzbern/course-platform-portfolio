import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSnapshotData, getAllPhases } from '@/lib/snapshots';
import { SnapshotViewer } from '@/components/SnapshotViewer';

interface Props {
  params: Promise<{ phase: string }>;
}

export async function generateStaticParams() {
  const phases = getAllPhases();
  return phases.map(p => ({ phase: `phase-${p.phase}` }));
}

export default async function ExercisePage({ params }: Props) {
  const { phase: phaseId } = await params;
  const phaseNum = parseInt(phaseId.replace('phase-', ''), 10);
  const data = getSnapshotData(phaseNum);
  if (!data) notFound();

  const htmlFile = data.files.find(f => f.name === 'index.html');
  const cssFile = data.files.find(f => f.name === 'style.css');
  const jsFile = data.files.find(f => f.name === 'script.js');

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
        <Link href="/exercises" className="hover:text-[#cc0000] transition-colors">Exercises</Link>
        <span>/</span>
        <span className="font-mono">Phase {data.phase}</span>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <span className="bg-[#cc0000] text-white px-3 py-1 text-sm font-bold">PHASE {data.phase}</span>
        <h1 className="text-3xl font-black">{data.label}</h1>
      </div>
      <p className="text-zinc-600 mb-6">{data.goal}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Snapshot answer — read-only */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider mb-2">Snapshot Answer</h2>
          <SnapshotViewer files={data.files} />
        </div>

        {/* Your workspace area */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider mb-2">Your Workspace</h2>
          <div className="border-2 border-[#0d0d0d] bg-white p-6 text-center">
            <p className="text-zinc-500 text-sm mb-4">
              Open the full-screen playground to write your code and compare with the snapshot.
            </p>
            <Link
              href={`/playground?phase=${phaseId}`}
              className="bg-[#cc0000] text-white px-6 py-3 text-base font-bold hover:bg-[#aa0000] transition-colors inline-block"
            >
              Open Full-Screen Playground →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
