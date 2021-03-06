module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      primary: ['Chakra Petch', 'sans-serif'],
      secondary: ['Nunito Sans', 'sans-serif'],
    },
    boxShadow: {
      base: '0 10px 25px rgba(0, 0, 0, 0.15)',
    },
    extend: {
      colors: {
        primary: {
          1: '#fb5353',
          2: '#ff4a8b',
        },
        base: {
          100: '#25262e',
          200: '#373846',
          300: '#414252',
          400: '#9b9ba2',
        },
      },
    },
    gradients: (theme) => ({
      brand: [theme('colors.primary.1'), theme('colors.primary.2')],
    }),
  },
  variants: {
    gradients: ['responsive', 'hover'],
    margin: ['last'],
  },
  plugins: [require('./plugins/gradients'), require('./plugins/text-brand')],
}
