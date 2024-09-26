import { Config } from 'tailwindcss';
import fluid, { extract, screens } from 'fluid-tailwind';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  extract,
  theme: {
    screens,
    extend: {
      spacing: {
        '9': '0.5625rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.25rem',
        '28': '1.75rem',
        '30': '1.875rem',
        '52': '3.25rem',
        '8': '0.5rem',
        '12': '0.75rem',
        '22': '1.375rem',
        '26': '1.625rem',
        '33': '2.0625rem',
        '39': '2.4375rem',
      },
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
      },
      fontSize: {
        '13': '0.8125rem',
        '14': '0.875rem',
        '15': '0.9375rem',
        '18': '1.125rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '32': '2rem',
      },
      colors: {
        primary: '#7367F0',
        secondary: '#1EB564',
        danger: '#EA5455',
        info: '#0F60FF',
        warning: '#FFC600',
        success: '#28C76F',
        light: '#F1F2F6',
        black: '#23272E',
        white: '#FFFFFF',
        gray: {
          100: '#F3F4F8',
          200: '#E9E7FD',
          300: '#DBDADE',
          400: '#8B909A',
        },
      },
      borderWidth: {
        '1': '0.0625rem',
      },
      borderColor: {
        gray: '#DBDADE',
        lightGray: '#E9E7FD',
      },
      borderRadius: {
        '6': '0.375rem',
        '16': '1rem',
      },
      boxShadow: {
        lg: '0px 0.25rem 1rem 0px #0000000A',
        md: '0px 0.125rem 0.25rem 0px #A5A3AE4D',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(0deg, #7367F0, #7367F0)',
        'gradient-overlay': 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))',
      },
      lineHeight: {
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.25rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '26': '1.625rem',
      },
      letterSpacing: {
        tight: '-0.02em',
      },
    },
  },
  plugins: [fluid],
} satisfies Config;
