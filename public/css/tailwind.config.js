/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../views/index.ejs",'../../views/index.ejs','../../views/journal.ejs','../../views/edit.ejs','../../views/entries.ejs','../../views/login.ejs','../../views/signup.ejs', '../../views/info.ejs', '../../views/viewer.ejs'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    minHeight: {
      '5/6': '85%',
    }
  },
  plugins: [],
}
