import { getSnapshotFiles, getAllPhases } from '@/lib/snapshots';
import { PlaygroundClient } from './PlaygroundClient';

interface Props {
  searchParams: Promise<{ phase?: string }>;
}

export default async function PlaygroundPage({ searchParams }: Props) {
  const { phase: phaseParam } = await searchParams;
  const phaseNum = phaseParam ? parseInt(phaseParam.replace('phase-', ''), 10) : 2;
  const files = getSnapshotFiles(phaseNum);
  const phases = getAllPhases();

  const findFile = (name: string) => files.find(f => f.name === name)?.content || '';
  const html = findFile('index.html');
  const css = findFile('style.css');
  const js = findFile('script.js');

  return (
    <PlaygroundClient
      initialHtml={html || undefined}
      initialCss={css || undefined}
      initialJs={js || undefined}
      answerHtml={html || undefined}
      answerCss={css || undefined}
      answerJs={js || undefined}
      currentPhase={phaseNum}
      phases={phases}
    />
  );
}
