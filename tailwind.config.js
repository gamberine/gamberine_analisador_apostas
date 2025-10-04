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
        base: 'var(--bg)',
        surface: 'var(--card)',
        'surface-muted': 'var(--bgSecundario)',
        border: 'var(--border)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        branca: 'var(--branca)',
        accent: 'var(--accent)',
        highlight: 'var(--destaque)',
        success: 'var(--ok)',
        danger: 'var(--danger)',
        info: 'var(--drawn)',
        warm: 'var(--warm)',
        primary: 'var(--primaryColor)',
        'primary-hover': 'var(--primaryColorHover)'
      },
      fontFamily: {
        sans: ['var(--fontConteudo)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--fontTitulos)', 'var(--fontConteudo)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 18px 32px -24px var(--shadow)'
      },
      backgroundImage: {
        header: 'var(--gradientHeader)'
      }
    }
  },
  plugins: [],
};
