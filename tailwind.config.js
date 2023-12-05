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
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "grey": "var(--text-color)",
        "greydark": "var(--text-color-dark)",
        "greyBorder": "var(--border-color)",
        "redColor": "var(--text-color-red)",
      },
      height: {
        'calc-vh-sign': 'calc(100vh - 15vh)',
      },
    },
  },
  plugins: [],
}
