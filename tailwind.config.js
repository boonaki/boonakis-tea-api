/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", ".public/main.js"],
  theme: {
    extend: {
        colors: {
            'background' : '#302A38',
            'spanTan' : 'rgb(251 235 217)',
            'grey': '#bdc8d1',
            'someSlate': '#748b9f'
        },
        margin: {
            '1/5': '20%',
            '3/20': '15%'
        }
    },
  },
  plugins: [],
}
