module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 50px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
