/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Fondos: carbón / noche
        carbon: {
          950: '#100b09',
          900: '#17100d',
          800: '#1f1713',
          700: '#2b211b',
          600: '#3a2d24',
          500: '#4b3a2e',
        },
        // Brasa / fuego (acento principal)
        ember: {
          DEFAULT: '#c85a28',
          light: '#e0702f',
          dark: '#a4451c',
          glow: '#f0973f',
        },
        // Oro / brasa viva (detalles finos)
        oro: {
          DEFAULT: '#c8a24a',
          light: '#ddbd6a',
          dark: '#a4823a',
        },
        // Crema (texto / claros)
        crema: {
          DEFAULT: '#f1e5d0',
          light: '#f8f0e1',
          muted: '#cdb996',
          dark: '#b7a384',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Figtree', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.22em',
      },
      boxShadow: {
        ember: '0 18px 50px -16px rgba(200, 90, 40, 0.55)',
        plate: '0 30px 60px -24px rgba(0, 0, 0, 0.75)',
      },
      maxWidth: {
        prose: '62ch',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.16)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        emberpulse: {
          '0%,100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
      },
      animation: {
        kenburns: 'kenburns 18s ease-out forwards',
        floaty: 'floaty 2.4s ease-in-out infinite',
        emberpulse: 'emberpulse 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
