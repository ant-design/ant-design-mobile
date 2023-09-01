import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-text`

export type TextProps = {
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'weak'
    | 'light'
  strong?: boolean
  italic?: boolean
  children?: ReactNode
} & NativeProps<
  '--font-size' | '--line-height' | '--color' | '--font-weight-strong'
>

const defaultProps: TextProps = {
  color: 'default',
  strong: false,
  italic: false,
}

export const Text: FC<TextProps> = p => {
  const props = mergeProps(defaultProps, p)

  return withNativeProps(
    props,
    <span
      className={classNames(classPrefix, `${classPrefix}-${props.color}`, {
        [`${classPrefix}-strong`]: props.strong,
        [`${classPrefix}-italic`]: props.italic,
      })}
    >
      {props.children}
    </span>
  )
}
