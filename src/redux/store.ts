/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-09-23 13:50:34
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-23 14:09:28
 * @FilePath: /react-ts-app/src/redux/store.ts
 */
import { createStore } from 'redux'
import rootReducer from './reducers'
const store = createStore(rootReducer)

export default store
