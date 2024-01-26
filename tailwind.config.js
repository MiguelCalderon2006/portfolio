/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    
    extend: {
      screens:{
        xxs: '340px',
        xs: '500px',
  
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        darkblue: '#2b4162',
        darkblack: '#12100e',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(315deg, #2b4162 0%, #12100e 74%)',
      },
      animation: {
        'float-slow': 'float 3s ease-in-out infinite', // Adjust the duration (3s) as needed
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
}
