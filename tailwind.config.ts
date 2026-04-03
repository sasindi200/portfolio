import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#060608',
        surface: '#0d0d12',
        card: '#111118',
        accent: '#4d9fff',
        accent2: '#ff6b6b',
        accent3: '#a0cfff',
        'text-primary': '#e8e8f0',
        muted: '#6b6b80',
        border: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
        bounce2: 'bounce2 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-16px) rotate(1deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        bounce2: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(8px)' },
        },
      },
      clipPath: {
        btn: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
      },
    },
  },
  plugins: [],
};

export default config;
