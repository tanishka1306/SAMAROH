/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundimg:{
        logoimg: " url('./Images/Logo.png')",
      },

      colors: {
        green: {
          
          400 : '#AEC2B6',
        },
        pink: {
          100 : '#EAE0DA',
        },
    },
    },
  },


  plugins: [],
};
