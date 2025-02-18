/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-block-start-custom": {
          "border-block-start": "0 rgba(5, 5, 5, 0.06)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
  safelist: [
    {
      pattern: /^(bg|text|border|h|w|m|p|rounded|shadow|grid-cols|grid-rows|place|gap|flex|justify|items|space|divide|from|via|to|ring|ring-offset|ring-opacity)-/,
    },
  ],
};
