module.exports = {
  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '100': '45rem',  // 720px
        '101': '45.375rem',  // 726px
      },
      height: {
        '15.5': '3.75rem' // 60px
      },
      spacing: {
        '33': '0.813rem', // 13px
        '35': '1.813rem', // 30px
        '70': '4.625rem'  // 74px
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      'fade-out-down': {
          'from': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
          'to': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
      },
      'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      'fade-out-up': {
          'from': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
          'to': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
      }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-in-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out'
      }
    },
    container: {
      center: true,
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1124px',
        'xl': '1124px',
        '2xl': '1124px'
        // ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
