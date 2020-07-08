const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './index.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ["@babel/env","@babel/react"]
            }
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx']
  },
   plugins:[
      new HtmlWebpackPlugin({
         template: './public/index.html',
         filename: 'index.html'
      })
   ]
}
