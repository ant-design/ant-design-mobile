import { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import React from 'react'
import classNames from 'classnames'

const classPrefix = 'adm-safe-area'

export type SafeAreaProps = {
  position: 'top' | 'bottom'
} & NativeProps

export const SafeArea: FC<SafeAreaProps> = props => {
  return withNativeProps(
    props,
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-position-${props.position}`
      )}
    />
  )
}
