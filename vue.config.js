const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Virtual Learning Environment PWA',
    themeColor: '#00183D'
  }
})
