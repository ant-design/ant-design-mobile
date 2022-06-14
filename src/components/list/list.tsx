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
