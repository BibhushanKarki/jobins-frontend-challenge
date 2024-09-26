import { Config } from 'tailwindcss';
import fluid, { extract } from 'fluid-tailwind';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  extract,
  theme: {
    extend: {},
  },
  plugins: [fluid],
} satisfies Config;
