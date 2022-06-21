/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,ts,html}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F79901",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/frame.png')",
        "footer-texture": "url('/src/assets/frame.png')",
      },
    },
  },
  plugins: [],
};
