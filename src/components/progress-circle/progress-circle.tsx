import type { CSSProperties, FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-progress-circle`

export type ProgressCircleProps = {
  percent?: number
  children?: ReactNode
} & NativeProps<'--size' | '--track-width' | '--track-color' | '--fill-color'>

export const ProgressCircle: FC<ProgressCircleProps> = props => {
  const mergedProps = mergeProps({ percent: 0 }, props)
  const style: CSSProperties & Record<'--percent', string> = {
    '--percent': mergedProps.percent.toString(),
  }
  return withNativeProps(
    mergedProps,
    <div className={`${classPrefix}`} style={style}>
      <div className={`${classPrefix}-content`}>
        <svg className={`${classPrefix}-svg`}>
          <circle className={`${classPrefix}-track`} fill='transparent' />
          <circle className={`${classPrefix}-fill`} fill='transparent' />
        </svg>
        <div className={`${classPrefix}-info`}>{mergedProps.children}</div>
      </div>
    </div>
  )
}
