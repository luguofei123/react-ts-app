/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-29 19:12:54
 * @LastEditors: lugfa
 * @LastEditTime: 2024-08-30 09:44:05
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
