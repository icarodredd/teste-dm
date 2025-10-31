module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}', // Add this line
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [import('tailwindcss-primeui')],
}
