import * as React from 'react'
import classnames from 'classnames'
import Touchable from '../TouchFeedback'

export interface PropsType {
  prefixCls: string
  disabled?: boolean
  onPressIn: (e: any) => void
  onPressOut: (e: any) => void
  role?: string
  className?: string
}

const InputHandler: React.FC<PropsType> = props => {
  const {
    prefixCls,
    className,
    disabled,
    onPressIn,
    onPressOut,
    ...otherProps
  } = props
  return (
    <Touchable
      disabled={disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeClassName={`${prefixCls}-handler-active`}
    >
      <span
        {...otherProps}
        onClick={e => {
          e.preventDefault()
        }}
        className={classnames(`${prefixCls}-handler`, className, {
          [`${prefixCls}-handler-disabled`]: disabled,
        })}
        style={{ touchAction: 'none', userSelect: 'none' }}
        onContextMenu={e => e.preventDefault()}
      />
    </Touchable>
  )
}

export default InputHandler
