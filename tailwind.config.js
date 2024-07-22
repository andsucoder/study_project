/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        backgroundImage: {
          'bg-black': "url('/img/bg-black.jpg')",
        }  
      },
  plugins: [],
}
}

