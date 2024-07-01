/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './i18n.config.ts',
  ],
  theme: {
    extend: {
      screens: {
        '4k': '2000px',
      },
      fontFamily: {
        Ubuntu: 'Ubuntu, sans-serif',
        soria: 'soria',
        nippo: 'nippo'
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
          "accent_2": '#60AFFF', /*blue*/
          "BG_blue": "#49e2e4e2",
          "BG_avory": "#FFFFF8",
          "BG_green": "#C1FFA4",
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
  plugins: [
    require('tailwind-scrollbar'),
  ]
}