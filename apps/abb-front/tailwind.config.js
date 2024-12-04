const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const {nextui} = require("@nextui-org/theme");
const { join } = require('path');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#fff",
              background: "#301050",
            },
            background: '#0d0d0d'
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#301050",
              background: "#F2EAFA",
            },
            background: '#fff'
          },
        },
      },
    }),
  ],
};
