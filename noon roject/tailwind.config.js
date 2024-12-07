/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slowSpin: 'spin 15s linear infinite', // Customize duration
      },
      
    },
  },
  plugins: [],
}

