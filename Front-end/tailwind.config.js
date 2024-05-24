/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        agrofont: ["Jaro", "sans-serif"],
        trial: ["Outfit", "sans-serif"],
      },
screens:{


  'xs': '320px',         
        'sm': '480px',    
        'md': '768px',    
        'lg': '976px',     
        'xl': '1280px',           
        '2xl': '1536px', 
}



    },
  },
  plugins: [],
};