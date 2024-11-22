/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "6xl": ["60px", "68px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        juliusSans: ["Julius Sans One", "sans-serif"],
        archivo: ["Archivo Narrow", "sans-serif"],
        saira: ["Saira", "sans-serif"],
      },
      colors: {
        primary: "#FF6452", // Main heading color
        backgroundLight: "#FAF3E0", // Light mode background
        backgroundDark: "#0F172A", // Dark mode background
        textLight: "#2C3E50", // Light mode text color
        textDark: "#E2E8F0", // Dark mode text color
        subheadingLight: "#333333", // Light mode subheading color
        subheadingDark: "#CBD5E0", // Dark mode subheading color
        accentGold: "#FFD166", // Accent color 1
        accentGreen: "#06D6A0", // Accent color 2
        accentBlue: "#118AB2", // Accent color 3
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: "540px",
        wide: "1440px",
      },
      animation: {
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        pulse: {
          "0%": {
            transform: "translate(-50%, -50%) scale(0.8)",
            opacity: "0.5",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: "0.7",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(0.8)",
            opacity: "0.5",
          },
        },
      },
    },
  },
  plugins: [],
};
