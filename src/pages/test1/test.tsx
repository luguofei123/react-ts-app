/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 10:22:50
 * @LastEditors: lugfa
 * @LastEditTime: 2025-01-06 15:35:34
 * @FilePath: /react-ts-app/src/pages/test1/test.tsx
 */
import React, { useState, useEffect } from 'react'
// import store from '@/redux/store'
import { setName, setTel, setAge } from '@/redux/userInfo/actions'

import { useSelector, useDispatch } from 'react-redux'
import utils from '@/utils'

function Test() {
  // let [userInfo, setUserInfo] = useState(store.getState().userInfo)

  // const { userInfo } = useSelector((state: any) => {
  //   debugger
  //   return state
  // })
  let { name, tel, age } = useSelector((state: any) => {
    debugger
    return state.userInfo
  })

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

  function addAge() {
    dispatch(setAge({ age: age + 1 }))
    // store.dispatch(addNumberAction({ name: 'luguofei', tel: Math.random() }))
  }
  const addNumber1 = utils.debounce(() => {
    console.log(2222)
  }, 300)

  function changeName() {
    dispatch(setName({ name: 'luguofei' }))
  }
  function changeTel() {
    dispatch(setTel({ tel: '13912309998' }))
  }
  function subAge() {
    dispatch(setAge({ age: age - 1 }))
  }

  return (
    <div>
      <button onClick={changeName}>改变名字</button>
      <button onClick={changeTel}>改变电话</button>
      <button onClick={addAge}>增加年龄</button>
      <button onClick={subAge}>减少年龄</button>
      <div>{name}</div>
      <div>{tel}</div>
      <div>{age}</div>
      <button onClick={addNumber1}>测试按钮防抖</button>
    </div>
  )
}
export default Test
