/** @type {import('tailwindcss').Config} */
import colors from './src/constants/colors'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: colors,
      screen: ['100vh', '100dvh'],
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,no-undef
  plugins: [require('tailwindcss-animate')],
}
