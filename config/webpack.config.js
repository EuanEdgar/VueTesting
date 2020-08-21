const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'var',
    library: 'vueTest',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ['vue-style-loader', {
              loader: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
              ],
            }],
            js: [
              'babel-loader',
            ],
          },
          cacheBusting: true,
        },
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
    extensions: ['.wasm', '.mjs', '.js', '.json', '.vue']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html')
    }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 3000,
    disableHostCheck: true,
  },
};
