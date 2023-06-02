/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#fff",
        "primary-300": "#adb9d2",
        "primary-500": "#1b2231",
        "secondary-400": "#edf4f7",
        "secondary-500": "#c9dde8",
      },
      fontFamily: {
        // monospace: ["DM Sans", "monospace"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      content: {
        evolvetext: "url('./assets/EVOLVE.png')",
        cassettetape: "url('./assets/CassetteTape.png')",
        sparkles: "url('./assets/Sparkles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
