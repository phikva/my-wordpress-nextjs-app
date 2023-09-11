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
      'white': '#fff',
      'purple': '#7e5bef',
      'orange': '#f36458',
      'gray-dark': '#101112',
      'gray': '#8492a6',
      'gray-light': '#F5F5F5',
      'black': '#000',
    },
    container: {
    },
    extend: {
      
    },
  },
  plugins: [require("tailwindcss-animate")],
}