const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_PATH = path.resolve(__dirname, '../src');
const isDev = process.env.NODE_ENV === 'development';

const getEntries = () => {
  const entry = {};
  const htmlWebpackplugins = [];
  const basePath = path.join(__dirname, '../src');
  const htmlTemplatePath = path.join(__dirname, '../template/index.html')
  const files = fs.readdirSync(basePath);
  files.forEach((file) => {
    const filePath = path.join(basePath, `${file}/index.js`);
    if (!fs.existsSync(filePath)) return;
    entry[file] = filePath;
    htmlWebpackplugins.push(
      new HtmlWebpackPlugin({
        template: htmlTemplatePath,
        filename: `${file}.html`,
        chunks: [file],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true
        }
      })
    );
  })
  return { entry, htmlWebpackplugins }
}
const { entry, htmlWebpackplugins } = getEntries();

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: isDev ? '[name].js' : '[name]_[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: SRC_PATH,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: SRC_PATH,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    ...htmlWebpackplugins,
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name]_[contenthash:8].css'
    })
  ]
}