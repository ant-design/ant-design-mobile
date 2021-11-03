import React, { FC, useRef, useState } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useResizeEffect } from '../../utils/use-resize-effect'
import { useConfig } from '../config-provider'

const classPrefix = `adm-ellipsis`

export type EllipsisProps = {
  content: string
  direction?: 'start' | 'end' | 'middle'
  rows?: number
  expandText?: string
  collapseText?: string
} & NativeProps

const defaultProps = {
  direction: 'end',
  rows: 1,
}

type EllipsisedValue = {
  start?: string
  end?: string
  all?: string
}

export const Ellipsis: FC<EllipsisProps> = p => {
  const { locale } = useConfig()
  const props = mergeProps(
    defaultProps,
    {
      expandText: locale.Ellipsis.expandText,
      collapseText: locale.Ellipsis.collapseText,
    },
    p
  )
  const rootRef = useRef<HTMLDivElement>(null)
  const actionRef = useRef<HTMLAnchorElement>(null)
  const contentRef = useRef<{
    originContent: EllipsisedValue
    ellipsisedContent: EllipsisedValue
  }>({
    originContent: {
      all: props.content,
    },
    ellipsisedContent: {},
  })

  const [ellipsised, setEllipsised] = useState<EllipsisedValue>({})
  const [showAction, setShowAction] = useState(false)
  const [isExpand, setIsExpand] = useState(false)

  useResizeEffect(
    () => {
      if (isExpand) return
      const root = rootRef.current
      if (!root) return
      const originStyle = window.getComputedStyle(root)
      const container = document.createElement('div')
      const styleNames: string[] = Array.prototype.slice.apply(originStyle)
      styleNames.forEach(name => {
        container.style.setProperty(name, originStyle.getPropertyValue(name))
      })
      container.style.position = 'fixed'
      container.style.left = '999999px'
      container.style.top = '999999px'
      container.style.zIndex = '-1000'
      container.style.height = 'auto'
      container.style.minHeight = 'auto'
      container.style.maxHeight = 'auto'
      container.style.textOverflow = 'clip'
      container.style.whiteSpace = 'normal'
      container.style.webkitLineClamp = 'unset'
      container.style.webkitBoxOrient = 'unset'
      container.style.display = 'block'
      const lineHeight = pxToNumber(originStyle.lineHeight)
      const maxHeight = Math.floor(
        lineHeight * props.rows +
          pxToNumber(originStyle.paddingTop) +
          pxToNumber(originStyle.paddingBottom)
      )

      container.innerText = props.content
      document.body.appendChild(container)

      if (container.offsetHeight <= maxHeight) {
        setEllipsised({
          all: props.content,
        })
        setShowAction(false)
      } else {
        const end = props.content.length
        const actionTextLength = isExpand
          ? props.collapseText.length
          : props.expandText.length

        function check(left: number, right: number): EllipsisedValue {
          if (right - left <= 1) {
            if (props.direction === 'end') {
              return {
                end: props.content.slice(0, left - actionTextLength) + '...',
              }
            } else {
              return {
                start:
                  '...' + props.content.slice(right + actionTextLength, end),
              }
            }
          }
          const middle = Math.round((left + right) / 2)
          if (props.direction === 'end') {
            container.innerText = props.content.slice(0, middle) + '...'
          } else {
            container.innerText = '...' + props.content.slice(middle, end)
          }
          if (container.offsetHeight <= maxHeight) {
            if (props.direction === 'end') {
              return check(middle, right)
            } else {
              return check(left, middle)
            }
          } else {
            if (props.direction === 'end') {
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
              start: props.content.slice(0, leftPart[0] - 1) + '...',
              end:
                '...' +
                props.content.slice(rightPart[1] + actionTextLength, end),
            }
          }
          const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2)
          const rightPartMiddle = Math.floor((rightPart[0] + rightPart[1]) / 2)
          container.innerText =
            props.content.slice(0, leftPartMiddle) +
            '...' +
            props.content.slice(rightPartMiddle, end)
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
          props.direction === 'middle'
            ? checkMiddle([0, middle], [middle, end])
            : check(0, end)
        contentRef.current.ellipsisedContent = ellipsised
        setEllipsised(ellipsised)
        setShowAction(true)
      }
      document.body.removeChild(container)
    },
    rootRef,
    [isExpand]
  )

  const { originContent, ellipsisedContent } = contentRef.current

  const actionElement = showAction ? (
    <a
      ref={actionRef}
      onClick={() => {
        setEllipsised(isExpand ? ellipsisedContent : originContent)
        setIsExpand(!isExpand)
      }}
    >
      {isExpand ? props.collapseText : props.expandText}
    </a>
  ) : null

  const renderContent = () => {
    if (ellipsised.all !== undefined) {
      return (
        <>
          {ellipsised.all}
          {actionElement}
        </>
      )
    }

    if (props.direction === 'end') {
      return (
        <>
          {ellipsised.end}
          {actionElement}
        </>
      )
    } else if (props.direction === 'start') {
      return (
        <>
          {actionElement}
          {ellipsised.start}
        </>
      )
    } else if (props.direction === 'middle') {
      return (
        <>
          {ellipsised.start}
          {actionElement}
          {ellipsised.end}
        </>
      )
    } else {
      return null
    }
  }

  return withNativeProps(
    props,
    <div ref={rootRef} className={classPrefix}>
      {renderContent()}
    </div>
  )
}

function pxToNumber(value: string | null): number {
  if (!value) return 0
  const match = value.match(/^\d*(\.\d*)?/)
  return match ? Number(match[0]) : 0
}
