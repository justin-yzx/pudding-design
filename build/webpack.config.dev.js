const ip = require('ip');
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const address = ip.address();


module.exports = {
  mode: 'development',
  target: "web",
  devServer: {
    host: address,
    port: 3000,
    hot: true
  },
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, '../src/index.js')
  ],
  resolve: {
    extensions: ['.js', '.less', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // jsx/js文件的正则
        exclude: /node_modules/, // 排除 node_modules 文件夹
        use: {
          // loader 是 babel
          loader: 'babel-loader',
          options: {
            presets: [
              // 添加 preset-react
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env'), {modules: false}]
            ],
            plugins: [
              'react-hot-loader/babel'
            ],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
}
