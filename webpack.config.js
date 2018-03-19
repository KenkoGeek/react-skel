const path = require('path');

const config = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.join(__dirname, 'public/assets/js/'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, 'public'),
    stats: 'errors-only',
    publicPath: 'http://localhost:8080/assets/js/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
};

module.exports = config;