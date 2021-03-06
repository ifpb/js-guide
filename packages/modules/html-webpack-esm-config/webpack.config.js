const path = require('path');

module.exports = {
  mode: 'development',
  
  entry: './js/main.mjs',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};