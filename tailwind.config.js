/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: 'var(--color-primary)',
      },
      animation: {
        'ping': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'glow': 'glow 5s ease-in-out infinite alternate',
      },
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        glow: {
          '0%': { transform: 'translate(10%, 10%) scale(1)', opacity: 0.1 },
          '25%': { transform: 'translate(-10%, 10%) scale(1.2)', opacity: 0.3 },
          '50%': { transform: 'translate(-10%, -10%) scale(1.1)', opacity: 0.5 },
          '75%': { transform: 'translate(10%, -10%) scale(1.3)', opacity: 0.3 },
          '100%': { transform: 'translate(10%, 10%) scale(1)', opacity: 0.1 },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.2' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
