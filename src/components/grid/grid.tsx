import { withDefaultProps } from '../../utils/with-default-props'
import React from 'react'
import { ElementProps } from '../../utils/element-props'
import classNames from 'classnames'

const classPrefix = `am-grid`

export type GridProps = {
  columns: number
  gap?: number | number[] | string | string[]
} & ElementProps

const defaultProps = {
  gap: 0,
}

export const Grid = withDefaultProps(defaultProps)<GridProps>(props => {
  let gapStyle: any = {}
  if (props.style) {
    gapStyle = {
      ...gapStyle,
      ...props.style,
    }
  }
  const { gap } = props
  if (gap) {
    const [horizontalGap, verticalGap] = Array.isArray(gap) ? gap : [gap, gap]
    gapStyle = {
      ...gapStyle,
      '--vertical-gap':
        typeof verticalGap === 'number' ? `${verticalGap}px` : verticalGap,
      '--horizontal-gap':
        typeof horizontalGap === 'number'
          ? `${horizontalGap}px`
          : horizontalGap,
    }
  }
  return (
    <div
      className={classNames(`${classPrefix}`, props.className)}
      style={{
        ...gapStyle,
        '--columns': props.columns,
      }}
    >
      {props.children}
    </div>
  )
})

export type GridItemProps = {
  span?: number
} & ElementProps

export const GridItem = withDefaultProps({
  span: 1,
})<GridItemProps>(props => {
  let itemStyle: any = props.style ?? {}
  itemStyle = {
    ...itemStyle,
    '--item-span': props.span,
  }
  return (
    <div
      className={classNames(`${classPrefix}-item`, props.className)}
      style={itemStyle}
    >
      {props.children}
    </div>
  )
})
