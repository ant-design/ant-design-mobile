import classnames from 'classnames'
import * as React from 'react'
import { Close, Right, Voice, Help } from '@ant-design/mobile-icons'
import Marquee from './Marquee'
import {
  NoticeBarPropsType,
  NoticeCapsulePropsType,
  NoticeTipPropsType,
} from './PropsType'
import { Touchable, withError } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker } from '../hooks'
import '@ant-design/mobile-styles/lib/NoticeBar'

function transAnimateSpeedToFps(
  speed: NoticeBarPropsType['animateSpeed'],
): number {
  if (typeof speed === 'number') {
    return Math.floor(1 / (speed / 1000))
  }

  switch (speed) {
    case 'slow':
      return 25
    case 'normal':
      return 40
    case 'fast':
      return 55
  }

  return 40
}

const NoticeCapsule: React.FC<NoticeCapsulePropsType> = props => {
  const { type, className, onPress, items } = props

  const cls = classnames('amd-notice-bar', 'amd-notice-bar-capsule', className)
  return (
    <Touchable onPress={onPress}>
      <div {...getDataAttr(props)} className="amd-notice-bar-capsule-wrap">
        <div className={cls}>
          {items!.length > 0 ? (
            <div className="amd-notice-bar-capsule-item">
              {items!.map(src => {
                return (
                  <img
                    className="amd-notice-bar-capsule-img"
                    key={src}
                    src={src}
                  />
                )
              })}
            </div>
          ) : (
            ''
          )}
          <div className="amd-notice-bar-capsule-content">{props.children}</div>
        </div>
      </div>
    </Touchable>
  )
}
NoticeCapsule.displayName = 'NoticeCapsule'
NoticeCapsule.defaultProps = {
  type: 'normal',
  items: [],
}

const NoticeTip: React.FC<NoticeTipPropsType> = props => {
  const { type, className, onPress } = props

  const cls = classnames(
    'amd-notice-bar',
    'amd-notice-bar-tip',
    className,
    type === 'normal' ? '' : 'amd-notice-bar-' + type,
  )

  return (
    <Touchable onPress={onPress}>
      <div {...getDataAttr(props)} className="amd-notice-bar-tip-wrap">
        <div className={cls}>{props.children}</div>
      </div>
    </Touchable>
  )
}
NoticeTip.displayName = 'NoticeTip'
NoticeTip.defaultProps = {
  type: 'normal',
}
const Notice: React.FC<NoticeBarPropsType> = props => {
  const {
    className,
    mode,
    action,
    actionLeft,
    // 这个在 defaultProps 里居然跑不起来
    icon = <Voice size="sm" />,
    onPress,
    children,
    type,
    animateLoop,
    animateSpeed,
  } = props
  useTracker(NoticeBar.displayName)

  const [isShow, updateShow] = React.useState<boolean>(true)

  const wrapCls = classnames(
    'amd-notice-bar',
    'amd-notice-bar' + '-' + type,
    className,
  )

  let operationDom: any = null
  // notice需要支持Icon组件的支持
  switch (mode) {
    case 'closable':
      operationDom = (
        <Touchable
          onPress={() => {
            updateShow(false)
          }}
        >
          <div
            className="amd-notice-bar-operation"
            role="button"
            aria-label="close"
          >
            <span className="amd-notice-bar-operation-left">
              {actionLeft ? actionLeft : ''}
            </span>
            {action ? action : <Close size="sm" />}
          </div>
        </Touchable>
      )
      break
    case 'link':
      operationDom = (
        <div
          className="amd-notice-bar-operation"
          role="button"
          aria-label="go to detail"
        >
          <span className="amd-notice-bar-operation-left">
            {actionLeft ? actionLeft : ''}
          </span>
          {action ? action : <Right size="sm" />}
        </div>
      )
      break
  }

  const showIcon =
    icon || icon === null ? (
      icon
    ) : type === 'error' ? (
      <Help size="sm" />
    ) : (
      <Voice size="sm" />
    )

  return isShow ? (
    <Touchable onPress={onPress}>
      <div {...getDataAttr(props)} className={wrapCls} role="alert">
        {showIcon && (
          // tslint:disable-next-line:jsx-no-multiline-js
          <div className="amd-notice-bar-icon" aria-hidden="true">
            {showIcon}
          </div>
        )}
        <div className="amd-notice-bar-content">
          <Marquee
            text={children as string}
            fps={transAnimateSpeedToFps(animateSpeed)}
            loop={animateLoop}
          />
        </div>
        {operationDom}
      </div>
    </Touchable>
  ) : null
}

Notice.displayName = 'Notice'
Notice.defaultProps = {
  type: 'normal',
  animateSpeed: 'normal',
}

export const NoticeBar: React.FC<NoticeBarPropsType &
  NoticeCapsulePropsType &
  NoticeTipPropsType & { capsule?: boolean; tip?: boolean }> = props => {
  return props.capsule ? (
    <NoticeCapsule {...props} />
  ) : props.tip ? (
    <NoticeTip {...props} />
  ) : (
    <Notice {...props} />
  )
}
NoticeBar.displayName = 'NoticeBar'
NoticeBar.defaultProps = {
  capsule: false,
  tip: false,
}

export default withError(NoticeBar)
