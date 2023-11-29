/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },
      colors: {
        // Primary
        SoftRed: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        DarkDesaturatedCyan: "hsl(167, 40%, 24%)", //  (graphic design text)
        DarkBlue: "hsl(198, 62%, 26%)", //  (photography text)
        DarkModerateCyan: "hsl(168, 34%, 41%)", //  (footer)
        // Neutral
        VeryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
        VeryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        DarkGrayishBlue: "hsl(232, 10%, 55%)",
        GrayishBlue: "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
