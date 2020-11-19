const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // JavaScript 执行入口文件
  entry: './main.js',
  // context: path.resolve(__dirname, ''),
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name]234.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    port: '8099',
    // progress: true,
    hot: true,
  },
  devtool: "source-map", // sourceMap 查错
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `[name]_[contenthash:8].css`,
    })
  ]
}