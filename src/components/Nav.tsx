'use client';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-12 py-6
                    bg-gradient-to-b from-[rgba(6,6,8,0.95)] to-transparent backdrop-blur-sm
                    max-sm:px-6 max-sm:py-5">
      <div className="font-mono text-[13px] text-accent tracking-widest uppercase">
        SK — Portfolio
      </div>
      <div className="flex gap-9 max-sm:gap-5">
        {[
          { href: '#projects', label: 'Work' },
          { href: '#skills', label: 'Skills' },
          { href: '#education', label: 'Education' },
          { href: '#contact', label: 'Contact' },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="font-mono text-[11px] text-muted tracking-widest uppercase
                       transition-colors duration-200 hover:text-accent"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
