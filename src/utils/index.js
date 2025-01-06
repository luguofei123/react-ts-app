/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-09-19 13:14:27
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-30 13:22:50
 * @FilePath: /react-ts-app/src/utils/index.js
 */
export default {
  // 千分位以及小数点转换
  toThousandFix(value) {
    if (value === 0) {
      return '0.00'
    }
    if (value === undefined || value === '' || value === null || value === 'null' || value === 'undefined') {
      return ''
    }
    if (value) {
      if (typeof value === 'number') {
        value = value.toFixed(2)
      }
      /*原来用的是Number(value).toFixed(0)，这样取整时有问题，例如0.51取整之后为1，感谢Nils指正*/
      const intPart = Math.trunc(value) //获取整数部分
      const intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') //将整数部分逢三一断
      let floatPart = '.00' //预定义小数部分
      const value2Array = value.split('.')
      //=2表示数据有小数位
      if (value2Array.length == 2) {
        floatPart = value2Array[1].toString() //拿到小数部分

        if (floatPart.length == 1) {
          return intPartFormat + '.' + floatPart + '0'
        } else {
          return intPartFormat + '.' + floatPart.substring(0, 2)
        }
      } else {
        return intPartFormat + floatPart
      }
    }
  },
  // 安全生成随机数
  cryptoRandom() {
    const arr = new Uint8Array(1)
    let crypto = null
    if (window.crypto) {
      crypto = window.crypto
    } else if (window.webkitCrypto) {
      crypto = window.webkitCrypto
    } else if (window.mozCrypto) {
      crypto = window.mozCrypto
    } else if (window.oCrypto) {
      crypto = window.oCrypto
    } else {
      crypto = window.msCrypto
    }
    return crypto.getRandomValues(arr)[0] / 256
  },
  // 获取url上的参数
  getUrlParameter(key) {
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
    // 注意window.location.search 和window.location.href的区别
    var r = window.location.search.substring(1).match(reg)
    if (r != null) {
      // r[0] 表示匹配的整个字符串，r[1]表示第一个分组匹配到的(^|&)，r[2]表示匹配到的第二个分组([^&]*) r[3]表示匹配到的第三个分组(&|$)
      return decodeURI(r[2])
    }
    return null
  },
  // 延迟方法
  sleep: time => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, time)
    })
  },
  // 节流和防抖的区别
  // 防抖 表示连续多次点击只会执行最后一次
  // 防抖函数
  debounce(func, delay) {
    let timeoutId
    return function (...args) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func.apply(this, args), delay)
    }
  },
  // 节流函数
  // 表示一段时间内只会执行一次
  throttle(func, limit) {
    let inThrottle
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }
}
