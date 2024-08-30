/*
 * @Descripttion:
 * @version:
 * @Author: lugfa
 * @Date: 2024-08-30 13:50:25
 * @LastEditors: lugfa
 * @LastEditTime: 2024-08-30 16:56:50
 * @FilePath: /react-ts-app/src/pages/home/home.tsx
 */
import { DndContext } from '@dnd-kit/core'

import Draggable from './Draggable'
import Droppable from './Droppable'

function Home() {
  return (
    <DndContext>
      <Draggable />
      <Droppable />
    </DndContext>
  )
}
export default Home
