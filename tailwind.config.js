/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary-teal': '#cce6e6',
      'secondary-teal': '#3f3cbb',
      'black': '#000000',
      'white': '#ffffff',
      'yellow': '#f4dc0c',
      'peach': '#f88c8c',
      'purple': '#c888fb',
      'sky-blue': '#8cd1f8',
      'grey': '#8c93a3',
      'thick-grey': '#525c76',
      'dark-teal': '#002b2b',
      'dark-teal-button': '#55aaaa',
      'icon-bg': '#d3e5fe',
      'content-bg': '#f5f6f7',
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1000px"
    },
    extend: {},
  },
  plugins: [],
}