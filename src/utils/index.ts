/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-09-19 13:14:27
 * @LastEditors: lugfa
 * @LastEditTime: 2025-02-19 14:07:06
 * @FilePath: /react-ts-app/src/utils/index.ts
 */
const utils = {
  // 千分位以及小数点转换
  toThousandFix(value: number | string) {
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
      const intPart = Math.trunc(Number(value)) //获取整数部分
      const intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') //将整数部分逢三一断
      let floatPart = '.00' //预定义小数部分
      const value2Array = value.split('.')
      //=2表示数据有小数位
      if (value2Array.length === 2) {
        floatPart = value2Array[1].toString() //拿到小数部分

        if (floatPart.length === 1) {
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

    const crypto = window.crypto || (window as any).webkitCrypto || (window as any).mozCrypto || (window as any).oCrypto || (window as any).msCrypto
    if (!crypto || !crypto.getRandomValues) {
      throw new Error('No secure random number generator available.')
    }
    return crypto.getRandomValues(arr)[0] / 256
  },
  // 获取url上的参数
  getUrlParameter(key: string) {
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
  sleep: (time: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, time)
    })
  },
  // 节流和防抖的区别
  // 防抖 表示连续多次点击只会执行最后一次
  // 防抖函数
  debounce(func: Function, delay: number) {
    let timeoutId: NodeJS.Timeout | null = null
    return function (...args: any[]) {
      clearTimeout(timeoutId as NodeJS.Timeout)
      timeoutId = setTimeout(() => func.apply(func, args), delay)
    }
  },
  // 节流函数
  // 表示一段时间内只会执行一次
  throttle(func: Function, limit: number) {
    let inThrottle: boolean
    return function (...args: any[]) {
      if (!inThrottle) {
        func.apply(func, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  },

  // 根据指定的key对数据去重
  filterData(data: any[], key: string) {
    let arr = data
    if (data && data.length) {
      arr = data.filter((x, index) => {
        let arrKey: any[] = []
        data.forEach(item => {
          arrKey.push(item[key])
        })
        return arrKey.indexOf(x[key]) === index
      })
    }
    return arr
  },
  removeDuplicatesByKey(arr: any[], key: string) {
    const uniqueArray: any[] = []
    arr.forEach(value => {
      if (!uniqueArray.some(item => item[key] === value[key])) {
        uniqueArray.push(value)
      }
    })
    return uniqueArray
  },
  // 数组去重duplicate removal
  removeDuplicates(arr: any[]) {
    const uniqueArray: any[] = []
    arr.forEach(value => {
      if (!uniqueArray.includes(value)) {
        uniqueArray.push(value)
      }
    })
    return uniqueArray
  },
  removeDuplicates1(arr: any[]) {
    return [...new Set(arr)]
  }
}

export default utils
