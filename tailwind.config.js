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
      'blue': '#C2EFFF',
      'purple': '#7B6D8D',
      'gray': '#F2F4F7',
      'gray-light': '#F5F5F5',
      'black': '#191C24',
      'black-light': '#111318',
    },
    container: {
    },
    extend: {
      maxWidth: {
        '8xl': '100rem',
       
      },
      fontFamily: {
        neueDisplayLight: ['neue-haas-grotesk-display', 'sans-serif', '400'],
        neueDisplayBold: ['neue-haas-grotesk-display', 'sans-serif', '700'],
        neueTextRoman: ['neue-haas-grotesk-text', 'sans-serif', '400'],
        neueTextBold: ['neue-haas-grotesk-text', 'sans-serif', '700'],
      },
      borderWidth: {
        '1': '0.25px',
        '2': '1px',
      },
      animation: {
        'marquee-1': 'marquee-1 60s linear infinite',
      },
    },
    
  },
  plugins: [require("tailwindcss-animate")],
}