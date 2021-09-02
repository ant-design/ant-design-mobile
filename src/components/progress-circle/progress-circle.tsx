import React from 'react'
import { Circle as RCProgressCircle } from 'rc-progress'
import classNames from 'classnames'
import { ElementProps, withElementProps } from '../../utils/element-props'
import { withDefaultProps } from '../../utils/with-default-props'
import { convertPx } from '../../utils/convert-px'

const classPrefix = `adm-progress`

export type ProgressCircleProps = {
  percent?: number
  strokeWidth?: number
  size?: number
  strokeColor?: string
  children?: React.ReactNode
} & ElementProps

export const ProgressCircle = withDefaultProps({
  percent: 0,
  strokeColor: '#1677FF',
})<ProgressCircleProps>(props => {
  let { strokeWidth, size } = props
  if (strokeWidth === undefined) {
    strokeWidth = convertPx(6)
  }
  if (size === undefined) {
    size = convertPx(50)
  }

  const contentStyle = {
    width: `${size}px`,
    height: `${size}px`,
  }

  return withElementProps(
    props,
    <div className={`${classPrefix}-circle-wrap`}>
      <div className={`${classPrefix}-circle-content`} style={contentStyle}>
        <RCProgressCircle
          prefixCls={classPrefix}
          percent={props.percent}
          strokeWidth={strokeWidth}
          trailWidth={strokeWidth}
          trailColor='#E5E5E5'
          strokeColor={props.strokeColor}
        />
        <div className={`${classPrefix}-circle-info`}>{props.children}</div>
      </div>
    </div>
  )
})
