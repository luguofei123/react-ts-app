/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-29 19:12:54
 * @LastEditors: lugfa
 * @LastEditTime: 2024-08-29 19:13:12
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
  }
}
