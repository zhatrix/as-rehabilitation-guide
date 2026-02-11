import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E3F2FD',
          500: '#0277BD',
          700: '#01579B',
          900: '#01395E',
        },
        neutral: {
          0: '#FFFFFF',
          100: '#F5F5F5',
          300: '#CCCCCC',
          400: '#999999',
          500: '#666666',
          700: '#333333',
          800: '#1A1A1A',
          900: '#000000',
        },
        success: { 600: '#2E7D32' },
        warning: { 600: '#ED6C02' },
        error: { 600: '#D32F2F' },
      },
      fontFamily: {
        primary: ['Roboto Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        code: ['Fira Code', 'Roboto Mono', 'monospace'],
      },
      fontSize: {
        display: ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        h2: ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        body: ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        small: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        md: '4px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
        md: '0 2px 6px rgba(0, 0, 0, 0.16)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
