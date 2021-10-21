import React, { CSSProperties } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `adm-progress-circle`

export type ProgressCircleProps = {
  percent?: number
  strokeWidth?: number
  size?: number
  strokeColor?: string
  children?: React.ReactNode
} & NativeProps<'--track-width' | '--size' | '--track-color' | '--fill-color'>

export const ProgressCircle = withDefaultProps({
  percent: 0,
  strokeColor: '#1677FF',
})<ProgressCircleProps>(props => {
  const style: CSSProperties & Record<'--percent', string> = {
    '--percent': props.percent.toString(),
  }
  return withNativeProps(
    props,
    <div className={`${classPrefix}`} style={style}>
      <div className={`${classPrefix}-content`}>
        <svg className={`${classPrefix}-svg`}>
          <circle className={`${classPrefix}-track`} fill='transparent' />
          <circle className={`${classPrefix}-fill`} fill='transparent' />
        </svg>
        <div className={`${classPrefix}-info`}>{props.children}</div>
      </div>
    </div>
  )
})
