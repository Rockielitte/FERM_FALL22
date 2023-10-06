/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ultra: ["Ultra"],
        luck: ["Luckiest Guy"],
        ime: ["IM Fell English"],
        roboto: ["Roboto"],
        bakervilla: ["Libre Baskerville"],
        monster: ["Montserrat"],
      },
    },
  },
  plugins: [require("daisyui")],
};
