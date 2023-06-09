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
        zoomBox: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'translateY(-10px) translateX(-10px)' },
          '25%': { transform: 'scale(1.2) translateX(20px)' },
          '50%': { transform: 'scale(1.1)  translateY(20px)' },
          '75%': { transform: 'scale(1) translateY(-20px) translateX(-30px)' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2) opacity: 0' }
        },
        pulse: {
          '0%, 100%,': { opacity: 1 },
          '50%,': { opacity: .5 }
        }

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
      flutuandoH: 'flutuandoD 13s ease-in-out infinite',
      zoomBox: 'zoomBox 6s ease-in-out infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
    }
  },
  plugins: [],
}