/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'Dark-cyan': 'hsl(185, 75%, 39%)',
      'Very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
      'Dark-grayish-blue': 'hsl(227, 10%, 46%)',
      'Dark-gray': 'hsl(0, 0%, 59%)',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    fontFamily: {
      'sans': ['Kumbh Sans','sans-serif']
    },
    backgroundImage: {
      'hero-pattern': "url('./images/image-victor.jpg')",
    }
  },
  plugins: [],
}
