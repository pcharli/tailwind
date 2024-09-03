/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.js', './dist/*.html'],
  theme: {
    colors2: {
      "blue-500": "rgb(200,100,100)"
    },
    fontFamily: {
      mono: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      }
    },
    extend: {
      colors: {
        "pierre": "rgb(150,225,255)"
      },
      borderRadius : {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}

