const path = require('path');
console.log('Loading');
module.exports = {
  entry: {
    full: './client/FullHydration.js',
    partial: './client/PartialHydration.js',
    progressive: './client/Progressive.js'
  },
  // entry: './client/FullHydration.js', // Ensure this path is correct
  output: {
    path: path.resolve(__dirname, 'dist'), // The output will be written to the 'dist' folder
    filename: '[name].client.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // This will match both .js and .jsx files
        exclude: /node_modules/,
        use: 'babel-loader' // Using babel-loader for JSX and JS transpiling
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Resolving .js and .jsx extensions
  },
  mode: 'production' // Change this to 'development' for debugging
};
