/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: 'Ubuntu, sans-serif',
        soria: 'soria',
        nippo: 'nippo'
      },
      fontSize: {
        h1: '10rem',
        h2: '8rem',
        h3: '7.5rem',
        h4: '7rem',
        h5: '6.25rem',
        h6: '6rem',
      },
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
        palette: {
          "primary": '#F8F9FA', /*white, background*/
          "secondary": '#212529', /*black, bold words*/
          "accent_1": '#32b941', /*green (original: #2DC653)*/
          "accent_2": '#5ac3dc', /*light-blue*/
          100: "#F9FAFB",
          200: "#F3F4F6",
          300: "#E5E7EB",
          400: "#D1D5DB",
          500: "#9CA3AF",
          600: "#6B7280",
          700: "#4B5563",
          800: "#374151",
          900: "#1F2937",
          1000: "#111827"
        }
      },
    },
  },
  plugins: [],
}

