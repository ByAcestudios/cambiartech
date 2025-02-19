/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-studio-feixen)', 'Arial', 'sans-serif'],
        headline: ['var(--font-studio-feixen)', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-slow': 'glow 10s ease-in-out infinite alternate',
        'glow-slow-reverse': 'glow 8s ease-in-out infinite alternate-reverse',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.15' },
        },
        glow: {
          '0%': { transform: 'translate(10%, 10%) scale(1.0)', opacity: '0.1' },
          '100%': { transform: 'translate(-10%, -10%) scale(1.2)', opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
};
