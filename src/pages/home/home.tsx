/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 13:50:25
 * @LastEditors: lugfa
 * @LastEditTime: 2024-09-19 13:05:21
 * @FilePath: /react-ts-app/src/pages/home/home.tsx
 */
import React, { useState } from 'react'
import {
  DragOverlay,
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
  SensorDescriptor,
  useSensor,
  MouseSensor
} from '@dnd-kit/core'
import { restrictToVerticalAxis, restrictToWindowEdges, createSnapModifier } from '@dnd-kit/modifiers'
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Draggable from './Draggable'
import Droppable from './Droppable'
import Sortable from './Sortable'

const gridSize = 20 // pixels
const snapToGridModifier = createSnapModifier(gridSize)

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

interface Item {
  id: string
  text: string
}

function Home() {
  const sensor = useSensor(MouseSensor, { activationConstraint: { distance: 5 } })
  // const sensors = useSensors(
  //   useSensor(MouseSensor),
  //   useSensor(TouchSensor),
  //   useSensor(KeyboardSensor),
  // );
  const [items, setItems] = useState<Item[]>([
    { id: '1', text: '1' },
    { id: '2', text: '2' },
    { id: '3', text: '3' }
  ])
  const [items2, setItems2] = useState<Item[]>([])
  const [items3, setItems3] = useState<Item[]>([])
  const [items4, setItems4] = useState<Item[]>([
    { id: '4', text: '4' },
    { id: '5', text: '5' },
    { id: '6', text: '6' }
  ])

  return (
    <DndContext
      onDragStart={handleDragStart}
      sensors={[sensor]}
      modifiers={[snapToGridModifier]}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
      id="0000000001"
    >
      <DragOverlay>{/* <div>他是一个组件,当开始拖动时，他会显示到拖动的组件上面,拖动结束就会隐藏</div> */}</DragOverlay>
      {items.map(item => (
        <Draggable id={item.id} key={item.id} data={item}>
          <div className="draggable">{item.text}</div>
        </Draggable>
      ))}

      <Droppable id="droppable2">
        {items2.map(item => (
          <Draggable id={item.id} key={item.id} data={item}>
            <div className="draggable">{item.text}</div>
          </Draggable>
        ))}
      </Droppable>
      <Droppable id="droppable3">
        {items3.map(item => (
          <Draggable id={item.id} key={item.id} data={item}>
            <div className="draggable">{item.text}</div>
          </Draggable>
        ))}
      </Droppable>
      <SortableContext items={items4} id="sortable">
        {items4.map(item => (
          <Sortable id={item.id} key={item.id}></Sortable>
        ))}
      </SortableContext>
    </DndContext>
  )

  // 拖动开始时触发的回调函数
  function handleDragStart(event: DragStartEvent) {
    console.log(event)
  }
  //拖动过程中触发的回调函数
  function handleDragMove(event: DragMoveEvent) {
    console.log(event)
  }

  function handleDragEnd(event: DragEndEvent) {
    console.log(event)
    debugger
    const idDrop = event?.over?.id + '' // 放置的容器
    const idDrag = event?.active?.id + '' // 拖拽的容器

    if (idDrop === 'droppable2') {
      let moveObj: Item = { id: idDrag, text: idDrag }
      let drop = items.filter(item => item.id !== idDrag)
      let drop3 = items3.filter(item => item.id !== idDrag)
      setItems([...drop])

      let flag = items2.some(item => item.id === idDrag)
      if (!flag) {
        setItems2([...items2, moveObj])
      }
      setItems3([...drop3])
    } else if (idDrop === 'droppable3') {
      let moveObj: Item = { id: idDrag, text: idDrag }
      let drop = items.filter(item => item.id !== idDrag)
      let drop2 = items2.filter(item => item.id !== idDrag)
      setItems([...drop])
      setItems2([...drop2])
      let flag = items3.some(item => item.id === idDrag)
      if (!flag) {
        setItems3([...items3, moveObj])
      }
    }
  }
}

export default Home
