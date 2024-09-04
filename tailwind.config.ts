import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        noire: "#171717",
        violet: "#4438ca",
        gris: "#525252",
        blanc: "#ffff",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
