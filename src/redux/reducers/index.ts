/*
 * @Descripttion:  combineReducers
 * @version:
 * @Author: lugfa
 * @Date: 2024-09-23 13:55:14
 * @LastEditors: lugfa
 * @LastEditTime: 2025-01-06 15:37:50
 * @FilePath: /react-ts-app/src/redux/reducers/index.ts
 */

import { combineReducers } from 'redux'
import userInfo from '../userInfo/reducer'
import shopList from '../shopList/reducer'

const rootReducer = combineReducers({ userInfo, shopList })
export default rootReducer
