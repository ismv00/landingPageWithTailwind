/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Open Sans",
        secondary: "Lato",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          lg: "0",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
      },
      colors: {
        primary: "#57583d", //"#212353",
        secondary: "#4B5D68",
        accent: {
          primary: "#D8B08C", //#9c69e2",
          primary_hover: "#59321B", //"#9059DB",
          secondary: "#8C593B", //"#f063b8",
          secondary_hover: "#e350a9",
          tertiary: "#68c9ba",
        },
      },
    },
  },
  plugins: [],
};
