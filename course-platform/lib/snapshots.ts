import fs from 'fs';
import path from 'path';

export interface SnapshotFile {
  name: string;
  content: string;
}

export interface SnapshotData {
  phase: number;
  label: string;
  goal: string;
  files: SnapshotFile[];
}

const PHASE_INFO: { phase: number; label: string; dir: string; goal: string }[] = [
  { phase: 1, label: 'HTML — Structure', dir: 'phase-1-html', goal: 'Build the full page structure with raw HTML. No CSS, no styling.' },
  { phase: 2, label: 'CSS — Make It Look Good', dir: 'phase-2-css', goal: 'Style every section with colors, fonts, spacing, and layout.' },
  { phase: 3, label: 'Manga Effects', dir: 'phase-3-effects', goal: 'Add comic-book personality — badges, shadows, speech bubbles, ink stamps.' },
  { phase: 4, label: 'JavaScript — Interaction', dir: 'phase-4-js', goal: 'Make the site respond to the user — scroll, form, nav interaction.' },
  { phase: 5, label: 'Evolution — Manual to Automated', dir: 'phase-5-evolution', goal: 'Replace repetitive manual work with smarter JavaScript.' },
  { phase: 6, label: 'Ship It', dir: 'phase-6-ship', goal: 'Make it professional and put it live.' },
];

function getSnapshotDir(phaseDir: string): string {
  return path.join(process.cwd(), '..', 'portfolio', 'snapshots', phaseDir);
}

function readFileSafe(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

export function getSnapshotFiles(phase: number): SnapshotFile[] {
  const info = PHASE_INFO.find(p => p.phase === phase);
  if (!info) return [];

  const dir = getSnapshotDir(info.dir);
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: SnapshotFile[] = [];

  for (const entry of entries) {
    if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.css') || entry.name.endsWith('.js'))) {
      const content = readFileSafe(path.join(dir, entry.name));
      if (content !== null) {
        files.push({ name: entry.name, content });
      }
    }
  }

  // Sort: index.html first, then style.css, then script.js, then nav.js, then rest
  files.sort((a, b) => {
    const order = ['index.html', 'style.css', 'script.js', 'nav.js', 'project.html'];
    const ai = order.indexOf(a.name);
    const bi = order.indexOf(b.name);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  return files;
}

export function getSnapshotData(phase: number): SnapshotData | null {
  const info = PHASE_INFO.find(p => p.phase === phase);
  if (!info) return null;

  const files = getSnapshotFiles(phase);
  if (files.length === 0) return null;

  return {
    phase: info.phase,
    label: info.label,
    goal: info.goal,
    files,
  };
}

export function getAllPhases(): { phase: number; label: string; goal: string }[] {
  return PHASE_INFO.map(({ phase, label, goal }) => ({ phase, label, goal }));
}
