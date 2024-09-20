/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#080A07",
        secondary: "#161616",
        active: "#2C2C2C",
        hover: "#2C2C2C88",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
