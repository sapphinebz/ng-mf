module.exports = {
  name: 'portal',
  remotes: [],
  // shared: (name, config) => {
  // We want lodash to be tree shaken, and bundled into each host/remote separately.
  //     '@angular/core': { singleton: true },
  //     '@angular/common': { singleton: true },
  //     '@angular/router': { singleton: true },
  // if (
  //   ['@angular/core', '@angular/common', '@angular/router'].includes(name)
  // ) {
  // config.requiredVersion = false;
  // config.strictVersion = false;
  // config.singleton = false;
  // config.singleton = true;
  // config.strictVersion = true;
  // config.requiredVersion = 'auto';
  // console.log(config);
  // }
  // },
};
