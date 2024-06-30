/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },

    extend: {
      colors: {
        sectionColor: "hsl(209, 100%, 97%)",
        darkSectionColor: "hsl(211, 100%, 12%)",
        darkBodyColor: "hsl(216, 100%, 4%)",
        primaryColor: "hsl(209, 87%, 21%)",
        secondaryColor: "red",
        primaryColorLight: "hsl(209, 74%, 45%)",
        whiteColor: "#fff",
        textColor: "#DDD",
      },

      keyframes: {
        move: {
          "50%": {
            transform: "scale(1.1)",
          },
        },
      },

      animation: {
        scaleAnimation: "move 3s linear infinite",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Londrina: ["Londrina Outline", "sans-serif"],
    },
  },
  plugins: [],
};
