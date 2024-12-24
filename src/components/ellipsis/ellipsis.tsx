import type { ReactNode } from 'react'
import React, { forwardRef, useImperativeHandle } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useResizeEffect } from '../../utils/use-resize-effect'
import { mergeProps } from '../../utils/with-default-props'
import {
  PropagationEvent,
  withStopPropagation,
} from '../../utils/with-stop-propagation'
import useMeasure from './useMeasure'

const classPrefix = `adm-ellipsis`

export type EllipsisProps = {
  content: string
  direction?: 'start' | 'end' | 'middle'
  rows?: number
  expandText?: ReactNode
  collapseText?: ReactNode
  stopPropagationForActionButtons?: PropagationEvent[]
  onContentClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onExpand?: (expanded: boolean) => void
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

export type EllipsisRef = {
  expand: (expanded: boolean) => void
}

export const Ellipsis = forwardRef<EllipsisRef, EllipsisProps>((p, ref) => {
  const props = mergeProps(defaultProps, p)

  const {
    content,
    direction,
    rows,
    expandText,
    collapseText,
    stopPropagationForActionButtons,
    onContentClick,
    defaultExpanded,
    onExpand,
  } = props

  // ============================ Refs ============================
  const rootRef = React.useRef<HTMLDivElement>(null)

  // ========================== Expanded ==========================
  const [expanded, setExpanded] = React.useState(defaultExpanded)

  useImperativeHandle(
    ref,
    () => ({
      expand: (isExpanded: boolean) => {
        setExpanded(isExpanded)
      },
    }),
    []
  )

  const expandNode = expandText
    ? withStopPropagation(
        stopPropagationForActionButtons,
        <a
          onClick={() => {
            onExpand && onExpand(true)
            setExpanded(true)
          }}
        >
          {expandText}
        </a>
      )
    : null

  const collapseNode = collapseText
    ? withStopPropagation(
        stopPropagationForActionButtons,
        <a
          onClick={() => {
            onExpand && onExpand(false)
            setExpanded(false)
          }}
        >
          {collapseText}
        </a>
      )
    : null

  // ========================== Ellipsis ==========================
  const [measureNodes, forceResize] = useMeasure(
    rootRef,
    content,
    rows,
    direction,
    expanded,
    expandNode,
    collapseNode
  )

  useResizeEffect(forceResize, rootRef)

  // =========================== Render ===========================
  return withNativeProps(
    props,
    <div
      ref={rootRef}
      className={classPrefix}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onContentClick(e)
        }
      }}
    >
      {measureNodes}
    </div>
  )
})
