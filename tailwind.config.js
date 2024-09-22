/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-dark': '#2980b9',
        secondary: 'var(--secondary-color)',
        'secondary-dark': '#c0392b',
        accent: 'var(--accent-color)',
      },
    },
  },
  plugins: [],
}