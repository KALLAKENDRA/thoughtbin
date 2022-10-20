/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green':'#20C073',
        'silversand':'#C1C1C1',
        'oslogrey':'#908D8D',
      }
    },
  },
  plugins: [require("daisyui")],
}