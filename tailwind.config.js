module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-dark': '#201e3c',  
        'white-dark': '#293e59',
        'yellow': '#fbd912',
        'conecta-color': '#244351'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
