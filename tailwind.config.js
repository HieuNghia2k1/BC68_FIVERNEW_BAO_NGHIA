/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      color: {
        color_4: "#633341",
        color_9: "#687200",
      },
    },
  },
  plugins: [],
};
