/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^text-/,
    },
    {
      pattern: /^border-/,
    },
    {
      pattern: /^h-/,
    },
    {
      pattern: /^w-/,
    },
    {
      pattern: /^m-/,
    },
    {
      pattern: /^p-/,
    },
    {
      pattern: /^rounded-/,
    },
    {
      pattern: /^shadow-/,
    },
    {
      pattern: /^grid-cols-/,
    },
    {
      pattern: /^grid-rows-/,
    },
    {
      pattern: /^place-/,
    },
    {
      pattern: /^gap-/,
    },
    {
      pattern: /^flex-/,
    },
    {
      pattern: /^justify-/,
    },
    {
      pattern: /^items-/,
    },
    {
      pattern: /^space-/,
    },
    {
      pattern: /^divide-/,
    },
    {
      pattern: /^from-/,
    },
    {
      pattern: /^via-/,
    },
    {
      pattern: /^to-/,
    },
    {
      pattern: /^border-/,
    },
    {
      pattern: /^ring-/,
    },
    {
      pattern: /^ring-offset-/,
    },
    {
      pattern: /^ring-opacity-/,
    }
  ],
};
