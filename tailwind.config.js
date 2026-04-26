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
          'color1': 'white',
          'color2': 'yellow',
          'color3': 'black',
          'color4': 'blue',
        },
        fontSize: {
          'h1': '3rem',
          'h2': '2rem',
          'h3': '1.75rem',
        },
      },
    },
    plugins: [
      function ({ addUtilities, theme }) {
        const colors = {
          white: theme('colors.color1'),
          yellow: theme('colors.color2'),
          black: theme('colors.color3'),
          blue: theme('colors.color4')
        }

        const sizes = {
          title: theme('fontSize.h1'),
          titleSmall: theme('fontSize.h2'),
          inputText: theme('fontSize.h3'),
        }

        const utilities = 
          Object.entries(sizes).reduce((acc, [sizeKey, sizeValue]) => {
          Object.entries(colors).forEach(([colorKey, colorValue]) => {
          acc[`.text-${sizeKey}-${colorKey}`] = {
            fontSize: sizeValue,
            color: colorValue
          }
        })
          return acc
        }, {})
      addUtilities(utilities)
    }
  ]
}
