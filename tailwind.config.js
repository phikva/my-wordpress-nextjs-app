/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    colors: {
      'white': '#f2f2f2',
      'white-light': '#ffffff',
      'purple': '#7e5bef',
      'purple-dark': '#6C45ED',
      'gray': '#F2F4F7',
      'gray-light': '#F5F5F5',
      'black': '#2A2B27',
    },
    container: {
    },
    extend: {
      
    },
  },
  plugins: [require("tailwindcss-animate")],
}