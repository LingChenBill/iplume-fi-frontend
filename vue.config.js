const webpack = require("webpack");

// 端口.
const port = process.env.PORT || 8080

module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        // pathRewrite: { '^/api': '' },
      },
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
}