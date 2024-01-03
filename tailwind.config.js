import flowbitePlugin from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  // enable dark mode via class strategy
  darkMode: "class",

  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
};
