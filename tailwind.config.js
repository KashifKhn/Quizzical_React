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
        'dark-clr': '#293264',
        'light-clr': '#F5F7FB',
      },
      listStyleType: {
        roman: 'upper-roman',
      },
      listStyle: {
        roman: 'upper-roman',
      }
    },
  },
  plugins: [],
}

