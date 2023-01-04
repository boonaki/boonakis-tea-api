/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/main.js", ".src/*/.{html,js}"],
  theme: {
    extend: {
        colors: {
            'background' : '#302A38',
            'spanTan' : 'rgb(251 235 217)',
            'grey': '#bdc8d1',
            'someSlate': '#b19588'
        },
        margin: {
            '1/5': '20%',
            '3/20': '15%'
        },
        height : {
            '400' : '400px'
        }
    },
  },
  plugins: [],
}
