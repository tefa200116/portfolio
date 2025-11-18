/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'dark-gray': '#242020',
        'medium-gray': '#363636',
        'medium-light-gray': '#423b3b',
        'light-gray': '#dfdfdf',
        'brand-white': '#ffffff'
      },
      fontFamily: {
        'display': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

