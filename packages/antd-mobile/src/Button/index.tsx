import * as React from 'react'
import classnames from 'classnames'
import { Touchable, withError } from '../rmc'
import { useTracker, useCompleteLocale } from '../hooks'
import { renderIcon, getDataAttr } from '../_internal'
import { ButtonPropsType } from './PropsType'
import LoadingIcon from '../Loading/icon'
import '@ant-design/mobile-styles/lib/Button'

const prefixCls = 'amd-button'

export const Button: React.FC<ButtonPropsType> = props => {
  const {
    type,
    className,
    activeClassName,
    disabled,
    subTitle,
    capsule,
    capsuleSize,
    capsuleAutoWidth,
    onPress,
    icon,
    loading,
    loadingText,
  } = props
  const log = useTracker(Button.displayName, {
    type,
  })

  const lang = useCompleteLocale()

  const [cls, setCls] = React.useState({
    [`${prefixCls}`]: true,
    [`${prefixCls}-active`]: false,
  })

  const clsStr = classnames({
    ...cls,
    [`${prefixCls}-${type}`]: true,
    [`${className}`]: !!className,
    [`${prefixCls}-capsule ${prefixCls}-capsule-${capsuleSize}`]: capsule,
    [`${prefixCls}-capsule-auto-width`]: capsuleAutoWidth,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-subtitle`]: !!subTitle,
    [`${prefixCls}-icon`]: !!icon,
  })

  return (
    <Touchable
      onPressIn={() => {
        setCls({
          ...cls,
          [`${prefixCls}-active`]: true,
          [activeClassName!]: true,
        })
      }}
      onPressOut={() => {
        setCls({
          ...cls,
          [`${prefixCls}-active`]: false,
          [activeClassName!]: false,
        })
      }}
      onPress={e => {
        onPress && onPress(e)
        log('onPress')
      }}
      disabled={disabled}
    >
      <div
        {...getDataAttr(props)}
        className={clsStr}
        role="button"
        aria-disabled={disabled}
      >
        {loading && (
          <div className={`${prefixCls}-loading-container`}>
            <div className={`${prefixCls}-loading`}>
              <LoadingIcon />
            </div>
            <div className={`${prefixCls}-loading-text`}>
              {loadingText ?? lang.Button.loadingText}
            </div>
          </div>
        )}
        {!loading &&
          renderIcon(icon, {
            nodeClassName: `${prefixCls}-icon-self`,
          })}
        <span style={{ opacity: loading && !capsule ? 0 : 1 }}>
          {props.children}
          {subTitle && (
            <div className={`${prefixCls}-subtitle-subfont`}>{subTitle}</div>
          )}
        </span>
      </div>
    </Touchable>
  )
}

Button.displayName = 'Button'
Button.defaultProps = {
  className: '',
  activeClassName: '',
  type: 'default',
  disabled: false,
  capsule: false,
  subTitle: '',
  capsuleSize: 'md',
  capsuleAutoWidth: false,
  loading: false,
}

export default withError(Button)
