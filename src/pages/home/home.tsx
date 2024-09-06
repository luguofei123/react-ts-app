/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 13:50:25
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-06 14:32:56
 * @FilePath: /react-ts-app/src/pages/home/home.tsx
 */
import React, { useState } from 'react'
import {
  DndContext,
  DragStartEvent,
  DragMoveEvent,
  DragOverEvent,
  DragEndEvent,
  Announcements,
  CancelDrop,
  CollisionDetection,
  Modifiers,
  ScreenReaderInstructions,
  SensorDescriptor
} from '@dnd-kit/core'

import Draggable from './Draggable'
import Droppable from './Droppable'

interface LayoutMeasuring {
  // 根据实际需求填写属性
  width: number
  height: number
}
interface Props {
  announcements?: Announcements
  autoScroll?: boolean
  cancelDrop?: CancelDrop
  children?: React.ReactNode
  collisionDetection?: CollisionDetection
  layoutMeasuring?: Partial<LayoutMeasuring>
  modifiers?: Modifiers
  screenReaderInstructions?: ScreenReaderInstructions
  sensors?: SensorDescriptor<any>[]
  onDragStart?(event: DragStartEvent): void
  onDragMove?(event: DragMoveEvent): void
  onDragOver?(event: DragOverEvent): void
  onDragEnd?(event: DragEndEvent): void
  onDragCancel?(): void
}

function Home() {
  const [parent, setParent] = useState(null)
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!parent ? (
        <Draggable id="draggable">
          <div className="draggable">TEST1</div>
        </Draggable>
      ) : null}

      <Droppable id="droppable">
        {parent === 'droppable' ? (
          <Draggable id="draggable">
            <div className="draggable">TEST1</div>
          </Draggable>
        ) : (
          'Drop here'
        )}
      </Droppable>
    </DndContext>
  )

  function handleDragEnd({ over }: any) {
    setParent(over ? over.id : null)
    debugger
  }
}

export default Home
