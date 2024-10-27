/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm-b': { max: '430px' },
        'lg-b': { max: '920px' },
      },
      colors: {
        dark: {
          primary: '#151521',
          secondary: '#131313',
          tertiary: '#1e1e2d',
          textWhite: '#fff',
          textGray: '#474761',
          borderDark: '#3b3b64',
        },
        main: '#3bae5b',
        mainGray: '#5f616a',
        primary:  '#021268',
        borders:'#2f0093db',
        mainColor: '#a6aaae',
        mainColorLight: '#f8f5ff',
        green: '#93aeaa',
        lightGreen: '#a7aaad',
        mainBlack: '#303030',
        lightBlack: '#565656',
        mainOrange: '#db8028',
        mainRed: '#B31717',
        lightGray: '#e9eeed',
        flatWhite: '#F8F9FB',
      },
      gridTemplateColumns: {
        view: 'max-content 1fr',
      },
      gridTemplateRows: {
        view: 'max-content 1fr max-content',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-rtl'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};
