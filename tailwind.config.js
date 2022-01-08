const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./renderer/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
