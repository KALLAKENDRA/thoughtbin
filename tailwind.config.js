/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mobileMd': '375px',
        'mobileLg': '425px',
        'tablet': '768px',
        'laptopSm': '800px',
        'laptopMd': '1024px',
        'laptopLg': '1280px',
        'desktopSm': '1366px',
        'desktopMd': '1440px',
        'desktopLg': '1920px',
      },
      colors:{
        'green':'#20C073',
        'silversand':'#C1C1C1',
        'oslogrey':'#908D8D',
        'caribbeangreen':'#00D3A1',
        'easternblue':'#13A6A7',
        'topaz':'#0CC1C3',
        'aquagreen':'#00DEAA',
      },
      margin: {
        '420': '26.25rem',
        '430': '26.875rem',
        '496': '31rem',
        '543': '33.938rem',
        '630': '37.375rem', 
        '678': '42.375rem',
        '690': '43.125rem',       
        '784': '49rem',       
        '880': '55rem',       
        '960': '60rem',       
                
        
      },
      boxShadow: {
        '3xl': '11px 5px 11px -10px rgba(0, 0, 0, 0.61)',
      },
      width:{
        120:"7.5rem",
        122:"7.6rem",
        134:"8.375rem",
        250:"15.7rem",
        299:"17rem",
        345:"21.563rem",
        470:"29.3rem",
        604:"37.75rem",
        621:"38.813rem",
        800:"65rem",
        1440:"90rem",
      },
      height:{
        120:"7.5rem",
        122:"7.6rem",
        134:"8.375rem",
        410:"25.66rem",
        465:"29.063rem",
        512:"32rem",
        600:"57rem",
        626:"39.125rem",
        896:"56rem",
       
      },
     
    },
  },
  plugins: [require("daisyui")],
}