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
        filename: `${file}/index.html`,
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
    path: path.resolve(__dirname, '../dist'),
    filename: isDev ? '[name]/app.js' : '[name]/app_[chunkhash:8].js',  // 热更新和chunkhash会产生冲突，开发环境不能使用
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.vue'],
    mainFields: ['main']
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
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              hmr: isDev
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              import: true,
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:4]'
              },
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|wav)$/,
        use: ["url-loader?limit=10240&name=img/[hash:8].[name].[ext]"]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    ...htmlWebpackplugins,
    new MiniCssExtractPlugin({
      filename: isDev ? '[name]/app.css' : '[name]/app_[contenthash:8].css'
    })
  ]
}