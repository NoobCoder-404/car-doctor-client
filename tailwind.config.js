/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],

  theme: {
    extend: {}
  },

  plugins: [require('daisyui'), require('flowbite/plugin')]
};
