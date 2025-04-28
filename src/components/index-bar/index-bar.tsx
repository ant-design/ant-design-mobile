import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react'
import type { ReactNode, ReactElement } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useThrottleFn } from 'ahooks'
import { mergeProps } from '../../utils/with-default-props'
import { Sidebar } from './sidebar'
import { convertPx } from '../../utils/convert-px'
import { Panel } from './panel'
import { devWarning } from '../../utils/dev-log'
import { traverseReactNode } from '../../utils/traverse-react-node'

const classPrefix = `adm-index-bar`

export type IndexBarProps = {
  sticky?: boolean
  onIndexChange?: (index: string) => void
  children?: ReactNode
} & NativeProps<'--sticky-offset-top'>

export interface IndexBarRef {
  scrollTo: (index: string) => void
}

const defaultProps = {
  sticky: true,
}

export const IndexBar = forwardRef<IndexBarRef, IndexBarProps>((p, ref) => {
  const props = mergeProps(defaultProps, p)
  const titleHeight = convertPx(35)
  const bodyRef = useRef<HTMLDivElement>(null)

  const indexItems: Array<{
    index: string
    brief: ReactNode
  }> = []
  const panels: ReactElement[] = []

  traverseReactNode(props.children, child => {
    if (!React.isValidElement(child)) return
    if (child.type !== Panel) {
      devWarning(
        'IndexBar',
        'The children of `IndexBar` must be `IndexBar.Panel` components.'
      )
      return
    }
    indexItems.push({
      index: child.props.index,
      brief: child.props.brief ?? child.props.index.charAt(0),
    })
    panels.push(
      withNativeProps(
        child.props,
        <div
          key={child.props.index}
          data-index={child.props.index}
          className={`${classPrefix}-anchor`}
        >
          <div className={`${classPrefix}-anchor-title`}>
            {child.props.title || child.props.index}
          </div>
          {child.props.children}
        </div>
      )
    )
  })

  const [activeIndex, setActiveIndex] = useState(() => {
    const firstItem = indexItems[0]
    return firstItem ? firstItem.index : null
  })

  useImperativeHandle(ref, () => ({ scrollTo }))

  function scrollTo(index: string) {
    const body = bodyRef.current
    if (!body) return

    const { children } = body
    for (let i = 0; i < children.length; i++) {
      const panel = children.item(i) as HTMLElement
      if (!panel) continue
      const panelIndex = panel.dataset.index
      if (panelIndex === index) {
        body.scrollTop = panel.offsetTop
        setActiveIndex(index)
        activeIndex !== index && props.onIndexChange?.(index)
        return
      }
    }
  }

  const { run: checkActiveIndex } = useThrottleFn(
    () => {
      const body = bodyRef.current
      if (!body) return
      const { scrollTop } = body

      const elements = body.getElementsByClassName(`${classPrefix}-anchor`)
      for (let i = 0; i < elements.length; i++) {
        const panel = elements.item(i) as HTMLElement
        if (!panel) continue
        const panelIndex = panel.dataset.index
        if (!panelIndex) continue
        if (panel.offsetTop + panel.clientHeight - titleHeight > scrollTop) {
          setActiveIndex(panelIndex)
          activeIndex !== panelIndex && props.onIndexChange?.(panelIndex)
          return
        }
      }
    },
    { wait: 50, trailing: true, leading: true }
  )

  return withNativeProps(
    props,
    <div
      className={classNames(`${classPrefix}`, {
        [`${classPrefix}-sticky`]: props.sticky,
      })}
    >
      <Sidebar
        indexItems={indexItems}
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
        {panels}
      </div>
    </div>
  )
})
