import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in-opacity': {
          '0%': { 'opacity': '0' },
          '100%': { 'opacity': '.4' },
        },
        'fade-in-opacity-dark': {
          '0%': { 'opacity': '0' },
          '100%': { 'opacity': '.65' },
        },
        'fade-in-color': {
          '0%': { color: 'black' },
          '100%': { color: 'auto' },
        }
      },
      animation: {
        'fade-in-opacity': 'fade-in-opacity 1s forwards',
        'fade-in-opacity-dark': 'fade-in-opacity-dark 1s forwards',
        'fade-in-color': 'fade-in-color 1s forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
}
export default config
