/** @type {import('tailwindcss').Config} */
import { colors } from './src/Colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,

        main: colors.main,
        buttonPrimary: colors.button,
        buttonSecondary: colors.button,
        heading: colors.heading,
        subheading: colors.subheading,
        paragraph: colors.paragraph,
      },
    },
  },
  plugins: [],
}

