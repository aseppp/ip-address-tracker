/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)'],
      },
      maxWidth: {
        desktop: '1440px',
      },
      width: {
        info: '1000px',
      },
      colors: {
        grayy: 'hsl(0, 0%, 59%)',
        darkGray: 'hsl(0, 0%, 17%)',
      },
    },
  },
  plugins: [],
};
