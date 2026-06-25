/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#16352B',
        gold: '#C7A56B',
        cream: '#FAFAF8',
        ink: '#1E1E1E',
        'forest-light': '#1d4535',
        'gold-light': '#d4b882',
        'gold-dark': '#a8863a',
        stone: '#E8E4DC',
        mist: '#F4F2EE',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
