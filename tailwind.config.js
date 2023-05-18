/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
        colors: {
            "primary": "#003366",
            "h-primary": "#004d99",
            "secondary": "#333",
            "h-secondary": "#ccc",
            "accent1": "#00FF00",
            "accent2": "#C0C0C0",
            "accent3": "#800080"
        },
        fontFamily: {
            "heading": "'Bebas Neue', 'sans-serif'",
            "thin": "'Inconsolata', monospace",
            "play": "'Pacifico', cursive",
        }
    },
  },
  plugins: [],
}

