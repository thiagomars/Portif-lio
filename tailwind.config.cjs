/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        keyframes: {
          flutuandoA: {
            '0%, 100%': { transform: 'translateY(0) translateX(0)' },
            '50%': { transform: 'translateY(10px) translateX(3px)' },
          },
          flutuandoB: {
            '0%, 100%': { transform: 'translateY(10px) translateX(10px)' },
            '50%': { transform: 'translateY(0) translateX(0)' },
          },
          flutuandoC: {
            '0%, 100%': { transform: 'translateY(5px) translateX(0)' },
            '50%': { transform: 'translateY(0) translateX(0)' },
          },
          flutuandoD: {
            '0%, 100%': { transform: 'translateY(5px) translateX(5px)' },
            '33%': { transform: 'translateY(10px) translateX(-10px)' },
            '66%': { transform: 'translateY(14) translateX(0)' },
          },
        }
      },
      animation: {
        flutuandoA: 'flutuandoA 5s ease-in-out infinite',
        flutuandoB: 'flutuandoB 8s ease-in-out infinite',
        flutuandoC: 'flutuandoC 5s ease-in-out infinite',
        flutuandoD: 'flutuandoD 12s ease-in-out infinite',
        flutuandoE: 'flutuandoA 4s ease-in-out infinite',
        flutuandoF: 'flutuandoB 7s ease-in-out infinite',
        flutuandoG: 'flutuandoC 6s ease-in-out infinite',
        flutuandoH: 'flutuandoD 13s ease-in-out infinite'
      }
  },
  plugins: [],
}