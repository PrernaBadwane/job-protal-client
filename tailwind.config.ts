import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          10: "#3D52A0",
        },
        secondary:{
          10: "#7091E6",
        },
        accent:{
          10: "#8697C4",
          20:"#ADBBDA",
          30:"#EDE8F5"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
