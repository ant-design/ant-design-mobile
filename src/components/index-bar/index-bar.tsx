import React, {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
} from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useThrottleFn } from 'ahooks'
import { mergeProps } from '../../utils/with-default-props'
import { Sidebar } from './sidebar'
import { IndexBarContext } from './context'
import { convertPx } from '../../utils/convert-px'

const classPrefix = `adm-index-bar`

export type IndexBarProps = {
  sticky?: boolean
  children?: React.ReactNode
} & NativeProps<'--sticky-offset-top'>

export type IndexBarRef = {
  scrollTo: (index: string) => void
}

const defaultProps = {
  sticky: true,
}

export const IndexBar = forwardRef<IndexBarRef, IndexBarProps>((p, ref) => {
  const props = mergeProps(defaultProps, p)
  const titleHeight = convertPx(35)
  const bodyRef = useRef<HTMLDivElement>(null)
  const [indexes, setIndexes] = useState<string[]>([])

  const [activeIndex, setActiveIndex] = useState(indexes[0])

  useImperativeHandle(ref, () => ({ scrollTo }))

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

  const element = withNativeProps(
    props,
    <div
      className={classNames(`${classPrefix}`, {
        [`${classPrefix}-sticky`]: props.sticky,
      })}
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
  )

  return (
    <IndexBarContext.Provider
      value={{
        indexes,
        setIndexes,
      }}
    >
      {element}
    </IndexBarContext.Provider>
  )
})
