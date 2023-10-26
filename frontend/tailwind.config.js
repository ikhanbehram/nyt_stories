/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'nyt-primary': '#55ccff',
        'nyt-darkest': '#333333',
        'nyt-darker': '#565656',
        'nyt-dark': '#7c7c7c',
      }
    },
  },
  plugins: [],
}

