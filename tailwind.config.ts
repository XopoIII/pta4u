import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px'
        }
      },
      colors: {
        dark: '#252627',
        'qb-green': '#E7F6E4',
        'qb-blue': '#E4F7FF',
        'qb-purple': '#EFE8FF',
        'qb-red': '#FADCEC',
        'qb-orange': '#FDE6E5'
      }
    }
  },
  plugins: []
};
export default config;
