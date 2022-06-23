/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,ts,html}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F79901",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right bottom, rgba(200,200,200, 0.5), rgba(219,219,219, 0.5),rgba(247,153,1, 0.5)), url('/src/assets/frame.png')",
        "footer-texture": "url('/src/assets/frame.png')",
      },
    },
  },
  plugins: [],
};
