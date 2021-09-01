import React, { FC } from 'react'
import classNames from 'classnames'
import Loading from '../loading'
import { getNativeAttributes } from '../../utils/get-native-attributes'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-button`

export interface ButtonProps {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  fill?: 'solid' | 'outline' | 'none'
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  loading?: boolean
  loadingText?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
  style?: React.CSSProperties
  type?: 'submit' | 'reset' | 'button'
}

const defaultProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  type: 'button',
}

export const Button: FC<ButtonProps> = p => {
  const props = mergeProps(defaultProps, p)
  const disabled = props.disabled
  return (
    <button
      {...getNativeAttributes(props)}
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
        props.className
      )}
      style={props.style}
      disabled={disabled}
    >
      {props.loading ? (
        <>
          <div className={`${classPrefix}-loading-wrapper`}>
            <Loading color='currentColor' size={props.size} />
            {props.loadingText}
          </div>
        </>
      ) : (
        props.children
      )}
    </button>
  )
}
