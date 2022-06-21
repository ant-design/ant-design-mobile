import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'

const classPrefix = `adm-progress-bar`

export type ProgressBarProps = {
  percent?: number
  rounded?: boolean
} & NativeProps<'--track-width' | '--track-color' | '--fill-color'>

const defaultProps = {
  percent: 0,
  rounded: true,
}

export const ProgressBar: FC<ProgressBarProps> = p => {
  const props = mergeProps(defaultProps, p)
  const fillStyle = {
    width: `${props.percent}%`,
  }

  return withNativeProps(
    props,
    <div
      className={classNames(
        classPrefix,
        props.rounded && `${classPrefix}-rounded`
      )}
    >
      <div className={`${classPrefix}-trail`}>
        <div className={`${classPrefix}-fill`} style={fillStyle} />
      </div>
    </div>
  )
}
