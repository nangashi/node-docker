const NodemonWebpackPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const path = require('path');

const dist = path.resolve(__dirname, 'dist/');

module.exports = env => {
  const mode = (env && env.mode) ? env.mode : 'development';
console.log('mode', env);
  return {
    mode: mode,
    entry: './src/app.ts',
    target: 'node',
    output: {
      path: dist,
      filename: 'server.js',
    },
    externals: [nodeExternals()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        config$: path.resolve(__dirname, `src/config/${mode}`),
      },
      extensions: ['.ts'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
            {
              loader: 'ts-loader',
            },
          ],
        },
      ],
    },
    plugins: [new NodemonWebpackPlugin()],
  };
};
