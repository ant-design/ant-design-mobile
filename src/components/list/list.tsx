import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-list`

export type ListProps = {
  header?: ReactNode
  mode?: 'default' | 'card' // 默认是整宽的列表，card 模式下展示为带 margin 和圆角的卡片
  children?: ReactNode
} & NativeProps<
  | '--header-font-size'
  | '--prefix-width'
  | '--prefix-padding-right'
  | '--align-items'
  | '--active-background-color'
  | '--border-inner'
  | '--border-top'
  | '--border-bottom'
  | '--padding-left'
  | '--padding-right'
  | '--font-size'
>

const defaultProps = {
  mode: 'default',
}

export const List: FC<ListProps> = p => {
  const props = mergeProps(defaultProps, p)
  return withNativeProps(
    props,
    <div className={classNames(classPrefix, `${classPrefix}-${props.mode}`)}>
      {props.header && (
        <div className={`${classPrefix}-header`}>{props.header}</div>
      )}
      <div className={`${classPrefix}-body`}>
        <div className={`${classPrefix}-body-inner`}>{props.children}</div>
      </div>
    </div>
  )
}
