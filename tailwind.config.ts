/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        gary: colors.gray,
        orange: colors.orange,
        cyan: colors.cyan,
        slate: colors.slate,
        pink: colors.pink,
        green: colors.teal,
        purple: colors.indigo,
        blue: colors.blue,

        // light mode background & text
        lightBg: colors.stone[50],
        darkText: colors.slate[950],

        // dark mode background & text
        darkBg: colors.zinc[500],
        lightText: colors.stone[50],
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '34px',
      '4xl': '48px',
      '5xl': '60px',
    },
  },
  plugins: [require('tailwindcss-animate')],
  safelist: ['bg-gradient-to-r'],
};
