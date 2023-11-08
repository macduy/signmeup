/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'agbalumo': ['Agbalumo', 'sanf-serif'],
        'inter': ['Inter', 'sanf-serif']
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["light"]
  }
}

