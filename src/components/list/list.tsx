import classNames from 'classnames'
import type { ReactNode } from 'react'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'

export type ListProps = {
  header?: ReactNode
  mode?: 'default' | 'card' // 默认是整宽的列表，card 模式下展示为带 margin 和圆角的卡片
  children?: ReactNode
  prefixCls?: string
} & NativeProps<
  | '--active-background-color'
  | '--align-items'
  | '--border-bottom'
  | '--border-inner'
  | '--border-top'
  | '--extra-max-width'
  | '--font-size'
  | '--header-font-size'
  | '--padding-left'
  | '--padding-right'
  | '--prefix-padding-right'
  | '--prefix-width'
>

const defaultProps = {
  mode: 'default',
}

export type ListRef = {
  nativeElement: HTMLDivElement | null
}

export const List = forwardRef<ListRef, ListProps>((p, ref) => {
  const props = mergeProps(defaultProps, p)
  const { getPrefixCls } = useConfig()
  const prefixCls = getPrefixCls('list', props.prefixCls)
  const nativeElementRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeElementRef.current
    },
  }))

  return withNativeProps(
    props,
    <div
      className={classNames(prefixCls, `${prefixCls}-${props.mode}`)}
      ref={nativeElementRef}
    >
      {props.header && (
        <div className={`${prefixCls}-header`}>{props.header}</div>
      )}
      <div className={`${prefixCls}-body`}>
        <div className={`${prefixCls}-body-inner`}>{props.children}</div>
      </div>
    </div>
  )
})
