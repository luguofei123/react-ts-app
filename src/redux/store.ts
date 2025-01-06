/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-09-23 13:50:34
 * @LastEditors: lugfa
 * @LastEditTime: 2025-01-02 09:22:38
 * @FilePath: /react-ts-app/src/redux/store.ts
 */
import { legacy_createStore } from 'redux'
import rootReducer from './reducers'
const store = legacy_createStore(rootReducer)

export default store
