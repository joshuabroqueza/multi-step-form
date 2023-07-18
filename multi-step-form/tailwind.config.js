/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        denim: "#022959",
        "light-blue": "#ABBCFF",
        "semi-black": "#022959",
      },
    },
  },
  plugins: [],
};
