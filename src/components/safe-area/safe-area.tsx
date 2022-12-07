import { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import React from 'react'
import classNames from 'classnames'

const classPrefix = 'adm-safe-area'

export type SafeAreaProps = {
  position: 'top' | 'bottom'
  fallback?: number
} & NativeProps

export const SafeArea: FC<SafeAreaProps> = props => {
  const fallbackStyle: React.CSSProperties & { '--fallback-height'?: string } =
    {
      ['--fallback-height']: `${props.fallback || 0}px`,
    }

  return withNativeProps(
    props,
    <div
      style={fallbackStyle}
      className={classNames(
        classPrefix,
        `${classPrefix}-position-${props.position}`
      )}
    />
  )
}
