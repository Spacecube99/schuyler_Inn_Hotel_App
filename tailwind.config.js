/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors: {
          link: '#0000FF',
        },
        fontSize: {
          'h1': ['2.6rem', { lineHeight: '1.2' }],
          'h2': '2rem',
        }
      }
    },
  plugins: [],
};
