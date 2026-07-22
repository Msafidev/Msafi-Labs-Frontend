/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'border-creativePink', 'border-terminalCyan', 'border-intelligenceGold',
    'text-creativePink', 'text-terminalCyan', 'text-intelligenceGold'
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        spaceNavy: "#0D0E1A",
        indigoViolet: "#6C63FF",
        creativePink: "#FF6B9D",
        terminalCyan: "#00E5C0",
        intelligenceGold: "#FFC947",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};