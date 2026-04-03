'use client';

import { useEffect, useRef, useState } from 'react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  const listRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setRevealed(true);
      },
      { threshold: 0.1 }
    );
    if (listRef.current) observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-[120px] relative overflow-hidden px-0">
      <div className="px-12 max-md:px-6">
        <div className="section-label font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
          Selected Work
        </div>
        <h2
          className="section-h2 font-display font-black leading-none tracking-tight mb-16"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          Projects &amp; <em>Builds</em>
        </h2>
      </div>

      <div ref={listRef} className={`cin-list flex flex-col reveal ${revealed ? 'visible' : ''}`}>
        {projects.map((project) => (
          <div key={project.id} className="cin-card" data-id={project.id}>
            <div className="cin-bg" />

            <div className="cin-content">
              <div className="font-mono text-[11px] text-[rgba(255,255,255,0.15)] tracking-widest mb-4">
                {project.index}
              </div>
              <div className="flex gap-4 mb-4">
                <span className="font-mono text-[11px] text-muted tracking-wide">{project.year}</span>
                <span className="font-mono text-[11px] text-accent tracking-wide">{project.type}</span>
              </div>
              <div
                className="font-display font-black leading-none tracking-tight mb-5"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
                dangerouslySetInnerHTML={{
                  __html: project.name.replace('\n', '<br/>'),
                }}
              />
              <p className="text-muted text-[15px] leading-relaxed max-w-[420px]">
                {project.description}
              </p>
            </div>

            <div className="cin-visual">
              <div className="cin-orb" />
              <div className="cin-number">{project.index}</div>
            </div>

            <div className="cin-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}
