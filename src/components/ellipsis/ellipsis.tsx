import { useIsomorphicLayoutEffect } from 'ahooks'
import type { FC, ReactNode } from 'react'
import React, { useMemo, useRef, useState } from 'react'
import runes from 'runes2'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useResizeEffect } from '../../utils/use-resize-effect'
import { mergeProps } from '../../utils/with-default-props'
import {
  PropagationEvent,
  withStopPropagation,
} from '../../utils/with-stop-propagation'

const classPrefix = `adm-ellipsis`

export type EllipsisProps = {
  content: string
  direction?: 'start' | 'end' | 'middle'
  rows?: number
  expandText?: ReactNode
  collapseText?: ReactNode
  stopPropagationForActionButtons?: PropagationEvent[]
  onContentClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  defaultExpanded?: boolean
} & NativeProps

const defaultProps = {
  direction: 'end',
  rows: 1,
  expandText: '',
  content: '',
  collapseText: '',
  stopPropagationForActionButtons: [],
  onContentClick: () => {},
  defaultExpanded: false,
}

type EllipsisedValue = {
  leading?: string
  tailing?: string
}

export const Ellipsis: FC<EllipsisProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const rootRef = useRef<HTMLDivElement>(null)
  const expandElRef = useRef<HTMLAnchorElement>(null)
  const collapseElRef = useRef<HTMLAnchorElement>(null)

  const [ellipsised, setEllipsised] = useState<EllipsisedValue>({})
  const [expanded, setExpanded] = useState(mergedProps.defaultExpanded)
  const [exceeded, setExceeded] = useState(false)

  const chars = useMemo(() => runes(mergedProps.content), [mergedProps.content])
  function getSubString(start: number, end: number) {
    return chars.slice(start, end).join('')
  }

  function calcEllipsised() {
    const root = rootRef.current
    if (!root) return

    const originDisplay = root.style.display
    root.style.display = 'block'

    const originStyle = window.getComputedStyle(root)
    const container = document.createElement('div')

    const styleNames: string[] = Array.prototype.slice.apply(originStyle)
    styleNames.forEach(name => {
      container.style.setProperty(name, originStyle.getPropertyValue(name))
    })

    root.style.display = originDisplay

    container.style.height = 'auto'
    container.style.minHeight = 'auto'
    container.style.maxHeight = 'auto'
    container.style.textOverflow = 'clip'
    container.style.webkitLineClamp = 'unset'
    container.style.display = 'block'

    const lineHeight = pxToNumber(originStyle.lineHeight)
    const maxHeight = Math.floor(
      lineHeight * (mergedProps.rows + 0.5) +
        pxToNumber(originStyle.paddingTop) +
        pxToNumber(originStyle.paddingBottom)
    )

    container.innerText = mergedProps.content
    document.body.appendChild(container)

    if (container.offsetHeight <= maxHeight) {
      setExceeded(false)
    } else {
      setExceeded(true)
      const end = mergedProps.content.length

      const collapseEl =
        typeof mergedProps.collapseText === 'string'
          ? mergedProps.collapseText
          : collapseElRef.current?.innerHTML
      const expandEl =
        typeof mergedProps.expandText === 'string'
          ? mergedProps.expandText
          : expandElRef.current?.innerHTML
      const actionText = expanded ? collapseEl : expandEl

      function check(left: number, right: number): EllipsisedValue {
        if (right - left <= 1) {
          if (mergedProps.direction === 'end') {
            return {
              leading: getSubString(0, left) + '...',
            }
          } else {
            return {
              tailing: '...' + getSubString(right, end),
            }
          }
        }
        const middle = Math.round((left + right) / 2)
        if (mergedProps.direction === 'end') {
          container.innerHTML = getSubString(0, middle) + '...' + actionText
        } else {
          container.innerHTML = actionText + '...' + getSubString(middle, end)
        }

        if (container.offsetHeight <= maxHeight) {
          if (mergedProps.direction === 'end') {
            return check(middle, right)
          } else {
            return check(left, middle)
          }
        } else {
          if (mergedProps.direction === 'end') {
            return check(left, middle)
          } else {
            return check(middle, right)
          }
        }
      }

      function checkMiddle(
        leftPart: [number, number],
        rightPart: [number, number]
      ): EllipsisedValue {
        if (
          leftPart[1] - leftPart[0] <= 1 &&
          rightPart[1] - rightPart[0] <= 1
        ) {
          return {
            leading: getSubString(0, leftPart[0]) + '...',
            tailing: '...' + getSubString(rightPart[1], end),
          }
        }
        const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2)
        const rightPartMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2)
        container.innerHTML =
          getSubString(0, leftPartMiddle) +
          '...' +
          actionText +
          '...' +
          getSubString(rightPartMiddle, end)
        if (container.offsetHeight <= maxHeight) {
          return checkMiddle(
            [leftPartMiddle, leftPart[1]],
            [rightPart[0], rightPartMiddle]
          )
        } else {
          return checkMiddle(
            [leftPart[0], leftPartMiddle],
            [rightPartMiddle, rightPart[1]]
          )
        }
      }

      const middle = Math.floor((0 + end) / 2)
      const ellipsised =
        mergedProps.direction === 'middle'
          ? checkMiddle([0, middle], [middle, end])
          : check(0, end)
      setEllipsised(ellipsised)
    }
    document.body.removeChild(container)
  }

  useResizeEffect(calcEllipsised, rootRef)
  useIsomorphicLayoutEffect(() => {
    calcEllipsised()
  }, [
    mergedProps.content,
    mergedProps.direction,
    mergedProps.rows,
    mergedProps.expandText,
    mergedProps.collapseText,
  ])

  const expandActionElement =
    !!mergedProps.expandText &&
    withStopPropagation(
      mergedProps.stopPropagationForActionButtons,
      <a
        ref={expandElRef}
        onClick={() => {
          setExpanded(true)
        }}
      >
        {mergedProps.expandText}
      </a>
    )

  const collapseActionElement =
    !!mergedProps.collapseText &&
    withStopPropagation(
      mergedProps.stopPropagationForActionButtons,
      <a
        ref={collapseElRef}
        onClick={() => {
          setExpanded(false)
        }}
      >
        {mergedProps.collapseText}
      </a>
    )

  const renderContent = () => {
    if (!exceeded) return mergedProps.content

    if (expanded)
      return (
        <>
          {mergedProps.content}
          {collapseActionElement}
        </>
      )
    return (
      <>
        {ellipsised.leading}
        {expandActionElement}
        {ellipsised.tailing}
      </>
    )
  }

  return withNativeProps(
    mergedProps,
    <div
      ref={rootRef}
      className={classPrefix}
      onClick={e => {
        if (e.target === e.currentTarget) {
          mergedProps.onContentClick(e)
        }
      }}
    >
      {renderContent()}
    </div>
  )
}

function pxToNumber(value: string | null): number {
  if (!value) return 0
  const match = value.match(/^\d*(\.\d*)?/)
  return match ? Number(match[0]) : 0
}
