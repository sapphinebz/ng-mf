const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = async (wco) => {
  const wmf = await withModuleFederation(config);
  return wmf({
    ...wco,
    plugins: [
      ...(wco.plugins ?? []),
      //   new ModuleFederationPlugin({
      //     shared: {
      //       '@angular/core': { singleton: true },
      //       '@angular/common': { singleton: true },
      //       '@angular/router': { singleton: true },
      //     },
      //   }),
      //   new LicenseWebpackPlugin({
      //     stats: {
      //       warnings: false,
      //       errors: false,
      //     },
      //     perChunkOutput: false,
      //     outputFilename: '3rdpartylicenses.txt',
      //     skipChildCompilers: true,
      //     modulesDirectories: [path.resolve(__dirname, '../../node_modules')],
      //   }),
    ],
  });
};
