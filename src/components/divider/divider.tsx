import React, { FC } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-divider`

export type DividerProps = {
  contentPosition?: 'left' | 'right' | 'center'
  type?: 'horizontal' | 'vertical'
} & NativeProps

const defaultProps = {
  contentPosition: 'center',
  type: 'horizontal',
}

export const Divider: FC<DividerProps> = p => {
  const props = mergeProps(defaultProps, p)
  return withNativeProps(
    props,
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-${props.type}`,
        `${classPrefix}-${props.contentPosition}`
      )}
    >
      {props.children && (
        <div className={`${classPrefix}-content`}>{props.children}</div>
      )}
    </div>
  )
}
