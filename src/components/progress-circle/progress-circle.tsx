import React, { CSSProperties, FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-progress-circle`

export type ProgressCircleProps = {
  percent?: number
  children?: React.ReactNode
} & NativeProps<'--size' | '--track-width' | '--track-color' | '--fill-color'>

export const ProgressCircle: FC<ProgressCircleProps> = p => {
  const props = mergeProps({ percent: 0, strokeColor: '#1677FF' }, p)
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
}
