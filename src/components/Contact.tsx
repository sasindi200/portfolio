'use client';

const email = 'sasindikorala@gmail.com';

export default function Contact() {
  return (
    <section id="contact" className="py-[120px] px-12 max-md:px-6">
      <div className="section-label font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
        Let&apos;s Connect
      </div>
      <h2
        className="section-h2 font-display font-black leading-none tracking-tight mb-6"
        style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
      >
        Open to <em>Work</em>
      </h2>

      <p className="text-muted text-[16px] leading-relaxed max-w-[500px] mb-12">
        Actively seeking Junior Front-End Developer or UI/UX internship roles.
        Let&apos;s build something extraordinary together.
      </p>

      <a
        href={`mailto:${email}`}
        className="font-display font-bold text-text-primary no-underline block mb-12
                   transition-colors duration-200 hover:text-accent"
        style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
      >
        {email}
      </a>

      <div className="flex gap-8 flex-wrap mb-12">
        {[
          { href: 'https://linkedin.com/in/sasindi-linasha-5a9a07339', label: '⇗ LinkedIn' },
          { href: 'https://github.com/Sasindi200', label: '⇗ GitHub' },
          { href: 'tel:+94757103309', label: '📞 075-7103309' },
        ].map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="font-mono text-[12px] text-muted tracking-wide flex items-center gap-2
                       border-b border-[rgba(255,255,255,0.07)] pb-1 no-underline
                       transition-colors duration-200 hover:text-accent hover:border-accent"
          >
            {label}
          </a>
        ))}
      </div>

      <a
        href={`mailto:${email}`}
        className="btn-primary font-mono text-[12px] tracking-widest uppercase px-8 py-4
                   bg-accent text-black font-bold inline-flex items-center gap-2
                   transition-all duration-200 hover:-translate-y-0.5
                   hover:shadow-[0_12px_40px_rgba(77,159,255,0.3)]"
      >
        Hire Me →
      </a>
    </section>
  );
}
