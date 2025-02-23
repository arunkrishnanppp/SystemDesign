require('ignore-styles');
require('@babel/register')({
  ignore: [/(node_module)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
});

require('./server');

// import 'ignore-styles';
// import('@babel/register').then(() => {
//   import('./server.js');
// });
