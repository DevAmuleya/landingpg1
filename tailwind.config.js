/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', 'sans-serif']
      },

      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
        bg_footer: "#18171C",
        primary_blue: "rgb(142, 122, 218)",
        bg_primary: "rgb(247, 247, 247)",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },

      boxShadow: {
        'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}