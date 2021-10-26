import { withDefaultProps } from '../../utils/with-default-props'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-grid`

export type GridProps = {
  columns: number
  gap?: number | number[] | string | string[]
} & NativeProps

type GapStyle = Partial<Record<'--vertical-gap' | '--horizontal-gap', string>>
type GridStyle = React.CSSProperties & Record<'--columns', GridProps['columns']>

const defaultProps = {
  gap: 0,
}

export const Grid = withDefaultProps(defaultProps)<GridProps>(props => {
  let gapStyle: GapStyle = {}
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
  const style: GridStyle = {
    ...gapStyle,
    '--columns': props.columns,
  }

  return withNativeProps(
    props,
    <div className={classPrefix} style={style}>
      {props.children}
    </div>
  )
})

export type GridItemProps = {
  span?: number
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void
} & NativeProps

type GridItemStyle = React.CSSProperties &
  Record<'--item-span', GridItemProps['span']>

export const GridItem = withDefaultProps({
  span: 1,
})<GridItemProps>(props => {
  const itemStyle: GridItemStyle = {
    '--item-span': props.span,
  }
  return withNativeProps(
    props,
    <div
      className={`${classPrefix}-item`}
      style={itemStyle}
      onClick={props?.onClick}
    >
      {props.children}
    </div>
  )
})
