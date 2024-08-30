/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 16:55:34
 * @LastEditors: lugfa
 * @LastEditTime: 2024-08-30 17:01:12
 * @FilePath: /react-ts-app/src/pages/home/Draggable.tsx
 */

import { useDraggable } from '@dnd-kit/core'

function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable'
  })
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }
    : undefined

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  )
}

export default Draggable
