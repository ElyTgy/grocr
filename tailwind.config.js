module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        primary:"#528E3D",
        secondary:"#C4C4C4",
        green:{
          100:"#EEF4EC",
          200:"#DCE8D8",
          300:"#A9C79E",
          400:'#528E3D'
        },
        black:"#000000",
        grey:{
          100:"#C4C4C4",
          200:'#6E706E',
          300:'#3F423F',
          400:'#202320'
        }
      }
    },
  },
  plugins: [],
}
