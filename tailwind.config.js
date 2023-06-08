/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  mode:'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        primary:"#5D37F6",
        secondary:"#CFC3FF",
        
      }
    },
  },
  plugins: [],
  // darkMode: ['class', '[data-mode="dark"]']
  darkMode:'class'
};

