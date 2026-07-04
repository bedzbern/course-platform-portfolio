export default function FAQPage() {
  const faqs = [
    {
      q: 'Do I need any coding experience?',
      a: 'No. This course starts from absolute zero — the first lesson is &quot;what is DOCTYPE?&quot; If you can open a text editor and a browser, you can take this course.',
    },
    {
      q: 'What tools do I need?',
      a: 'Just VS Code (or any text editor) and a web browser (Chrome, Firefox, or Edge). For the final lesson, you\'ll also need a free GitHub account.',
    },
    {
      q: 'Do I need to pay for anything?',
      a: 'No. All tools are free: VS Code, GitHub, Formspree (free tier), and GitHub Pages. The entire course is also free.',
    },
    {
      q: 'Why no frameworks like React?',
      a: 'This course teaches fundamentals. Once you understand pure HTML, CSS, and JS, picking up React or any framework becomes much easier. Frameworks come and go — fundamentals last forever.',
    },
    {
      q: 'How long does the course take?',
      a: 'At a comfortable pace, about 15-20 hours total. Each lesson takes 20-40 minutes. You can go faster or slower — it\'s self-paced.',
    },
    {
      q: 'What do the snapshots do?',
      a: 'Each phase has a snapshot folder with a fully working copy of the site at that stage. If you get stuck or want to skip ahead, open the snapshot in your browser to see what your code should produce.',
    },
    {
      q: 'Can I see the final result?',
      a: 'The root `portfolio/` folder contains the complete, finished website. Open `index.html` in a browser to see the final product. The `portfolio/course/` folder contains all the lessons.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black uppercase mb-6">FAQ</h1>

      <div className="border-4 border-[#0d0d0d] divide-y-2 divide-[#0d0d0d]">
        {faqs.map((faq, i) => (
          <details key={i} className="group">
            <summary className="px-6 py-4 font-bold cursor-pointer hover:bg-[#e8e0d0] transition-colors list-none flex items-center justify-between">
              {faq.q}
              <span className="text-xl group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="px-6 pb-4 text-zinc-600 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: faq.a }} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
