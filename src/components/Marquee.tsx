'use client';

import { marqueeItems } from '@/data/portfolio';

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="border-t border-b border-[rgba(255,255,255,0.07)] overflow-hidden py-5 bg-surface">
      <div
        className="flex gap-16 whitespace-nowrap"
        style={{ animation: 'marquee 20s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`marquee-item${item.lit ? ' lit' : ''}`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
