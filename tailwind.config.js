/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      nuntinoFont: ["Nunito Sans", "sans-sarif"],
      poppinFont: ["Poppins", "sans-sarif"],
      zeyadaFont: ["Zeyada", "cursive"],
    },
  },
  plugins: [],
};
