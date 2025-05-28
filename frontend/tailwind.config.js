// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        // Primary colors
        primary: '#009ddd',
        'primary-light': '#ebf9ff',
        'light-blue': '#f5fcff',
        
        // Secondary colors
        secondary: '#25d366',
        'light-secondary': '#f2f7e9',
        
        // Third color
        third: '#f76d00',
        'light-orange': '#fff7f0',
        
        // Background colors
        background: '#e6f5fc',
        'home-layout': '#013759',
        
        // Gray scale
        dark: '#271100',
        gray: {
          1: '#e0e0e0',
          2: '#4f4f4f',
          3: '#828282',
          light: '#f1e9e4',
          border: '#d4cfcc',
          DEFAULT: '#edf8fd',
        },
        
        // Other colors
        pink: '#fef5ed',
        border: '#e5d7cc',
        'bg-btn': '#f8f6f4',
        line: '#68584c',
        light: '#fff',
        bg: '#f4f4f4',
      },
      spacing: {
        md: '2.2rem',
        lg: '2rem',
      },
      borderRadius: {
        DEFAULT: '7px',
      },
      boxShadow: {
        DEFAULT: '2px 2px 2rem 2px rgba(128, 128, 128, 0.103)',
      },
      height: {
        header: '82px',
        primary: '50px',
      },
      width: {
        primary: '180px',
      },
    },
  },
  plugins: [],
}