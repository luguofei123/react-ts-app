/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 10:22:50
 * @LastEditors: lugfa
 * @LastEditTime: 2025-01-06 16:00:38
 * @FilePath: /react-ts-app/src/pages/test2/test.tsx
 */

import { addOne, subOne } from '@/redux/shopList/actions'

import { useSelector, useDispatch } from 'react-redux'

function Test() {
  let { list } = useSelector((state: any) => {
    return state.shopList
  })

  const dispatch = useDispatch()

  function add() {
    list.push({ shopName: 'shopName' + Math.random() })
    dispatch(addOne({ list }))
  }

  function sub() {
    list.pop()
    dispatch(subOne({ list }))
  }

  console.log(list)

  return (
    <div>
      <button onClick={add}>增加一条</button>
      <button onClick={sub}>减少一条</button>
      {list.map((item: any, index: number) => {
        return <div key={index}>{item.shopName}</div>
      })}
    </div>
  )
}
export default Test
