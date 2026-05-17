/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:  '#3a1c36',
          mauve:   '#674e5f',
          olive:   '#6d6f21',
          forest:  '#354125',
          warm:    '#574f41',
          cream:   '#e7e7d3',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
