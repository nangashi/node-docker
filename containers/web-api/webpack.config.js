const NodemonWebpackPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const path = require('path');

const dist = path.resolve(__dirname, 'dist/');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  target: 'node',
  output: {
    path: dist,
    filename: 'server.js',
  },
  externals: [nodeExternals()],
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
