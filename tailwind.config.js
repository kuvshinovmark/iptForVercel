module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    mode: 'all',
    content: ['./**/**/*.html', './**/**/*.svelte'],

    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#d6dcff',
          DEFAULT: '#2b50ed',
          hover: '#576ced',
          focus: '#3c52db',
          back: '#eff1fd'
        },
        red: {
          DEFAULT: '#e54a39',
          hover: '#fb7662',
        }
      },
      borderRadius: {
        '10px': '10px',
        '30px': '30px',
      },
      minHeight:{
        '10': '2.5rem',
      },
      width: {
        '120': '30rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
