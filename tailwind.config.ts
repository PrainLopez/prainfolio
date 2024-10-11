import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
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
export default config;
