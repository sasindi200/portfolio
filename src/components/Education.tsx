'use client';

import { useEffect, useRef, useState } from 'react';
import { timeline } from '@/data/portfolio';

export default function Education() {
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
    <section id="education" className="py-[120px] px-12 max-md:px-6">
      <div className="section-label font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
        Background
      </div>
      <h2
        className="section-h2 font-display font-black leading-none tracking-tight mb-16"
        style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
      >
        Education &amp; <em>Journey</em>
      </h2>

      <div
        ref={ref}
        className={`relative flex flex-col gap-12 pl-8 timeline reveal ${revealed ? 'visible' : ''}`}
      >
        {timeline.map((item, i) => (
          <div key={i} className="relative">
            {/* dot */}
            <div
              className="absolute -left-[37px] top-1 w-3 h-3 rounded-full border border-accent bg-bg"
              style={{ boxShadow: '0 0 8px rgba(77,159,255,0.4)' }}
            />
            <div className="font-mono text-[11px] text-muted tracking-wide mb-2">{item.period}</div>
            <div className="font-display text-[22px] font-bold mb-1">{item.title}</div>
            <div className="font-mono text-[11px] text-accent tracking-wide mb-4">{item.subtitle}</div>
            <p className="text-muted text-[15px] leading-relaxed max-w-[600px]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
