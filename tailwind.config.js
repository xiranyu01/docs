/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],

  // https://tailwindcss.com/docs/preflight
  // Tailwind will first normalize all the elements
  // so the default themes will be override
  // Until we have time to fork and create our own theme
  // We will skip the preflight
  corePlugins: { preflight: false },
};
