var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
var buildPath = path.resolve(__dirname, 'dist');
module.exports = {
  cache: true,  
  entry: { 
    app: './src/main.js',
  },
  
  output: {
    filename: 'app.js',
    path: buildPath,
    publicPath: ''
    
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
        {
            filename: "index.html",
            inject: "body",
            template: "./src/index.html"
        }  
    )
  ]
}