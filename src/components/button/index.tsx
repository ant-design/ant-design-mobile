import React, {FC} from 'react'
import classNames from 'classnames'
import Loading from '../loading'

const classPrefix = `am-button`

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

const Button: FC<ButtonProps> = props => {
  const disabled = props.disabled || props.loading
  return (
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

Button.defaultProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  type: 'button',
}

export default Button
