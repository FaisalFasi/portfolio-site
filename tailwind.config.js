/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          text: "#333333",
        },
        dark: {
          background: "#1a202c",
          bgHeaderAboutMe: "#0F141A",
          bgBodyAboutMe: "#161B24",
          bgBody: "#161B24",
          bgFooter: "#0F141A",
          text: "#ffffff",
        },
      },
    },
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
