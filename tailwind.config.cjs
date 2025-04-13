/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2c4a6d',
        secondary: '#3e6189',
        accent: '#4ca5d0',
        'accent-2': '#2980b9',
        light: '#f5faff',
        dark: '#283747',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease forwards',
        'pulse': 'pulse 2s infinite',
        'highlight': 'highlightText 3s linear infinite',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--accent-color), var(--accent-color-2))',
      },
    },
  },
  plugins: [],
};