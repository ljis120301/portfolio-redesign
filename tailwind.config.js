/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './fancy/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        claude: {
          salmon: '#da7756',
          beige: '#eeece2',
          text: '#3d3929',
          button: '#bd5d3a',
          dark: '#1e1e1e',
        },
      },
    },
  },
  plugins: [],
} 