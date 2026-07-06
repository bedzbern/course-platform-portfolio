import Link from 'next/link';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { getLessonById, getAdjacentLessons, getAllLessons } from '@/lib/lessons';
import { getLessonStartCode, getLessonEndCode } from '@/lib/lesson-snapshots';
import { LessonContent } from './LessonContent';
import { MarkComplete } from '@/components/MarkComplete';
import { ProgressMini } from '@/components/ProgressMini';
import { CompleteAndNext } from '@/components/CompleteAndNext';
import { CodePlayground } from '@/components/CodePlayground';

export async function generateStaticParams() {
  return getAllLessons().map(l => ({ id: l.id }));
}

function getLessonContent(id: string): string | null {
  try {
    const filePath = path.join(process.cwd(), 'content', `${id}.md`);
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lesson = getLessonById(id);
  if (!lesson) notFound();

  const content = getLessonContent(id);
  if (!content) notFound();

  const { prev, next } = getAdjacentLessons(id);

  // Pre-load the CodePlayground with per-lesson accurate code
  const startCode = getLessonStartCode(id);
  const endCode = getLessonEndCode(id);

  const initialHtml = startCode?.html || '';
  const initialCss = startCode?.css || '';
  const initialJs = startCode?.js || '';

  const answerHtml = endCode?.html || '';
  const answerCss = endCode?.css || '';
  const answerJs = endCode?.js || '';

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
        <Link href="/syllabus" className="hover:text-[#cc0000] transition-colors">Syllabus</Link>
        <span>/</span>
        <span className="font-mono">{lesson.number}</span>
        <span className="ml-auto flex items-center gap-4">
          <ProgressMini />
          <MarkComplete lessonId={id} />
        </span>
      </div>

      <LessonContent content={content} />

      <CodePlayground
        initialHtml={initialHtml}
        initialCss={initialCss}
        initialJs={initialJs}
        answerHtml={answerHtml || undefined}
        answerCss={answerCss || undefined}
        answerJs={answerJs || undefined}
      />

      <div className="mt-8 flex justify-between items-center">
        {prev ? (
          <Link
            href={`/lessons/${prev.id}`}
            className="border-2 border-[#0d0d0d] px-5 py-2.5 font-bold text-sm hover:bg-[#0d0d0d] hover:text-[#f5f0e8] transition-colors"
          >
            ← {prev.number} {prev.title}
          </Link>
        ) : <div />}
        <CompleteAndNext
          currentId={id}
          nextId={next?.id}
          nextLabel={next ? `${next.number} ${next.title}` : ''}
        />
      </div>
    </div>
  );
}
