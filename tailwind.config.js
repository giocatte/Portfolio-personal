/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      Ubuntu: 'Ubuntu, sans-serif',
      soria: 'soria',
      nippo: 'nippo'
    },
    extend: {
      width: {
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '100vw': '100vw',
      },
      colors: {
        primary: '#F8F9FA', /*white, background*/
        secondary: '#212529', /*black, bold words*/
        accent_1: '#32b941', /*green (original: #2DC653)*/
        accent_2: '#5ac3dc' /*light-blue*/
      }
    },
  },
  plugins: [],
}

