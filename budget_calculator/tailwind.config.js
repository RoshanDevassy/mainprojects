/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      css: {
        '.no-arrows': {
          '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
        },
      },
    },
    screens:{
      'xsm':'250px',
      'sm': '320px',
      'xmd':'450px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl':'2400px',
    },
    plugins: [],
  }
}
