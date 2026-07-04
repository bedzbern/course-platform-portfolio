'use client';

import { CodePlayground } from '@/components/CodePlayground';

interface PhaseInfo {
  phase: number;
  label: string;
  goal: string;
}

interface Props {
  initialHtml?: string;
  initialCss?: string;
  initialJs?: string;
  answerHtml?: string;
  answerCss?: string;
  answerJs?: string;
  currentPhase: number;
  phases: PhaseInfo[];
}

export function PlaygroundClient(props: Props) {
  const { currentPhase, phases, ...playgroundProps } = props;
  const phaseInfo = phases.find(p => p.phase === currentPhase);

  return (
    <div className="flex-1 flex flex-col min-h-0">
      <div className="bg-[#0d0d0d] text-[#f5f0e8] px-6 py-2 flex items-center gap-3 shrink-0">
        <label className="text-xs font-bold uppercase tracking-wider">Phase:</label>
        <select
          className="bg-[#1a1a1a] text-[#f5f0e8] border border-zinc-600 px-2 py-1 text-sm"
          value={`phase-${currentPhase}`}
          onChange={e => {
            window.location.href = `/playground?phase=${e.target.value}`;
          }}
        >
          {phases.map(p => (
            <option key={p.phase} value={`phase-${p.phase}`}>
              Phase {p.phase}: {p.label}
            </option>
          ))}
        </select>
        {phaseInfo && (
          <span className="text-zinc-400 text-xs truncate ml-2">{phaseInfo.goal}</span>
        )}
      </div>
      <div className="flex-1 flex flex-col min-h-0">
        <CodePlayground standalone {...playgroundProps} />
      </div>
    </div>
  );
}
