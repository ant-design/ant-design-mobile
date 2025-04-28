import React, { useState } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'

const classPrefix = `adm-index-bar`

interface SidebarProps {
  indexItems: Array<{
    index: string
    brief: ReactNode
  }>
  activeIndex: string | null
  onActive: (index: string) => void
}

export const Sidebar: FC<SidebarProps> = props => {
  const [interacting, setInteracting] = useState(false)

  return (
    <div
      className={classNames(`${classPrefix}-sidebar`, {
        [`${classPrefix}-sidebar-interacting`]: interacting,
      })}
      onMouseDown={() => {
        setInteracting(true)
      }}
      onMouseUp={() => {
        setInteracting(false)
      }}
      onTouchStart={() => {
        setInteracting(true)
      }}
      onTouchEnd={() => {
        setInteracting(false)
      }}
      onTouchMove={e => {
        if (!interacting) return
        const { clientX, clientY } = e.touches[0]
        const target = document.elementFromPoint(
          clientX,
          clientY
        ) as HTMLElement
        if (!target) return
        const { index } = target.dataset
        if (index) {
          props.onActive(index)
        }
      }}
    >
      {props.indexItems.map(({ index, brief }) => {
        const active = index === props.activeIndex
        return (
          <div
            className={`${classPrefix}-sidebar-row`}
            onMouseDown={() => {
              props.onActive(index)
            }}
            onTouchStart={() => {
              props.onActive(index)
            }}
            onMouseEnter={() => {
              if (interacting) {
                props.onActive(index)
              }
            }}
            data-index={index}
            key={index}
          >
            {interacting && active && (
              <div className={`${classPrefix}-sidebar-bubble`}>{brief}</div>
            )}
            <div
              className={classNames(`${classPrefix}-sidebar-item`, {
                [`${classPrefix}-sidebar-item-active`]: active,
              })}
              data-index={index}
            >
              <div>{brief}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
