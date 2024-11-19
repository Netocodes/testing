/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
