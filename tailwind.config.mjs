/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2D3A4B',
        'secondary': '#F0F2F5',
        'accent': '#007AFF',
        'background-light': '#FFFFFF',
        'background-dark': '#1A1A1A',
        'text-primary': '#2D3A4B',
        'text-secondary': '#5A6B7C',
        'text-muted': '#9AA7B3',
        'border-color': '#000000',
        'gradient-blue-start': '#007AFF',
        'gradient-blue-end': '#0056B3',
        'gradient-gray-start': '#F0F2F5',
        'gradient-gray-end': '#E0E4E8',
      },
      fontFamily: {
        'headings': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}