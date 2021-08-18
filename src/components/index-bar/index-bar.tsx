import React, { useRef, useState, useEffect } from 'react'
import classNames from 'classnames'
import { Panel } from './panel'
import { ElementProps } from '../../utils/element-props'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { useThrottleFn } from 'ahooks'
import { withDefaultProps } from '../../utils/with-default-props'
import { Sidebar } from './sidebar'
import { IndexBarContext } from './context'
import { convertPx } from '../../utils/convert-px'

const classPrefix = `am-index-bar`

export type IndexBarProps = {
  className?: string
  sticky?: boolean
  stickyOffsetTop?: number
} & ElementProps

const defaultProps = {
  sticky: true,
}

const IndexBar = withDefaultProps(defaultProps)<IndexBarProps>(props => {
  const titleHeight = convertPx(35)
  const bodyRef = useRef<HTMLDivElement>(null)
  const [indexes, setIndexes] = useState<string[]>([])

  const [activeIndex, setActiveIndex] = useState(indexes[0])

  function scrollTo(index: string) {
    const body = bodyRef.current
    if (!body) return

    const children = body.children
    for (let i = 0; i < children.length; i++) {
      const panel = children.item(i) as HTMLElement
      if (!panel) continue
      const panelIndex = panel.dataset['index']
      if (panelIndex === index) {
        body.scrollTop = panel.offsetTop
        setActiveIndex(index)
        return
      }
    }
  }

  const { run: checkActiveIndex } = useThrottleFn(
    () => {
      const body = bodyRef.current
      if (!body) return
      const scrollTop = body.scrollTop

      const children = body.getElementsByClassName(`${classPrefix}-anchor`)
      for (let i = 0; i < children.length; i++) {
        const panel = children.item(i) as HTMLElement
        if (!panel) continue
        const panelIndex = panel.dataset['index']
        if (!panelIndex) continue
        if (panel.offsetTop + panel.clientHeight - titleHeight > scrollTop) {
          setActiveIndex(panelIndex)
          return
        }
      }
    },
    { wait: 50, trailing: true, leading: true }
  )

  useEffect(() => {
    if (!indexes.length) return
    checkActiveIndex()
  }, [indexes])

  let stickyStyle: any
  if (props.stickyOffsetTop) {
    stickyStyle = {
      '--sticy-offset-top': props.stickyOffsetTop + 'px',
    }
  }

  return (
    <IndexBarContext.Provider
      value={{
        indexes,
        setIndexes,
      }}
    >
      <div
        className={classNames(
          `${classPrefix}`,
          {
            [`${classPrefix}-sticky`]: props.sticky,
          },
          props.className
        )}
        style={stickyStyle}
      >
        <Sidebar
          indexes={indexes}
          activeIndex={activeIndex}
          onActive={index => {
            scrollTo(index)
          }}
        />

        <div
          className={`${classPrefix}-body`}
          ref={bodyRef}
          onScroll={checkActiveIndex}
        >
          {props.children}
        </div>
      </div>
    </IndexBarContext.Provider>
  )
})

export default attachPropertiesToComponent(IndexBar, {
  Panel,
})
