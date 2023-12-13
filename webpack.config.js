const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './fractal.ts',
  devtool: 'inline-source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name]-[contenthash]-bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [new HtmlWebpackPlugin({
    hash: true,
    minify: true,
    title: "Square Fractal: Refresh for New",
  })],
};
