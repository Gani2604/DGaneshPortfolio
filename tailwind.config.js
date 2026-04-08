/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Monogram Dark Theme
        mono: {
          black:   '#000000',
          card:    '#111111',
          border:  '#32373C',
          muted:   '#606060',
          gray:    '#ABB8C3',
          white:   '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        tight: '-0.025em',
        tighter: '-0.035em',
      },
    },
  },
  plugins: [],
}
