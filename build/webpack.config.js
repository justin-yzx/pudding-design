const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.less', '.jsx']
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
            // babel 转义的配置选项
            babelrc: false,
            presets: [
              // 添加 preset-react
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env'), {modules: false}]
            ],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebPackPlugin({
      template: 'public/index.html',
      filename: '404.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/index.css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(),
  ]
}
