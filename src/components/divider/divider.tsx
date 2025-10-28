import React from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'

export type DividerProps = {
  contentPosition?: 'left' | 'right' | 'center'
  direction?: 'horizontal' | 'vertical'
  children?: ReactNode
  prefixCls?: string
} & NativeProps

const defaultProps = {
  contentPosition: 'center',
  direction: 'horizontal',
}

export const Divider: FC<DividerProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { getPrefixCls } = useConfig()
  const prefixCls = getPrefixCls('divider', props.prefixCls)
  return withNativeProps(
    props,
    <div
      className={classNames(
        prefixCls,
        `${prefixCls}-${props.direction}`,
        `${prefixCls}-${props.contentPosition}`
      )}
    >
      {props.children && (
        <div className={`${prefixCls}-content`}>{props.children}</div>
      )}
    </div>
  )
}
