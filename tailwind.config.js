/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: "480px",
      md: "768px",
      lg: "102px"
    },
    extend: {
      colors: {
        primaryColor: '#010a5e',
        primaryColorLight: "#010d78",
        secondaryColor: "#AA1D1D",
        paragraphColor: "#c0c0c0",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: "#000",
        blackColorLight: "#171717",
        nedded: "#D9D9D9",
        registerColor: 'A0A0A0',
      }
    },
    container:{
      center: true,
      padding: {
        default: '1rem',
        sm: '1.5rem'
      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}