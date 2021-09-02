import { withDefaultProps } from '../../utils/with-default-props'
import React from 'react'
import { ElementProps, withElementProps } from '../../utils/element-props'
import classNames from 'classnames'

const classPrefix = `adm-grid`

export type GridProps = {
  columns: number
  gap?: number | number[] | string | string[]
} & ElementProps

const defaultProps = {
  gap: 0,
}

export const Grid = withDefaultProps(defaultProps)<GridProps>(props => {
  let gapStyle: any = {}
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
  return withElementProps(
    props,
    <div
      className={classPrefix}
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
  const itemStyle: any = {
    '--item-span': props.span,
  }
  return withElementProps(
    props,
    <div className={`${classPrefix}-item`} style={itemStyle}>
      {props.children}
    </div>
  )
})
