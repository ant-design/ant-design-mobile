import classNames from 'classnames'
import React from 'react'
import { convertPx } from '../../utils/convert-px'
import { ElementProps } from '../../utils/element-props'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `am-progress-bar`

export type ProgressBarProps = {
  percent?: number
  showPercent?: boolean
  strokeWidth?: number
  strokeColor?: string
} & ElementProps

export const ProgressBar = withDefaultProps({
  percent: 0,
  strokeColor: '#1677FF',
  showPercent: false,
})<ProgressBarProps>(props => {
  let { strokeWidth } = props
  if (strokeWidth === undefined) {
    strokeWidth = convertPx(3)
  }

  const trailStyle = {
    width: '100%',
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

  const percentStyle = {
    marginLeft: '12px',
    lineHeight: `${strokeWidth}px`,
    color: props.strokeColor,
  }
  return (
    <div
      className={classNames(classPrefix, props.className)}
      style={{ display: 'flex' }}
    >
      <div className={`${classPrefix}-trail`} style={trailStyle}>
        <div className={classNames(`${classPrefix}-path`)} style={pathStyle} />
      </div>
      {props.showPercent && (
        <div
          className={classNames(`${classPrefix}-percent`)}
          style={percentStyle}
        >
          {props.percent + '%'}
        </div>
      )}
    </div>
  )
})
