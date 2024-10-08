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
        code: ["Space Mono", "IBM Plex Mono", "Courier Prime"],
      },
      width: {
        framed: "calc(100vw - 100px)",
      },
      keyframes: {
        blink: {
          "25%, 75%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        textBlink: "1s step-end 1s infinite normal none running blink",
      },
    },
  },
  plugins: [],
};
