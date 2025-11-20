// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // You can keep the jsxImportSource option here if you really need it,
      // but usually this goes in tsconfig/jsconfig instead.
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      // NativeWind plugin
      'nativewind/babel',
    ],
  };
};