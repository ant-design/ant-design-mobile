import * as React from 'react'
import classnames from 'classnames'
import { RightOutline } from '@ant-design/mobile-icons'
import { BriefPropsType, ListItemPropsType } from './PropsType'
import { Touchable } from '../rmc'
import { renderIcon, getDataAttr } from '../_internal'

export const Brief: React.FC<BriefPropsType> = props => {
  if (!props.children) {
    return null
  }
  return (
    <div className={classnames('amd-list-brief', props.className)}>
      {props.children}
    </div>
  )
}

Brief.displayName = 'Brief'

const prefixCls = 'amd-list'

export const Item: React.FC<ListItemPropsType> = props => {
  const {
    className,
    error,
    align,
    wrap,
    disabled,
    children,
    brief,
    thumb,
    extra,
    arrow,
    platform,
    onPress,
  } = props

  const [ripple, setRipple] = React.useState({
    coverRippleStyle: {
      display: 'none',
    } as React.CSSProperties,
    RippleClicked: false,
  })

  const [isActive, setIsActive] = React.useState(false)

  const debounceTimeout = React.useRef<any>(null)

  React.useEffect(() => {
    if (ripple.RippleClicked) {
      debounceTimeout.current = setTimeout(() => {
        setRipple({
          coverRippleStyle: { display: 'none' },
          RippleClicked: false,
        })
      }, 1000)
    }

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
        debounceTimeout.current = null
      }
    }
  }, [ripple])
  const { RippleClicked, coverRippleStyle } = ripple

  const handlePress = (ev: React.MouseEvent<HTMLDivElement> | any) => {
    const isAndroid = platform === 'android'
    if (!!onPress && isAndroid) {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
        debounceTimeout.current = null
      }
      const Item = ev.currentTarget
      const RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth)
      const ClientRect = ev.currentTarget.getBoundingClientRect()
      const pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2
      const pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2
      const coverRippleStyle = {
        width: `${RippleWidth}px`,
        height: `${RippleWidth}px`,
        left: `${pointX}px`,
        top: `${pointY}px`,
      }

      setRipple({
        coverRippleStyle,
        RippleClicked: true,
      })
    }

    onPress?.(ev)
  }

  const wrapCls = classnames(`${prefixCls}-item`, className, {
    [`${prefixCls}-item-disabled`]: disabled,
    [`${prefixCls}-item-error`]: error,
    [`${prefixCls}-item-top`]: align === 'top',
    [`${prefixCls}-item-middle`]: align === 'middle',
    [`${prefixCls}-item-bottom`]: align === 'bottom',

    [`${prefixCls}-item-active`]: isActive,
  })

  const rippleCls = classnames(`${prefixCls}-ripple`, {
    [`${prefixCls}-ripple-animate`]: RippleClicked,
  })

  const lineCls = classnames(`${prefixCls}-line`, {
    [`${prefixCls}-line-wrap`]: wrap,
  })

  const arrowCls = classnames(`${prefixCls}-arrow`, {
    [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
    [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
    [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
  })

  const thumbCls = classnames(`${prefixCls}-thumb`, {
    [`${prefixCls}-thumb-brief`]: !!brief,
  })

  const content = (
    <div {...getDataAttr(props)} className={wrapCls}>
      {thumb ? (
        <div className={thumbCls}>
          {typeof thumb === 'string' ? (
            <img src={thumb} />
          ) : (
            renderIcon(thumb, {
              iconClassName: `${prefixCls}-item-icon`,
            })
          )}
        </div>
      ) : null}
      <div className={lineCls}>
        {children !== undefined && (
          <div className={`${prefixCls}-content`}>
            {children}
            {brief && <Brief>{brief}</Brief>}
          </div>
        )}
        {extra !== undefined && (
          <div className={`${prefixCls}-extra`}>{extra}</div>
        )}
        {arrow && (
          <RightOutline size="xs" className={arrowCls} aria-hidden="true" />
        )}
      </div>
      <div style={coverRippleStyle} className={rippleCls} />
    </div>
  )

  return (
    <Touchable
      onPressIn={() => {
        setIsActive(true)
      }}
      onPressOut={() => {
        setIsActive(false)
      }}
      disabled={disabled || !onPress}
      onPress={handlePress}
    >
      {content}
    </Touchable>
  )
}

Item.displayName = 'Item'
Item.defaultProps = {
  align: 'middle',
  error: false,
  wrap: false,
  platform: 'ios',
}

export default Item
