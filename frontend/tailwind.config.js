module.exports = {
  prefix: 'ct-',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        brand: {
          green: {
            dark: '#00B87C',
            light: '#E1FDF4'
          },
          black: '#1D1C1D',
          backdrop:'rgba(64, 79, 74, 0.5)',
          gray: {
            light: {
              1: '#616161',
              2: '#EFEFEF',
              3: '#B0AFB0'
            }
          }
        },
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
