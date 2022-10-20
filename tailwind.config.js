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
        'caribbeangreen':'#00D3A1',
        'easternblue':'#13A6A7',
      },
      margin: {
        '400': '520px',
        '1575': '98.4px',
      },
      boxShadow: {
        '3xl': '11px 5px 11px -10px rgba(0, 0, 0, 0.61)',
      },
      width:{
        120:"7.5rem",
        122:"7.6rem",
        345:"21.563rem",
        470:"29.3rem",
        800:"65rem",
        1440:"90rem",
      },
      height:{
        120:"7.5rem",
        122:"7.6rem",
        410:"25.66rem",
        465:"29.063rem",
        600:"57rem",
        896:"56rem",
       
      },
     
    },
  },
  plugins: [require("daisyui")],
}