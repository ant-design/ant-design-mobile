import React, { memo } from 'react'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-loading`

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
}

export interface LoadingProps {
  size?: 'mini' | 'small' | 'middle' | 'large'
  color?: 'default' | 'primary' | 'white' | string
}

const defaultProps = {
  size: 'middle',
  color: 'default',
}

export const Loading = memo<LoadingProps>(p => {
  const props = mergeProps(defaultProps, p)
  const style: any = {
    '--color': colorRecord[props.color] ?? props.color,
  }
  return (
    <div
      style={style}
      className={classNames(classPrefix, `${classPrefix}-${props.size}`)}
    >
      <div className={`${classPrefix}-dot`} />
      <div className={`${classPrefix}-dot`} />
      <div className={`${classPrefix}-dot`} />
    </div>
  )
})
