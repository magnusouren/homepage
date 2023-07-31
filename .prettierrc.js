module.exports = {
  // Bruk enkeltfnutter for strenger
  singleQuote: true,
  // Ingen ubrukte variabler tillatt
  noUnusedLocals: true,
  // Import i anbefalt rekkefølge
  importOrder: ['^\\u0000', '^react$', '^[a-zA-Z]', '^[./]'],
  // Plassering av prop-objekter, 'prop' betyr at du får props slik du ønsker (text={'test'})
  propWrapperFunctions: ['prop'],
  // Tillater bare .js og .jsx-filer
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx}',
      options: {
      },
    },
  ],
};
