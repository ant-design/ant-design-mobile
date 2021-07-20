import React, {FC} from 'react'
import classNames from 'classnames'
import {ElementProps} from '../../utils/element-props'

const classPrefix = `am-space`

export type SpaceProps = {
  size?: string | [string, string]
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  wrap?: boolean
  block?: boolean
} & ElementProps

const Space: FC<SpaceProps> = props => {
  const {size = 'small', direction = 'horizontal'} = props
  let style: any = props.style ?? {}
  let sizeStyle: any
  if (props.size) {
    const [horizontalSize, verticalSize] = Array.isArray(size)
      ? size
      : [size, size]
    sizeStyle = {
      '--vertical-size': verticalSize,
      '--horizontal-size': horizontalSize,
    }
  }
  return (
    <div
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-wrap`]: props.wrap,
          [`${classPrefix}-block`]: props.block,
        },
        `${classPrefix}-${direction}`,
        props.align && `${classPrefix}-align-${props.align}`,
        props.className
      )}
      style={{
        ...sizeStyle,
        ...style,
      }}
    >
      {React.Children.map(props.children, child => {
        return <div className={`${classPrefix}-item`}>{child}</div>
      })}
    </div>
  )
}

export default Space
