import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-space`

export type SpaceProps = {
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
  wrap?: boolean
  block?: boolean
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children?: ReactNode
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>

const defaultProps = {
  direction: 'horizontal',
}

export const Space: FC<SpaceProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const { direction, onClick } = mergedProps
  return withNativeProps(
    mergedProps,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-wrap`]: mergedProps.wrap,
        [`${classPrefix}-block`]: mergedProps.block,
        [`${classPrefix}-${direction}`]: true,
        [`${classPrefix}-align-${mergedProps.align}`]: !!mergedProps.align,
        [`${classPrefix}-justify-${mergedProps.justify}`]:
          !!mergedProps.justify,
      })}
      onClick={onClick}
    >
      {React.Children.map(mergedProps.children, child => {
        return (
          child !== null &&
          child !== undefined && (
            <div className={`${classPrefix}-item`}>{child}</div>
          )
        )
      })}
    </div>
  )
}
