const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './test/main.js',
  output: {
    //`dist`文件夹
    path: path.resolve(__dirname, './test/dist'),
    publicPath: '/test/dist/',
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.svg/, use: 'file-loader' },
      { test: /\.jpeg/, use: 'file-loader' },
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test:/\.vue$/, use:'vue-loader' }
    ]
  },
  resolve: {
    extensions: [ '.js', '.vue', '.less'],
    alias: {
      vue: 'vue/dist/vue.js',
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    overlay: true
  }
}
