'use client';

export default function Hero() {
  const email = 'sasindikorala@gmail.com';

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-2 items-center px-12 pt-[120px] pb-20
                 relative overflow-hidden max-md:grid-cols-1 max-md:px-6 max-md:gap-16"
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(77,159,255,0.06) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(160,207,255,0.04) 0%, transparent 50%)',
        }}
      />
      <div className="hero-grid-lines" />

      {/* Left */}
      <div className="relative z-[2]">
        <div className="hero-tag font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
          Available for opportunities
        </div>

        <h1
          className="font-display font-black leading-[0.95] tracking-tight mb-8"
          style={{ fontSize: 'clamp(56px, 7vw, 96px)' }}
        >
          <span className="block">Sasindi</span>
          <span className="block accent-word">Korala</span>
        </h1>

        <p className="text-muted text-base leading-relaxed max-w-[440px] mb-12 font-light">
          Front-end developer &amp; UI/UX designer crafting intuitive, visually striking digital
          experiences. 2nd-year CS undergraduate with a passion for turning ideas into beautiful,
          functional products.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="btn-primary font-mono text-[12px] tracking-widest uppercase px-8 py-4
                       bg-accent text-black font-bold inline-flex items-center gap-2
                       transition-all duration-200 hover:-translate-y-0.5
                       hover:shadow-[0_12px_40px_rgba(77,159,255,0.3)]"
          >
            View My Work →
          </a>
          <a
            href={`mailto:${email}`}
            className="font-mono text-[12px] tracking-widest uppercase px-8 py-4
                       bg-transparent text-text-primary border border-[rgba(255,255,255,0.07)]
                       inline-flex items-center gap-2 transition-all duration-200
                       hover:border-accent hover:text-accent"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right — floating card */}
      <div className="relative z-[2] flex justify-center items-center max-md:hidden">
        <div
          className="hero-card w-[340px] bg-card border border-[rgba(255,255,255,0.07)] p-9 relative"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        >
          {/* top accent line via ::before in globals */}
          <div
            className="w-18 h-18 rounded-full mb-5 flex items-center justify-center
                        font-display text-[28px] font-black text-black"
            style={{
              width: 72,
              height: 72,
              background: 'linear-gradient(135deg, #4d9fff 0%, #a0cfff 100%)',
            }}
          >
            SK
          </div>
          <div className="font-display text-[22px] font-bold mb-1">Sasindi Korala</div>
          <div className="font-mono text-[11px] text-accent tracking-widest uppercase mb-6">
            Frontend Dev · UI/UX
          </div>

          <div className="grid grid-cols-2 gap-4 mb-5">
            {[
              { num: '5', label: 'Projects' },
              { num: '2nd', label: 'Year CS' },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="bg-surface border border-[rgba(255,255,255,0.07)] p-3"
              >
                <div className="font-display text-[28px] font-black text-accent leading-none">{num}</div>
                <div className="font-mono text-[10px] text-muted tracking-wider uppercase mt-1">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {['React', 'Figma', 'Node.js', 'Flutter', 'Python', 'TypeScript'].map((tag) => {
              const active = ['React', 'Figma'].includes(tag);
              return (
                <span
                  key={tag}
                  className={`font-mono text-[10px] px-2.5 py-1 border tracking-wide
                    ${active
                      ? 'border-accent text-accent bg-[rgba(77,159,255,0.07)]'
                      : 'border-[rgba(255,255,255,0.07)] text-muted'
                    }`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2
                   font-mono text-[10px] text-muted tracking-widest uppercase z-[2]"
        style={{ animation: 'bounce2 2s ease-in-out infinite' }}
      >
        <div
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, var(--muted), transparent)' }}
        />
        <span>scroll</span>
      </div>
    </section>
  );
}
