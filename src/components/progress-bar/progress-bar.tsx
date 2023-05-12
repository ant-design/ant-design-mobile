import React, { FC, ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import classNames from 'classnames'
import { isNodeWithContent } from '../../utils/is-node-with-content'

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

export const ProgressBar: FC<ProgressBarProps> = p => {
  const props = mergeProps(defaultProps, p)
  const fillStyle = {
    width: `${props.percent}%`,
  }

  const textElement = (function () {
    if (props.text === true) {
      return `${props.percent}%`
    }
    if (typeof props.text === 'function') {
      return (props.text as (percent: number) => ReactNode)(props.percent)
    }
    return props.text
  })()

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
      {isNodeWithContent(textElement) && (
        <div className={`${classPrefix}-text`}>{textElement}</div>
      )}
    </div>
  )
}
