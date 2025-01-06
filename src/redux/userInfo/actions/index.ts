/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-09-23 14:56:49
 * @LastEditors: lugfa
 * @LastEditTime: 2025-01-06 14:00:40
 * @FilePath: /react-ts-app/src/redux/actions/index.ts
 */

import * as actionTypes from '../constants'
// action 固定的返回值类型为对象,type和数据
export const setName = (data: any) => {
  return {
    data,
    type: actionTypes.SET_NAME
  }
}
export const setTel = (data: any) => {
  return {
    data,
    type: actionTypes.SET_TEL
  }
}
export const setAge = (data: any) => {
  return {
    data,
    type: actionTypes.SET_AGE
  }
}
