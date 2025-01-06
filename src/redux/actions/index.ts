/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-09-23 14:56:49
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-24 20:14:43
 * @FilePath: /react-ts-app/src/redux/actions/index.ts
 */
import { SET_INFO } from '../constants'
// action 固定的返回值类型为对象,type和数据
// return {
//   type: 'ADD_TODO',
//   text
// }
export const addNumberAction = (obj: any) => {
  return {
    userInfo: obj,
    type: SET_INFO
  }
}
