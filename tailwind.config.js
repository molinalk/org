/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'programacion':'#57C278',
      },
      backgroundColor: {
        'programacion':'#57C278',
      },
      fontFamily: {
        'prata': ['Prata', 'serif'],
      },
    },
  },
  plugins: [],
}

