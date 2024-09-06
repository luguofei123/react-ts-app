/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 16:55:39
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-06 14:40:56
 * @FilePath: /react-ts-app/src/pages/home/Droppable.tsx
 */

import { useDroppable } from '@dnd-kit/core'

function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id
  })
  const style = {
    color: isOver ? 'green' : undefined,
    height: 100,
    border: '1px solid red',
    margin: '0 auto',
    padding: 20
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}

export default Droppable
