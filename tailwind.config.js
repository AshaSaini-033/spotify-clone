/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // React project ke liye
    "./public/index.html",          // HTML file ke liye
  ],
  theme: {
    extend: {},   // yahan aap custom colors, fonts, spacing add kar sakte ho
  },
  plugins: [],
}
