import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        JostB700 : ['Jost-B'],
        JostR400 : ['Jost-R'],
        JostM500 : ['Jost-M'],
      }, 
      screens : {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },
      zIndex :{
        '100' : '100',
      }
    },
  },
  plugins: [],
};
export default config;
