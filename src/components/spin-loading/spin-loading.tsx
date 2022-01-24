import React, { memo } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = 'adm-spin-loading'

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
}

export type SpinLoadingProps = {
  color?: 'default' | 'primary' | 'white' | (string & {})
} & NativeProps<'--color' | '--size' | '--track-width'>

const defaultProps = {
  color: 'default',
}

export const SpinLoading = memo<SpinLoadingProps>(p => {
  const props = mergeProps(defaultProps, p)
  return withNativeProps(
    props,
    <div
      className={classPrefix}
      style={
        {
          '--color': colorRecord[props.color] ?? props.color,
        } as any
      }
    >
      <svg className={`${classPrefix}-svg`}>
        <circle className={`${classPrefix}-fill`} fill='transparent' />
      </svg>
    </div>
  )
})
