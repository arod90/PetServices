import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    height: {
      '10v': '10vh',
      '15v': '15vh',
      '20v': '20vh',
      '30v': '30vh',
      '40v': '40vh',
      '50v': '50vh',
      '60v': '60vh',
      '70v': '70vh',
      '80v': '80vh',
      '90v': '90vh',
      '100v': '100vh',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#FDFEF6',
        textBlack: '#1B2126',
        cream: '#D9D2BD',
        orange: '#F2D8B2',
        purple: '#B49EFB',
        yellow: '#FBCB4C',
        green: '#CFE3BE',
        blue: '#C7D3D9',
        white: '#FFFFFF',
        liveOrange: '#DC8D41',
        monkblack: '#2d2d2d',
        monkwhite: '#eae8e4',
        beige: '#f5ebe0',
        lightBrown: '#F8E6D8',
        brown: '#EAD4C6',
        darkBrown: '#5F3117',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;
