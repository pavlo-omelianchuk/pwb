const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.ts', '.js', '.tsx'],
    plugins: [new pathsPlugin({ configFile: path.join(__dirname, './tsconfig.json') })],
  },
  output: {
    path: path.resolve(__dirname, '.', './dist'),
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: 'pricing@v12.02.bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    // chunkFilename: '[name].bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '.', './dist/index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};
