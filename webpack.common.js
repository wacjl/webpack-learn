const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin =require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
 
  module:{
      rules:[
         {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test:/\.(png|svg|jpg|gif)$/,
            use:['file-loader']
          },
          //加载字体
          {
            test:/\.(woff|eot|ttf|otf)/,
            use:['file-loader']
          },
          //加载xml csv
          {
            test:/\.(tsv|csv)/,
            use:['csv-loader']
          },
          {
            test:/\.xml/,
            use:['xml-loader']
          }
      ]
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
   
    new HtmlWebpackPlugin({
      title:'测试',
      template:'./src/index.html',
      inject:false
    })
  ]
};