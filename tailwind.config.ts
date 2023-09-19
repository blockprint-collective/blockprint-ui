import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#fff',
        light80: 'rgba(255, 255, 255, 0.80)',
        light70: 'rgba(255, 255, 255, 0.70)',
        light50: 'rgba(255, 255, 255, 0.50)',
        dark: '#131118',
        dark100: '#1C1924',
        dark200: '#353945',
        dark300: '#2F2B3C',
        purple: '#9B55FF',
        good: '#7AFB79',
        fair: '#F1AD39',
        error: '#FA5A6E'
      },
      lineHeight: {
        title: '56px',
        title2: '61.6px'
      },
      letterSpacing: {
        title: '-2.4px',
        subTitle: '-0.4px'
      },
      fontFamily: {
        openSauce: 'var(--open-sauce)',
        archivo: 'var(--archivo)',
      },
      fontSize: {
        xs: '11px',
        tiny: '14px',
        base1: '18px',
        base2: '20px',
        base3: '24px',
        base4: '32px',
        base5: '48px',
        base6: '56px'
      },
      maxWidth: {
        'lg1.5': '550px',
        modal: '620px',
        table: '795px'
      },
      keyframes: {
        'fade-in-opacity': {
          '0%': { 'opacity': '0' },
          '100%': { 'opacity': '1' },
        },
        'fade-in-color': {
          '0%': { color: 'black' },
          '100%': { color: 'auto' },
        }
      },
      animation: {
        'fade-in-opacity': 'fade-in-opacity 1s forwards',
        'fade-in-color': 'fade-in-color 1s forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'table': '0px 20px 25px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
}
export default config
