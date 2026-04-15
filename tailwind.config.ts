import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MAXHUB brand colors
        primary: {
          DEFAULT: '#196fd2',
          dark: '#1559a8',
          hover: '#1560b8',
        },
        secondary: '#333333',
        background: '#FFFFFF',
        surface: {
          DEFAULT: '#F5F5F5',
          alt: '#EBEBEB',
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
          muted: '#999999',
          disabled: '#B8BABC',
          inverse: '#FFFFFF',
        },
        border: {
          DEFAULT: '#e5e5e5',
          light: '#E7E7E7',
        },
        footer: '#1a1a1a',
        success: '#10B981',
        error: '#EF4444',
        // MAXHUB-specific tokens
        maxhub: {
          blue: '#196fd2',
          dark: '#333333',
          gray: '#666666',
          muted: '#999999',
        },
      },
      fontFamily: {
        sans: ['var(--font-nexa-regular)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-nexa-bold)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'nexa-regular': ['var(--font-nexa-regular)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'nexa-bold': ['var(--font-nexa-bold)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'nexa-black': ['var(--font-nexa-black)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '30px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['32px', '48px'],
        '5xl': ['42px', '63px'],
        '6xl': ['48px', '1'],
      },
      spacing: {
        '15': '60px',
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        DEFAULT: '5px',
        md: '8px',
        lg: '12px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        container: '1280px',
        'maxhub': '1230px',
        'maxhub-header': '1440px',
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
