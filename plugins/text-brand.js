const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  const text = {
    '.text-brand': {
      backgroundImage: `linear-gradient(to right, ${theme(
        'colors.primary.1'
      )}, ${theme('colors.primary.2')})`,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
  };

  addComponents(text);
});
