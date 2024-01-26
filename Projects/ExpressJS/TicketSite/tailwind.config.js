/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs"],
  theme: {
    extend: {
      dropShadow: {
        'Login': [
          '-10px 10px 30px rgba(0, 0, 0, 0.35)',
          '10px 10px 30px rgba(0, 0, 0, 0.35)'
        ],
        'LoginH': [
          '-10px 10px 30px rgba(0, 0, 0, 0.40)',
          '10px 10px 30px rgba(0, 0, 0, 0.40)'
        ]
      },
      boxShadow: {
        'inputInner': 'inset 2px 4px 9px 2px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}

