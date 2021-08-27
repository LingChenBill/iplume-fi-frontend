const webpack = require("webpack");

// 端口.
const port = process.env.PORT || 8080

module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    // 设置为0.0.0.0则所有的地址均能访问.
    host: '0.0.0.0',
    // 定义前台服务端口.
    port: port,
    // 反向代理处理跨域问题.
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
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