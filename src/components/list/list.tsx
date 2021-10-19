import React, { FC } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-list`

export type ListProps = {
  mode?: 'default' | 'card' // 默认是整宽的列表，card 模式下展示为带 margin 和圆角的卡片
} & NativeProps<
  '--prefix-width' | '--align-items' | '--active-background-color'
>

const defaultProps = {
  mode: 'default',
}

export const List: FC<ListProps> = p => {
  const props = mergeProps(defaultProps, p)
  return withNativeProps(
    props,
    <div className={classNames(classPrefix, `${classPrefix}-${props.mode}`)}>
      <div className={`${classPrefix}-inner`}>{props.children}</div>
    </div>
  )
}
