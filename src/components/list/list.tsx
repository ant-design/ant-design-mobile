import classNames from 'classnames'
import type { ReactNode } from 'react'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-list`

export type ListProps = {
  header?: ReactNode
  mode?: 'default' | 'card' // 默认是整宽的列表，card 模式下展示为带 margin 和圆角的卡片
  children?: ReactNode
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

export const List = forwardRef<ListRef, ListProps>((props, ref) => {
  const mergedProps = mergeProps(defaultProps, props)
  const nativeElementRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeElementRef.current
    },
  }))

  return withNativeProps(
    mergedProps,
    <div
      className={classNames(classPrefix, `${classPrefix}-${mergedProps.mode}`)}
      ref={nativeElementRef}
    >
      {mergedProps.header && (
        <div className={`${classPrefix}-header`}>{mergedProps.header}</div>
      )}
      <div className={`${classPrefix}-body`}>
        <div className={`${classPrefix}-body-inner`}>
          {mergedProps.children}
        </div>
      </div>
    </div>
  )
})
