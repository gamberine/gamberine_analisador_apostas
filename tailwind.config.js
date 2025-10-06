/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './assets/**/*.{js,ts,html}',
    './src/**/*.{js,ts,html}'
  ],
  theme: {
    extend: {
      colors: {
        base: 'var(--bg-primary)',
        surface: 'var(--bg-surface)',
        'surface-muted': 'var(--bgSecundario)',
        border: 'var(--border-color)',
        text: 'var(--text-color)',
        muted: 'var(--muted)',
        branca: 'var(--white)',
        accent: 'var(--accent)',
        highlight: 'var(--highlight)',
        success: 'var(--accent)',
        danger: 'var(--danger)',
        info: 'var(--drawn)',
        warm: 'var(--warm)',
        primary: 'var(--primary-color)',
        'primary-hover': 'var(--primary-color-hover)'
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-secondary)', 'var(--font-primary)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 18px 32px -24px var(--shadow-color)'
      },
      backgroundImage: {
        header: 'var(--bg-gradient-primary)'
      }
    }
  },
  plugins: [],
};
