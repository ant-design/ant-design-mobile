import React from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `adm-space`

export type SpaceProps = {
  size?: number | number[] | string | string[]
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  wrap?: boolean
  block?: boolean
} & NativeProps

export const Space = withDefaultProps({ direction: 'horizontal' })<SpaceProps>(
  props => {
    const { size, direction } = props
    let sizeStyle: any = {}
    if (size) {
      const [horizontalSize, verticalSize] = Array.isArray(size)
        ? size
        : [size, size]
      sizeStyle = {
        '--vertical-size':
          typeof verticalSize === 'number' ? `${verticalSize}px` : verticalSize,
        '--horizontal-size':
          typeof horizontalSize === 'number'
            ? `${horizontalSize}px`
            : horizontalSize,
      }
    }
    return withNativeProps(
      props,
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-wrap`]: props.wrap,
          [`${classPrefix}-block`]: props.block,
          [`${classPrefix}-${direction}`]: true,
          [`${classPrefix}-align-${props.align}`]: !!props.align,
        })}
        style={sizeStyle}
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
)
