module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      state: 3,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};
