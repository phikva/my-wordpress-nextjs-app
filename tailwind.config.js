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
      'purple-light': '#8A6AF0',
      'gray': '#F2F4F7',
      'gray-light': '#F5F5F5',
      'black': '#2A2B27',
      'black-light': '#3F403A',
    },
    container: {
    },
    extend: {
     borderWidth: {
       '1': '0.25px',
       '2': '1px',
     },

    },
  },
  plugins: [require("tailwindcss-animate")],
}