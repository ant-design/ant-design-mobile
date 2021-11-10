import React, { FC } from 'react'
import classNames from 'classnames'
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
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>

const defaultProps = {
  direction: 'horizontal',
}

export const Space: FC<SpaceProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { direction } = props
  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-wrap`]: props.wrap,
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-${direction}`]: true,
        [`${classPrefix}-align-${props.align}`]: !!props.align,
        [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
      })}
    >
      {React.Children.map(props.children, child => {
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
