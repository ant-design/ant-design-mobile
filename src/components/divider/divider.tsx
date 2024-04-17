import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-divider`

export type DividerProps = {
  contentPosition?: 'left' | 'right' | 'center'
  direction?: 'horizontal' | 'vertical'
  children?: ReactNode
} & NativeProps

const defaultProps = {
  contentPosition: 'center',
  direction: 'horizontal',
}

export const Divider: FC<DividerProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  return withNativeProps(
    mergedProps,
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-${mergedProps.direction}`,
        `${classPrefix}-${mergedProps.contentPosition}`
      )}
    >
      {mergedProps.children && (
        <div className={`${classPrefix}-content`}>{mergedProps.children}</div>
      )}
    </div>
  )
}
