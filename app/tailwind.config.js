/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: [],
  theme: {
    extend: {
      fontSize: {
        'base': '.175rem', 
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      colors: {
        'gold': '#AC9173',
        'gold-light': 'rgb(235, 227, 216)',
        'active-green': '#1E9B79'
      },
    },
  },
  plugins: [],
}

