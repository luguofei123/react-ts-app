/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 16:55:39
 * @LastEditors: lugfa
 * @LastEditTime: 2024-08-30 17:11:19
 * @FilePath: /react-ts-app/src/pages/home/Droppable.tsx
 */

import { useDroppable } from '@dnd-kit/core'

function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable'
  })
  const style = {
    color: isOver ? 'green' : undefined,
    height: 300
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}

export default Droppable
