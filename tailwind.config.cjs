/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: '#2cbce9',
        'deep-blue': '#010026',
        red: '#dc4492',
        yellow: '#fdcc49',
        grey: '#ededed',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow': 
          'linear-gradient(81.66deg #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.08%)',

        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
        
      }),
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      content: {
        brush: 'url("./images/brush.png")',
        person1: 'url("./images/person-1.png")',
        person2: 'url("./images/person-2.png")',
        person3: 'url("./images/person-3.png")',
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px',
      }
    },
  },
  plugins: [],
}
