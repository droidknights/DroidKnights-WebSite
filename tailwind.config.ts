import type { Config } from "tailwindcss";
import zIndex from "./src/_styles/zIndex";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-light": "#46A7E0",
        blue: "#4CBCFF",
        "grey-light": "#888888",
        grey: "#333333",
      },
      zIndex,
    },
  },
  plugins: [],
};
export default config;
