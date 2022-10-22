module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
      extend: {
          colors: {
              primary: '#1B73E8',
          },
      },
  },
  plugins: [
    require('flowbite/plugin'),
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
};