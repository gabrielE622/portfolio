/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],  // Ensure it includes .jsx if using React
  theme: {
    extend: {
      colors: {
        primary: '#5a94f2',  // Blue
        secondary: '#1c3d73', // Dark blue
        accent: '#000000',    // Black
        light: '#ffffff',     // White
      },
    },
  },
  plugins: [],
}
