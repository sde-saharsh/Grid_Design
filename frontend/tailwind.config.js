/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- change this from 'media' to 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
