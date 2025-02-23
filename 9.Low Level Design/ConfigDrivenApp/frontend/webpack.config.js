const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { use } = require('react');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      //js and jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, //js and jsx
      {
        test: /\.(csss|scss)$/,
        use: ['style-loader', 'css-loader']
      }, //js and jsx
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    compress: true,
    liveReload: true,
    port: 3000
  }
};
