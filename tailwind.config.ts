import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        "dark-card": "#1d1d1f",
        "light-text": "#f5f5f7",
        "dark-text": "#1d1d1f",
        "light-card": "#f5f5f7",
        accent: "#2997ff",
        "accent-hover": "#0071e3",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
