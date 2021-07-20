import React from 'react'
import {Circle as RCProgressCircle} from 'rc-progress'
import classNames from 'classnames'
import {ElementProps} from '../../utils/element-props'
import {withDefaultProps} from '../../utils/with-default-props'
import {convertPx} from '../../utils/convert-px'

const classPrefix = `am-progress`

export type ProgressCircleProps = {
  percent?: number
  strokeWidth?: number
  size?: number
  strokeColor?: string
  children?: React.ReactNode
} & ElementProps

const ProgressCircle = withDefaultProps({
  percent: 0,
  strokeWidth: convertPx(6),
  size: convertPx(50),
  strokeColor: '#1677FF',
})<ProgressCircleProps>(props => {
  const contentStyle = {
    width: `${props.size}px`,
    height: `${props.size}px`,
  }

  return (
    <div
      className={classNames(`${classPrefix}-circle-wrap`, props.className)}
      style={props.style}
    >
      <div className={`${classPrefix}-circle-content`} style={contentStyle}>
        <RCProgressCircle
          prefixCls={classPrefix}
          percent={props.percent}
          strokeWidth={props.strokeWidth}
          trailWidth={props.strokeWidth}
          trailColor='#E5E5E5'
          strokeColor={props.strokeColor}
        />
        <div className={`${classPrefix}-circle-info`}>{props.children}</div>
      </div>
    </div>
  )
})

export default ProgressCircle
