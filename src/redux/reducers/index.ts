/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-09-23 13:55:14
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-23 19:18:44
 * @FilePath: /react-ts-app/src/redux/reducers/index.ts
 */
import { SET_INFO } from '../constants'

import { combineReducers } from 'redux'

const userInfo = (state = { name: '鲁国飞', tel: '18911563700' }, action: any) => {
  switch (action.type) {
    case SET_INFO:
      return action.data
    default:
      return state
  }
}

export default combineReducers({ userInfo })
