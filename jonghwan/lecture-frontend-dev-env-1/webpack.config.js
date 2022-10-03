const path = require("path");

module.exports ={
  mode: 'development',
  emtry:{
    main: './src/app.js'
  },
  output:{
    filename: '[name].js',
    path: path.resolve('./dist')
  }
}