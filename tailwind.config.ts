import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeout: {
          "0%": {
            opacity: "100",
          },
          "100%": {
            opacity: "0",
          },
        },
        fadein: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
      },
      animation: {
        "fade-out-1": "fadeout 1s",           
        "fade-in-2": "fadein 2s",        
        "fade-in-4": "fadein 5s",
      },
    },
  },
  plugins: [],
};
export default config;
