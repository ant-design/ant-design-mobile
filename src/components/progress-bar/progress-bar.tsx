import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { isNodeWithContent } from '../../utils/is-node-with-content'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-progress-bar`

export type ProgressBarProps = {
  percent?: number
  rounded?: boolean
  text?: boolean | ReactNode | ((percent: number) => ReactNode)
} & NativeProps<
  '--track-width' | '--track-color' | '--fill-color' | '--text-width'
>

const defaultProps = {
  percent: 0,
  rounded: true,
  text: false,
}

export const ProgressBar: FC<ProgressBarProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const fillStyle = {
    width: `${mergedProps.percent}%`,
  }

  const textElement = (function () {
    if (mergedProps.text === true) {
      return `${mergedProps.percent}%`
    }
    if (typeof mergedProps.text === 'function') {
      return (mergedProps.text as (percent: number) => ReactNode)(
        mergedProps.percent
      )
    }
    return mergedProps.text
  })()

  return withNativeProps(
    mergedProps,
    <div
      className={classNames(
        classPrefix,
        mergedProps.rounded && `${classPrefix}-rounded`
      )}
    >
      <div className={`${classPrefix}-trail`}>
        <div className={`${classPrefix}-fill`} style={fillStyle} />
      </div>
      {isNodeWithContent(textElement) && (
        <div className={`${classPrefix}-text`}>{textElement}</div>
      )}
    </div>
  )
}
