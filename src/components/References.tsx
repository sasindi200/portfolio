'use client';

import { useEffect, useRef, useState } from 'react';
import { references } from '@/data/portfolio';

export default function References() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setRevealed(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="references" className="py-[120px] px-12 bg-card max-md:px-6">
      <div className="section-label font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
        Endorsements
      </div>
      <h2
        className="section-h2 font-display font-black leading-none tracking-tight mb-16"
        style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
      >
        <em>References</em>
      </h2>

      <div
        ref={ref}
        className={`grid grid-cols-2 gap-0.5 reveal max-md:grid-cols-1 ${revealed ? 'visible' : ''}`}
      >
        {references.map((r) => (
          <div
            key={r.name}
            className="bg-surface border border-[rgba(255,255,255,0.07)] p-9
                       transition-colors duration-200 hover:border-[rgba(107,255,218,0.3)]"
          >
            <div className="font-display text-[22px] font-bold mb-1">{r.name}</div>
            <div className="font-mono text-[11px] text-accent3 tracking-wide mb-4">{r.role}</div>
            <div className="text-[13px] text-muted mb-3 whitespace-pre-line">{r.org}</div>
            <div className="font-mono text-[12px] text-muted">{r.contact}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
