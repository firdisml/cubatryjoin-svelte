/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './components/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      pacifico: ['Pacifico','sans-serif']
    }
  },
  plugins: []
};