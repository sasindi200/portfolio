'use client';

import { useEffect, useRef, useState } from 'react';
import { skillBars, skillGroups } from '@/data/portfolio';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            setBarsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-[120px] px-12 bg-surface max-md:px-6">
      <div className="section-label font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
        Toolkit
      </div>
      <h2
        className="section-h2 font-display font-black leading-none tracking-tight mb-16"
        style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
      >
        Skills &amp; <em>Technologies</em>
      </h2>

      <div className={`flex flex-col gap-12 reveal ${revealed ? 'visible' : ''}`}>
        {/* Proficiency bars */}
        <div className="flex flex-col gap-4">
          <div className="skill-group-label font-mono text-[10px] tracking-[0.22em] uppercase text-muted flex items-center gap-3">
            Proficiency
          </div>
          <div className="flex flex-col gap-3.5">
            {skillBars.map(({ name, pct }) => (
              <div key={name} className="grid items-center gap-4" style={{ gridTemplateColumns: '140px 1fr 36px' }}>
                <div className="font-mono text-[11px] tracking-wide text-text-primary">{name}</div>
                <div className="h-[2px] bg-[rgba(255,255,255,0.07)] relative overflow-hidden">
                  <div
                    className="skill-bar-fill"
                    style={{ width: barsVisible ? `${pct}%` : '0%' }}
                  />
                </div>
                <div className="font-mono text-[10px] text-muted text-right">{pct}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill pill groups */}
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-4">
            <div className="skill-group-label font-mono text-[10px] tracking-[0.22em] uppercase text-muted flex items-center gap-3">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="skill-pill font-mono text-[12px] tracking-wide px-5 py-2.5
                             border border-[rgba(255,255,255,0.07)] text-muted bg-card cursor-none"
                >
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
