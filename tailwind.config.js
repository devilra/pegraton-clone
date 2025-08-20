/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%": {
            textShadow:
              "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff, 0 0 80px #0ff",
            color: "#0ff",
          },
          "50%": {
            textShadow:
              "0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f, 0 0 80px #f0f, 0 0 160px #f0f",
            color: "#f0f",
          },
          "100%": {
            textShadow:
              "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff, 0 0 80px #0ff",
            color: "#0ff",
          },
        },
      },
      animation: {
        glow: "glow 2.5s ease-in-out infinite alternate",
      },
    },
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
