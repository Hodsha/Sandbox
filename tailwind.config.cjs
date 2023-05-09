/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        '#e8f380' : '#e8f380',
        '#44403c' : '#44403c',
        '#18181b' : '#18181b'
       
      },
      width:{
        '800px': '800px',
        '100%' : '100%',
        '60%' : '60%',
        '95%' : '95%',


      },
      height:{
        '400px' : '400px',
        '100%' : '100%',
        '30%' : '30%',
        '40rem' : '40rem'
       
      },
      minHeight:{
        '400px' : '400px',
      },
      margin:{
        '45%': '45%',
        '150px': '150px',
      },
      screens:{
        'mobile': {max: '640px'},
        'Tablet': '768px',
        'Laptop': '1024px',
        'Desktop': '1280px',
        '2xl': '1536px'
      }
    },
  },
  plugins: [],
}
