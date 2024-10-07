/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      width: {
        framed: "calc(100vw - 100px)",
      },
    },
  },
  plugins: [],
};
