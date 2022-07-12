import { Image, List } from 'antd-mobile'
import React, { useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd'
import { users } from './users'

type IUser = {
  id: string
  avatar: string
  name: string
  description: string
}

const reorder = (
  list: Iterable<IUser> | ArrayLike<IUser>,
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export default () => {
  const [list, setList] = useState<IUser[]>(users)

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const newList = reorder(list, result.source.index, result.destination.index)
    setList([...newList])
  }

  return (
    <List header='结合 react-beautiful-dnd 实现拖拽排序'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {droppableProvided => (
            <div ref={droppableProvided.innerRef}>
              {list.map((item, index: number) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? 0.8 : 1,
                      }}
                    >
                      <List.Item
                        key={item.name}
                        prefix={
                          <Image
                            src={item.avatar}
                            style={{ borderRadius: 20 }}
                            fit='cover'
                            width={40}
                            height={40}
                          />
                        }
                        description={item.description}
                      >
                        {item.name}
                      </List.Item>
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </List>
  )
}
