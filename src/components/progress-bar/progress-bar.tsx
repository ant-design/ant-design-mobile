import classNames from 'classnames'
import React from 'react'
import { convertPx } from '../../utils/convert-px'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `adm-progress-bar`

export type ProgressBarProps = {
  percent?: number
  strokeWidth?: number
  strokeColor?: string
} & NativeProps

export const ProgressBar = withDefaultProps({
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

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <div className={`${classPrefix}-trail`} style={trailStyle}>
        <div className={classNames(`${classPrefix}-path`)} style={pathStyle} />
      </div>
    </div>
  )
})
