export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black uppercase mb-6">About This Course</h1>

      <div className="markdown bg-white border-4 border-[#0d0d0d] p-8">
        <h2>What Is This?</h2>
        <p>
          The <strong>Manga Portfolio Builder</strong> is a free, beginner-to-deploy course that teaches you
          how to build a real portfolio website from scratch using pure HTML, CSS, and JavaScript.
        </p>
        <p>
          No frameworks. No code generators. No copy-paste. You type every line and understand every concept.
        </p>

        <h2>Who Is It For?</h2>
        <p>Absolute beginners who have never written a line of code. You don&apos;t need any prior experience.</p>

        <h2>What You&apos;ll Learn</h2>
        <ul>
          <li>HTML5 document structure and semantic tags</li>
          <li>CSS layout, colors, fonts, grid, flexbox, and responsive design</li>
          <li>Manga-style visual effects (speech bubbles, ink stamps, shadows)</li>
          <li>JavaScript for scroll effects, form handling, and dynamic content</li>
          <li>How to evolve manual code into automated, data-driven code</li>
          <li>Git and GitHub Pages deployment</li>
        </ul>

        <h2>The Teaching Philosophy</h2>
        <ol>
          <li><strong>One concept per lesson</strong> — never mix topics</li>
          <li><strong>Manual before automatic</strong> — write 3 HTML files, then evolve to 1 dynamic page</li>
          <li><strong>No frameworks</strong> — pure HTML + CSS + JavaScript</li>
          <li><strong>Student types every line</strong> — no copy-paste</li>
          <li><strong>Each lesson has a &quot;Try It&quot; challenge</strong></li>
          <li><strong>Snapshots show evolution</strong> — open any phase folder and it works</li>
        </ol>

        <h2>Course Structure</h2>
        <p>
          37 lessons across 6 phases. Each lesson follows the same format: Goal → What You Type →
          What Each Line Means → Try It → What You Learned. Start at lesson 01-01 and go in order.
        </p>
      </div>
    </div>
  );
}
