import React from 'react'
import classNames from 'classnames'
import { ElementProps } from '../../utils/element-props'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `am-space`

export type SpaceProps = {
  size?: number | number[] | string | string[]
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  wrap?: boolean
  block?: boolean
} & ElementProps

const Space = withDefaultProps({ direction: 'horizontal' })<SpaceProps>(
  props => {
    const { size, direction, style = {} } = props
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
    return (
      <div
        className={classNames(
          classPrefix,
          {
            [`${classPrefix}-wrap`]: props.wrap,
            [`${classPrefix}-block`]: props.block,
            [`${classPrefix}-${direction}`]: true,
            [`${classPrefix}-align-${props.align}`]: !!props.align,
          },
          props.className
        )}
        style={{
          ...sizeStyle,
          ...style,
        }}
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

export default Space
