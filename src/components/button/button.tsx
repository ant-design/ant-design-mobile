import React, { FC } from 'react'
import classNames from 'classnames'
import DotLoading from '../dot-loading'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-button`

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  fill?: 'solid' | 'outline' | 'none'
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  loading?: boolean
  loadingText?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type?: 'submit' | 'reset' | 'button'
  shape?: 'default' | 'rounded' | 'rectangular'
} & NativeProps<
  | '--text-color'
  | '--background-color'
  | '--border-radius'
  | '--border-width'
  | '--border-style'
  | '--border-color'
>

const defaultProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  type: 'button',
  shape: 'default',
  size: 'middle',
}

export const Button: FC<ButtonProps> = p => {
  const props = mergeProps(defaultProps, p)
  const disabled = props.disabled || props.loading
  return withNativeProps(
    props,
    <button
      type={props.type}
      onClick={props.onClick}
      className={classNames(
        classPrefix,
        props.color ? `${classPrefix}-${props.color}` : null,
        {
          [`${classPrefix}-block`]: props.block,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-fill-outline`]: props.fill === 'outline',
          [`${classPrefix}-fill-none`]: props.fill === 'none',
          [`${classPrefix}-mini`]: props.size === 'mini',
          [`${classPrefix}-small`]: props.size === 'small',
          [`${classPrefix}-large`]: props.size === 'large',
          [`${classPrefix}-loading`]: props.loading,
        },
        `${classPrefix}-shape-${props.shape}`
      )}
      disabled={disabled}
    >
      {props.loading ? (
        <div className={`${classPrefix}-loading-wrapper`}>
          <DotLoading color='currentColor' />
          {props.loadingText}
        </div>
      ) : (
        props.children
      )}
    </button>
  )
}
