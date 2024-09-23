/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 16:55:39
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-12 09:49:07
 * @FilePath: /react-ts-app/src/pages/home/Droppable.tsx
 */

import { useDroppable } from '@dnd-kit/core'

function Droppable(props: any) {
  const { isOver, setNodeRef, active, node, rect, over } = useDroppable({
    id: props.id, // 唯一标识可放置区域的 ID。
    data: ['luguofei'], // data（任意类型）：可选的自定义数据，可以在放置事件中使用。
    disabled: false
  })
  const style = {
    color: isOver ? 'green' : undefined,
    height: 200,
    border: '1px solid red',
    // margin: '0 auto',
    marginBottom: 10,
    padding: 20,
    width: 300
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}

export default Droppable
