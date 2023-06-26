/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",  
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'green': '#229b50',
        'gold': '#c8b568',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

