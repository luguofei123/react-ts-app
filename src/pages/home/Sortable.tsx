/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 16:55:34
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-12 11:01:34
 * @FilePath: /react-ts-app/src/pages/home/Sortable.tsx
 */

import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function SortableItem(props: any) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable(props)

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.id}
    </div>
  )
}

export default SortableItem
