/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
         'green-customized':'#EAFFE6'
      }
    },
    screens: {
      xxsm: '375px',
      xsm:'993px',
      sm: '693px',
      md: '1186px',
      lg: '1200px',
      xl: '1440px',
    },
    fontFamily: {
        'poppins':['Poppins','sans-serif']
    },
  },
  plugins: [],
}

