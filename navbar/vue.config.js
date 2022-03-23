// const ModuleFederationPlugin =
//   require('webpack').container.ModuleFederationPlugin;

// module.exports = {
//   publicPath: 'http://localhost:8081/',
//   optimization: {
//     splitChunks: false
//   },
//   configureWebpack: {
//     plugins: [
//       new ModuleFederationPlugin({
//         name: 'navbar',
//         filename: 'remoteEntry.js',
//         exposes: {
//           './App': './src/App',
//         },
//         shared: require('./package.json').dependencies,
//       }),
//     ],
//   },
//   devServer: {
//     port: 8081,
//   },
// };

const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/main.js',
    },
  },
  publicPath: 'http://localhost:8081/',
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'navbar',
        filename: 'remoteEntry.js',
        exposes: {
          './Navbar.vue': './src/Navbar.vue',
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
  devServer: {
    port: 8081,
  },
});
