import * as React from 'react'
import classnames from 'classnames'
import { getDataAttr, renderIcon } from '../_internal'
import { TipsPropsType } from './PropsType'
import { CloseOutline } from '@ant-design/mobile-icons'
import { Touchable, withError } from '../rmc'
import { useTracker } from '../hooks'

import '@ant-design/mobile-styles/lib/Tips'

const prefixCls = 'amd-tips'
const Tips: React.FC<TipsPropsType> = props => {
  const {
    content,
    opText,
    icon,
    show = false,
    className,
    showClose = false,
    onButtonPress,
    onClosePress,
    offset,
  } = props || {}
  useTracker(Tips.displayName)

  if (!show) {
    return null
  }
  const dataProps = getDataAttr(props)
  const classList = classnames({
    [`${prefixCls}`]: true,
    [`${className}`]: !!className,
  })
  function onClickClose() {
    onClosePress?.()
  }
  function onClickOp() {
    onButtonPress?.()
  }

  return (
    <>
      <div className={classList} {...dataProps}>
        <div className={`${prefixCls}-content-wrap`}>
          {icon ? (
            <div className={`${prefixCls}-icon`}>{renderIcon(icon)}</div>
          ) : null}
          <div className={`${prefixCls}-content`}>{content || ''}</div>
          {opText ? (
            <Touchable onPress={onClickOp}>
              <div className={`${prefixCls}-operation`}>{opText}</div>
            </Touchable>
          ) : null}
        </div>
        {showClose ? (
          <Touchable onPress={onClickClose}>
            <div className={`${prefixCls}-close-wrap`}>
              <div className={`${prefixCls}-close`}>
                <CloseOutline color="rgba(255, 255, 255, 0.6)" />
              </div>
            </div>
          </Touchable>
        ) : null}
        {offset ? (
          <div
            className={`${prefixCls}-arrow ${prefixCls}-arrow-${offset}`}
          ></div>
        ) : null}
      </div>
    </>
  )
}
Tips.displayName = 'Tips'

export default withError(Tips)
