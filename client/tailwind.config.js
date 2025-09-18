/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
      colors: {
        gold: '#B8860B', 
       lightGray: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
