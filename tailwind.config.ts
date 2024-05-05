import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-light": "#46A7E0",
        blue: "#4CBCFF",
        "grey-light": "#888888",
        grey: "#333333",
      },
      screens: {
        xl: "1366px",
      },
    },
  },
  plugins: [],
};
export default config;
