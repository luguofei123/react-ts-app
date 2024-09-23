/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 10:22:50
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-19 14:54:52
 * @FilePath: /react-ts-app/src/pages/test1/test.tsx
 */
import utils from '@/utils'
console.log(111)
function Test() {
  utils.sleep(2000).then(res => {
    console.log(res)
  })

  return <div>测试文本{utils.getUrlParameter('tesTT')}</div>
}
export default Test
