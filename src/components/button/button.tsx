import classNames from 'classnames'
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  ReactNode,
} from 'react'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { isPromise } from '../../utils/validate'
import { mergeProps } from '../../utils/with-default-props'
import DotLoading from '../dot-loading'

const classPrefix = `adm-button`

type NativeButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  fill?: 'solid' | 'outline' | 'none'
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  loading?: boolean | 'auto'
  loadingText?: string
  loadingIcon?: ReactNode
  disabled?: boolean
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void>
  type?: 'submit' | 'reset' | 'button'
  shape?: 'default' | 'rounded' | 'rectangular'
  children?: ReactNode
} & Pick<
  NativeButtonProps,
  'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd' | 'id'
> &
  NativeProps<
    | '--text-color'
    | '--background-color'
    | '--border-radius'
    | '--border-width'
    | '--border-style'
    | '--border-color'
  >

export type ButtonRef = {
  nativeElement: HTMLButtonElement | null
}

const defaultProps: ButtonProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  loadingIcon: <DotLoading color='currentColor' />,
  type: 'button',
  shape: 'default',
  size: 'middle',
}

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const mergedProps = mergeProps(defaultProps, props)
  const [innerLoading, setInnerLoading] = useState(false)
  const nativeButtonRef = useRef<HTMLButtonElement>(null)
  const loading =
    mergedProps.loading === 'auto' ? innerLoading : mergedProps.loading
  const disabled = mergedProps.disabled || loading

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return nativeButtonRef.current
    },
  }))

  const handleClick: MouseEventHandler<HTMLButtonElement> = async e => {
    if (!mergedProps.onClick) return

    const promise = mergedProps.onClick(e)

    if (isPromise(promise)) {
      try {
        setInnerLoading(true)
        await promise
        setInnerLoading(false)
      } catch (e) {
        setInnerLoading(false)
        throw e
      }
    }
  }

  return withNativeProps(
    mergedProps,
    <button
      ref={nativeButtonRef}
      type={mergedProps.type}
      onClick={handleClick}
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-${mergedProps.color}`]: mergedProps.color,
          [`${classPrefix}-block`]: mergedProps.block,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-fill-outline`]: mergedProps.fill === 'outline',
          [`${classPrefix}-fill-none`]: mergedProps.fill === 'none',
          [`${classPrefix}-mini`]: mergedProps.size === 'mini',
          [`${classPrefix}-small`]: mergedProps.size === 'small',
          [`${classPrefix}-large`]: mergedProps.size === 'large',
          [`${classPrefix}-loading`]: loading,
        },
        `${classPrefix}-shape-${mergedProps.shape}`
      )}
      disabled={disabled}
      onMouseDown={mergedProps.onMouseDown}
      onMouseUp={mergedProps.onMouseUp}
      onTouchStart={mergedProps.onTouchStart}
      onTouchEnd={mergedProps.onTouchEnd}
    >
      {loading ? (
        <div className={`${classPrefix}-loading-wrapper`}>
          {mergedProps.loadingIcon}
          {mergedProps.loadingText}
        </div>
      ) : (
        <span>{mergedProps.children}</span>
      )}
    </button>
  )
})
