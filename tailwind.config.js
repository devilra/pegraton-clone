/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke-width": "1px",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke-color": "#ffffff",
        },
        ".text-fill-white": {
          "-webkit-text-fill-color": "#ffffff",
        },
        ".text-fill-transparent": {
          "-webkit-text-fill-color": "transparent",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
