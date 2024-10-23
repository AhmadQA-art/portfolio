/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '1.8rem', // Increase from default 1rem (16px) to 1.125rem (18px)
      },
      fontFamily: {
        'worksans': ['Work Sans', 'Work Sans-fallback', 'Helvetica', 'Apple Color Emoji', 'Segoe UI Emoji', 'NotoColorEmoji', 'Noto Color Emoji', 'Segoe UI Symbol', 'Android Emoji', 'EmojiSymbols', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}