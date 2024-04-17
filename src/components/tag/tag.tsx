import classNames from 'classnames'
import type { CSSProperties, FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-tag`

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-text-secondary, #666666)',
  primary: 'var(--adm-color-primary, #1677ff)',
  success: 'var(--adm-color-success, #00b578)',
  warning: 'var(--adm-color-warning, #ff8f1f)',
  danger: 'var(--adm-color-danger, #ff3141)',
}

export type TagProps = {
  color?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | (string & {})
  fill?: 'solid' | 'outline'
  round?: boolean
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  children?: ReactNode
} & NativeProps<
  '--border-color' | '--background-color' | '--text-color' | '--border-radius'
>

const defaultProps = {
  color: 'default',
  fill: 'solid',
  round: false,
}

export const Tag: FC<TagProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const color = colorRecord[mergedProps.color] ?? mergedProps.color

  const style: CSSProperties & {
    '--border-color': string
    '--text-color': string
    '--background-color': string
  } = {
    '--border-color': color,
    '--text-color': mergedProps.fill === 'outline' ? color : '#ffffff',
    '--background-color':
      mergedProps.fill === 'outline' ? 'transparent' : color,
  }
  return withNativeProps(
    mergedProps,
    <span
      style={style}
      onClick={mergedProps.onClick}
      className={classNames(classPrefix, {
        [`${classPrefix}-round`]: mergedProps.round,
      })}
    >
      {mergedProps.children}
    </span>
  )
}
