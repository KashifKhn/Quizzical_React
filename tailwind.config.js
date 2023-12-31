/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-clr': '#4D5B9E',
        'select-clr': '#D6DBF5',
        'dark-clr': '#293264',
        'light-clr': '#F5F7FB',
        'correct-clr': '#94D7A2',
        'inCorrect-clr': '#F8BCBC'

      }
    },
  },
  plugins: [],
}