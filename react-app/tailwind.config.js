// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 3.5s steps(30, end) forwards',
        blink: 'blink 1s infinite step-end',
      },
    },
  },
  plugins: [],
};
