import type { CSSProperties, FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { toCSSLength } from '../../utils/to-css-length'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-grid`

export type GridProps = {
  columns: number
  gap?: number | string | [number | string, number | string]
  children?: ReactNode
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>

export const Grid: FC<GridProps> = props => {
  const style: GridProps['style'] & Record<'--columns', string> = {
    '--columns': props.columns.toString(),
  }
  const { gap } = props
  if (gap !== undefined) {
    if (Array.isArray(gap)) {
      style['--gap-horizontal'] = toCSSLength(gap[0])
      style['--gap-vertical'] = toCSSLength(gap[1])
    } else {
      style['--gap'] = toCSSLength(gap)
    }
  }

  return withNativeProps(
    props,
    <div className={classPrefix} style={style}>
      {props.children}
    </div>
  )
}

export type GridItemProps = {
  span?: number
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: ReactNode
} & NativeProps

type GridItemStyle = CSSProperties &
  Record<'--item-span', GridItemProps['span']>

export const GridItem: FC<GridItemProps> = props => {
  const mergedProps = mergeProps({ span: 1 }, props)

  const itemStyle: GridItemStyle = {
    '--item-span': mergedProps.span,
  }
  return withNativeProps(
    mergedProps,
    <div
      className={`${classPrefix}-item`}
      style={itemStyle}
      onClick={mergedProps.onClick}
    >
      {mergedProps.children}
    </div>
  )
}
