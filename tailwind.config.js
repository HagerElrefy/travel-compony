/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Background:"#F8FDFF",
        Primary:"#80A5B3",
        Secondary:"#C8DAE1"
      },
      translate: {
        '-45': '-45%',
      },
      boxShadow: {
        '3xl': '0px 4px 15px rgba(0, 0, 0, 0.1), 10px 10px 30px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}