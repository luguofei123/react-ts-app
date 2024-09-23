/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 10:22:50
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-23 19:38:42
 * @FilePath: /react-ts-app/src/pages/test1/test.tsx
 */
import React, { useState, useEffect } from 'react'
import store from '@/redux/store'
import { addNumberAction } from '@/redux/actions'

function Test() {
  let [userInfo, setUserInfo] = useState(store.getState().userInfo)

  useEffect(() => {
    let unsubscribe = store.subscribe(() => {
      let { userInfo } = store.getState()

      setUserInfo(userInfo)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  function addNumber() {
    store.dispatch(addNumberAction({ name: 'luguofei', tel: Math.random() }))
  }

  return (
    <div>
      <button onClick={addNumber}>测试按钮</button>
      <div>{userInfo.name}</div>
      <div>{userInfo.tel}</div>
    </div>
  )
}
export default Test
