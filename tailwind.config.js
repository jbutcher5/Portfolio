module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#1d2021',
        black: '#3b4252',
        white: '#d8dee9',
        pisswhite: '#D7D8C8',
        lime: '#A5A45F',
        darkgreen: '#485642'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
