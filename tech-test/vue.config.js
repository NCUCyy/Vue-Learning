const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api1': {
        target: 'http://localhost:5050',
        pathRewrite:{'^/api1':''}
      },
      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/api2':''}
      },
    }
  }
}
)
