const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html')
    }),
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 3000,
    disableHostCheck: true,
  },
};
