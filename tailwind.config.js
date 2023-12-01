/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Rufina': "'Rufina', serif",
        'Roboto': "'Roboto Slab', serif",
        'Poppins': "'Poppins', sans-serif;",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}