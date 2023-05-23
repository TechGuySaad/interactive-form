/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        custom: ['Custom Font', 'sans-serif'],
      },
      colors: {
        custom: {
          50: 'hsl(270, 3%, 87%)',
          100: 'hsl(279, 6%, 55%)',
          200: 'hsl(278, 68%, 11%)',
         
          
        },

      },

      width: {
        custom: '450px'
      }
    },
  },
  plugins: [],
}

