/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false, // keep existing CSS unchanged
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
