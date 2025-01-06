/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 10:22:50
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-26 20:39:28
 * @FilePath: /react-ts-app/src/pages/test1/test.tsx
 */
import React, { useState, useEffect } from 'react'
import store from '@/redux/store'
import { addNumberAction } from '@/redux/actions'

import { useSelector, useDispatch } from 'react-redux'
import utils from '@/utils'

function Test() {
  // let [userInfo, setUserInfo] = useState(store.getState().userInfo)

  // const { userInfo } = useSelector((state: any) => {
  //   debugger
  //   return state
  // })
  const { name, tel } = useSelector((state: any) => state.userInfo)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   let unsubscribe = store.subscribe(() => {
  //     let { userInfo } = store.getState()

  //     // setUserInfo(userInfo)
  //   })

  //   return () => {
  //     unsubscribe()
  //   }
  // }, [])

  function addNumber() {
    dispatch(addNumberAction({ name: 'luguofei', tel: Math.random() }))
    // store.dispatch(addNumberAction({ name: 'luguofei', tel: Math.random() }))
  }
  const addNumber1 = utils.debounce(() => {
    console.log(2222)
  }, 300)

  return (
    <div>
      <button onClick={addNumber}>测试按钮222</button>
      <div>{name}</div>
      <div>{tel}</div>
      <button onClick={addNumber1}>测试按钮防抖</button>
    </div>
  )
}
export default Test
