import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#325a9c",
        },
        secondary: "#4874B9",
        "background-primary": "var(--background-primary)",
        "background-secondary": "var(--background-secondary)",
        "foreground-primary": "var(--foreground-primary)",
        "foreground-secondary": "var(--foreground-secondary)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
