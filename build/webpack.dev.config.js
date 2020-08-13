const { merge } = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval",
  devServer: { // 使用webpack-dev-server构建的时候，不会在指定的输出目录中输出构建好的文件，而是会保存在内存中
    contentBase: '../dist',
    index: 'todolist-single-vue/index.html',
    hot: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});