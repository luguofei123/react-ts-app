/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-29 19:12:54
 * @LastEditors: lugfa
 * @LastEditTime: 2025-01-06 16:18:59
 * @FilePath: /react-ts-app/craco.config.js
 */
const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  plugins: [
    /* less */
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    /* 别名 */
    alias: {
      '@': resolve('src')
    },
    // 更改build打包文件名称为dist
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.path = path.resolve(__dirname, 'dist')
      paths.appBuild = path.resolve(__dirname, 'dist')
      return webpackConfig
    }
  },
  devServer: {
    /* 端口 */
    port: 3002,
    /* 允许跨域 */
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
