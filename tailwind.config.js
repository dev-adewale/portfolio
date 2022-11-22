/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        'dimGrey': '#C9CACC',
        'dimGreyAlt': '#6B7280',
        'green': '#2BBC89',
        'cuppy': '#D37EA8',
      },

      fontSize: {
        'sl': '0.875rem'
      }
    },
  },
  plugins: [],
}
