const path = require('path');
const webpack = require("webpack");

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: {
      resolve: {
        fallback: {
          process: require.resolve("process/browser"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          stream: require.resolve("stream-browserify"),
          url: require.resolve("url"),
          timers: require.resolve("timers-browserify"),
          buffer: require.resolve("buffer"),
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser",
        }),
      ],
    },
  },
  jest: {
    babel: {
      addPresets: true,
      addPlugins: true
    },
    configure: (jestConfig, { env, paths, resolve, rootDir }) => {
      jestConfig.moduleNameMapper = {
        "^@/(.+)": "<rootDir>/src/$1"
      };
      jestConfig.setupFiles = [
        '<rootDir>/jest.setup.js'
      ];
      jestConfig.moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node'];

      return jestConfig;
    },
  },
};