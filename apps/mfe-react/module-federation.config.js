module.exports = {
  name: 'mfe-react',
  exposes: {
    './Module': './src/remote-entry.tsx',
    './PokemonList': './src/app/pokemon-list/pokemon-list.tsx',
  },
};
