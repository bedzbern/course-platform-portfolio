import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="min-h-[80vh] flex items-center justify-center text-center px-6 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a2e] w-full border-b-4 border-[#cc0000]">
        <div className="max-w-2xl">
          <div className="inline-block bg-[#f5f0e8] text-[#0d0d0d] px-4 py-1.5 border-3 border-[#0d0d0d] text-xs font-bold tracking-[4px] mb-6">
            — CHAPTER 01: THE PROTAGONIST —
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-[#f5f0e8] mb-4" style={{ textShadow: '4px 4px 0 #cc0000, 7px 7px 0 #0d0d0d' }}>
            Build Your Manga Portfolio
          </h1>
          <div className="w-20 h-1.5 bg-[#cc0000] mx-auto mb-6" />
          <p className="text-lg text-zinc-300 max-w-lg mx-auto mb-8">
            A complete beginner-to-deploy course. 37 lessons across 6 phases. Pure HTML, CSS, and JavaScript. No frameworks.
          </p>
          <Link
            href="/syllabus"
            className="inline-block bg-[#cc0000] text-[#f5f0e8] px-10 py-3.5 text-xl font-bold border-4 border-[#f5f0e8] shadow-[6px_6px_0_#0d0d0d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_#0d0d0d] transition-all"
          >
            START LEARNING ↓
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center uppercase mb-16">The 6 Phases</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { phase: 1, title: 'HTML — Structure', desc: '10 lessons · Build the full page structure with raw HTML', color: '#cc0000' },
            { phase: 2, title: 'CSS — Make It Look Good', desc: '10 lessons · Colors, fonts, grid, flexbox, styling', color: '#cc0000' },
            { phase: 3, title: 'Manga Effects', desc: '5 lessons · Badges, speech bubbles, ink stamps, shadows', color: '#cc0000' },
            { phase: 4, title: 'JavaScript', desc: '4 lessons · Scroll effects, form handling, interactivity', color: '#cc0000' },
            { phase: 5, title: 'Evolution', desc: '5 lessons · Dynamic pages, JS automation, nav injection', color: '#cc0000' },
            { phase: 6, title: 'Ship It', desc: '3 lessons · SEO, responsive polish, deploy to GitHub Pages', color: '#cc0000' },
          ].map((p) => (
            <div key={p.phase} className="border-4 border-[#0d0d0d] p-6 bg-[#f5f0e8] hover:-translate-y-1 hover:shadow-[6px_6px_0_#0d0d0d] transition-all">
              <div className="inline-block bg-[#cc0000] text-white px-3 py-1 text-xs font-bold mb-3">PHASE {p.phase}</div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-zinc-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0d0d0d] text-[#f5f0e8] py-16 px-6 w-full border-t-4 border-[#cc0000]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black uppercase mb-4">What You&apos;ll Build</h2>
          <p className="text-zinc-300 mb-6">
            A fully responsive, manga-themed portfolio website — live on the internet. Along the way, you&apos;ll
            learn real HTML, CSS, and JavaScript skills that transfer to any web project.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            {['No frameworks — pure code', 'Every line explained', '6 working snapshots'].map((item) => (
              <div key={item} className="border-2 border-[#cc0000] px-4 py-3 font-bold">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
