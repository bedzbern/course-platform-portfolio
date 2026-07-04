'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PreWrapper } from '@/components/CopyCode';

export function LessonContent({ content }: { content: string }) {
  return (
    <div className="markdown bg-white border-4 border-[#0d0d0d] p-6 sm:p-10">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre: ({ children }) => <PreWrapper>{children}</PreWrapper>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
