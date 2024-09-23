/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-09-23 14:56:49
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-23 19:19:14
 * @FilePath: /react-ts-app/src/redux/actions/index.ts
 */
import { SET_INFO } from '../constants'
export const addNumberAction = (obj: any) => {
  return {
    data: obj,
    type: SET_INFO
  }
}
