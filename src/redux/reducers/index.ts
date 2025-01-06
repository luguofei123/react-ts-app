/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-09-23 13:55:14
 * @LastEditors: lugfa
 * @LastEditTime: 2025-01-06 14:53:16
 * @FilePath: /react-ts-app/src/redux/reducers/index.ts
 */
// reducer: 是一个纯函数,(返回值依赖于参数,并且对外界无副作用只要是同样的输入，必定得到同样的输出。 )
// reducer 有两个参数, 参数1为 state对象, 参数2表示外部组件传来的要修改的对象, 而且 action必须是一个普通对象,
// 必须要有 type 属性, 为 String类型, 表示当前要做的事
// 需要return state
// 在修改 state 中的数据的时候, 最好先利用深拷贝 拷贝 state 中的数据, 防止在后续的开发中出现错误

import * as actionTypes from '../constants'
import { combineReducers } from 'redux'

// 单一数据源：整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中
// State 是只读的：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
// 使用纯函数来执行修改: 为了描述 action 如何改变 state tree ，你需要编写 reducers
// reducer 函数的返回是一个新的 state

const initialState = { name: '鲁飞', tel: '18911563700', age: 18 }

const userInfo = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_NAME:
      return { ...state, ...action.data }
    case actionTypes.SET_TEL:
      return { ...state, ...action.data }
    case actionTypes.SET_AGE:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export default combineReducers({ userInfo })
