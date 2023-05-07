/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
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

