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
    // dropShadow: {
    //   bottom: ["0 35px 35px rgba(0, 0, 0, 0.25)"],
    //   top: ["0 35px 35px rgba(0, 0, 0, 0.25)"],
    //   topBottom: ["0 35px 35px rgba(0, 0, 0, 0.25)"],
    // },
  },
  plugins: [],
};
