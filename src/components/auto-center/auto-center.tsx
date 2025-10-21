import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useConfig } from '../config-provider'

export type AutoCenterProps = {
  children?: ReactNode
  prefixCls?: string
} & NativeProps

export const AutoCenter: FC<AutoCenterProps> = props => {
  const { getPrefixCls } = useConfig()
  const prefixCls = getPrefixCls('auto-center', props.prefixCls)
  return withNativeProps(
    props,
    <div className={prefixCls}>
      <div className={`${prefixCls}-content`}>{props.children}</div>
    </div>
  )
}
