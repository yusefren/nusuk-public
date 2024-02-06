/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
        'active-green': '#1E9B79',
        'active': '#FCCA2D'
      },
      keyframes: {
        activePulse: {
          '50%': { opacity: '0.1' }
        },
      },
     
      animation: {
        'active-pulse': 'activePulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
}
}
