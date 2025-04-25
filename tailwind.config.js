// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          karla: ['var(--font-karla)'],
          'work-sans': ['var(--font-work-sans)'],
        },
      },
    },
  }