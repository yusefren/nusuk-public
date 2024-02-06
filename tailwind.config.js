/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./**/*.html', './**/*.{js,jsx,ts,tsx,vue}'],
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
        'gold-light': '#ebe3d8',
        'active-green': '#1E9B79'
      },
    },
  },
  plugins: [],
}

