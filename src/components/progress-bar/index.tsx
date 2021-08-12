import classNames from 'classnames'
import React from 'react'
import { convertPx } from '../../utils/convert-px'
import { ElementProps } from '../../utils/element-props'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `am-progress-bar`

export type ProgressBarProps = {
  percent?: number
  strokeWidth?: number
  strokeColor?: string
} & ElementProps

const ProgressBar = withDefaultProps({
  percent: 0,
  strokeColor: '#1677FF',
})<ProgressBarProps>(props => {
  let { strokeWidth } = props
  if (strokeWidth === undefined) {
    strokeWidth = convertPx(3)
  }

  const trailStyle = {
    height: `${strokeWidth}px`,
    borderRadius: `${strokeWidth / 2}px`,
    background: '#e5e5e5',
  }

  const pathStyle = {
    height: `${strokeWidth}px`,
    borderRadius: `${strokeWidth / 2}px`,
    width: `${props.percent}%`,
    background: props.strokeColor,
    transition: 'width 0.3s',
  }

  return (
    <div
      className={classNames(classPrefix, props.className)}
      style={props.style}
    >
      <div className={`${classPrefix}-trail`} style={trailStyle}>
        <div className={classNames(`${classPrefix}-path`)} style={pathStyle} />
      </div>
    </div>
  )
})

export default ProgressBar
