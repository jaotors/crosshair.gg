module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
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
      DEFAULT: '0 10px 25px rgba(0, 0, 0, 0.15)',
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
        },
      },
    },
    gradients: (theme) => ({
      brand: [theme('colors.primary.1'), theme('colors.primary.2')],
    }),
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  plugins: [require('./plugins/gradients'), require('./plugins/text-brand')],
}
