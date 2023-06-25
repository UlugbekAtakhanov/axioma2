/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: "#F8EB25"
      },
      screens: {
        'xs': '500px',
        'sm': '640px',
      },
    },
  },
  plugins: [],
}