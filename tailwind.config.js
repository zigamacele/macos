/** @type {import('tailwindcss').Config} */
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
      screen: ['100vh', '100dvh'],
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,no-undef
  plugins: [require('tailwindcss-animate')],
}
