/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-09-23 14:56:49
 * @LastEditors: lugfa
 * @LastEditTime: 2025-01-06 15:49:04
 * @FilePath: /react-ts-app/src/redux/shopList/actions/index.ts
 */

import * as actionTypes from '../constants'
// action 固定的返回值类型为对象,type和数据
export const addOne = (data: any) => {
  return {
    data,
    type: actionTypes.ADD_ONE
  }
}
export const subOne = (data: any) => {
  return {
    data,
    type: actionTypes.SUB_ONE
  }
}
