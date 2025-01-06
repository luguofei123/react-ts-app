/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-29 19:12:54
 * @LastEditors: lugfa
 * @LastEditTime: 2025-01-06 17:03:01
 * @FilePath: /react-ts-app/craco.config.js
 */

const { getPlugin, pluginByName, whenProd } = require('@craco/craco')
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
    // configure: (webpackConfig, { env, paths }) => {
    //   webpackConfig.output.path = path.resolve(__dirname, 'dist')
    //   paths.appBuild = path.resolve(__dirname, 'dist')

    //   webpackConfig.output.publicPath = '/'
    //   return webpackConfig
    // }
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = 'dist' // 修改打包输出文件目录
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'dist'), // 修改打包输出文件目录 两步都要写
        publicPath: whenProd(() => '/', '/') // 静态资源publicpath
      }
      return webpackConfig
    }
  },
  devServer: {
    /* 端口 */
    port: 3002,
    /* 允许跨域 */
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: 'http://114.215.183.171:5002',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
