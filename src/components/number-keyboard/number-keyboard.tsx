import { useMemoizedFn } from 'ahooks'
import { DownOutline, TextDeletionOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import type { FC, MouseEvent, TouchEvent } from 'react'
import React, { useMemo, useRef } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { shuffle } from '../../utils/shuffle'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import Popup, { PopupProps } from '../popup'
import SafeArea from '../safe-area'

const classPrefix = 'adm-number-keyboard'

export type NumberKeyboardProps = {
  visible?: boolean
  title?: string
  confirmText?: string | null
  customKey?: string | [string, string]
  randomOrder?: boolean
  showCloseButton?: boolean
  onInput?: (v: string) => void
  onDelete?: () => void
  onClose?: () => void
  onConfirm?: () => void
  closeOnConfirm?: boolean
  safeArea?: boolean
} & Pick<
  PopupProps,
  | 'afterClose'
  | 'afterShow'
  | 'getContainer'
  | 'destroyOnClose'
  | 'forceRender'
  | 'stopPropagation'
> &
  NativeProps<'--adm-safe-area-multiple'>

const defaultProps = {
  defaultVisible: false,
  randomOrder: false,
  showCloseButton: true,
  confirmText: null,
  closeOnConfirm: true,
  safeArea: true,
  destroyOnClose: false,
  forceRender: false,
}

export const NumberKeyboard: FC<NumberKeyboardProps> = p => {
  const props = mergeProps(defaultProps, p)
  const {
    visible,
    title,
    getContainer,
    confirmText,
    customKey,
    randomOrder,
    showCloseButton,
    onInput,
  } = props

  const { locale } = useConfig()

  const keyboardRef = useRef<HTMLDivElement | null>(null)

  const keys = useMemo(() => {
    const defaultKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const keyList = randomOrder ? shuffle(defaultKeys) : defaultKeys
    const customKeys = Array.isArray(customKey) ? customKey : [customKey]
    keyList.push('0')
    if (confirmText) {
      if (customKeys.length === 2) {
        keyList.splice(9, 0, customKeys.pop())
      }
      keyList.push(customKeys[0] || '')
    } else {
      keyList.splice(9, 0, customKeys[0] || '')
      keyList.push(customKeys[1] || 'BACKSPACE')
    }
    return keyList
  }, [customKey, confirmText, randomOrder, randomOrder && visible])

  const timeoutRef = useRef(-1)
  const intervalRef = useRef(-1)

  const onDelete = useMemoizedFn(() => {
    props.onDelete?.()
  })

  const startContinueClear = () => {
    timeoutRef.current = window.setTimeout(() => {
      onDelete()
      intervalRef.current = window.setInterval(onDelete, 150)
    }, 700)
  }
  const stopContinueClear = () => {
    clearTimeout(timeoutRef.current)
    clearInterval(intervalRef.current)
  }

  const onKeyPress = (
    e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>,
    key: string
  ) => {
    switch (key) {
      case 'BACKSPACE':
        onDelete?.()
        break
      case 'OK':
        props.onConfirm?.()
        if (props.closeOnConfirm) {
          props.onClose?.()
        }
        break
      default:
        // onInput should't be called when customKey doesn't exist
        if (key !== '') onInput?.(key)
        break
    }
  }

  const renderHeader = () => {
    if (!showCloseButton && !title) return null
    return (
      <div
        className={classNames(`${classPrefix}-header`, {
          [`${classPrefix}-header-with-title`]: !!title,
        })}
      >
        {!!title && (
          <div className={`${classPrefix}-title`} aria-label={title}>
            {title}
          </div>
        )}
        {showCloseButton && (
          <span
            className={`${classPrefix}-header-close-button`}
            onClick={() => {
              props.onClose?.()
            }}
            role='button'
            title={locale.common.close}
            tabIndex={-1}
          >
            <DownOutline />
          </span>
        )}
      </div>
    )
  }

  const onBackspaceTouchStart = () => {
    stopContinueClear()
    startContinueClear()
  }

  const onBackspaceTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    e.preventDefault() // 短按时，touchend 会阻止后续 click 事件触发，防止删除两次
    stopContinueClear()
    onKeyPress(e, 'BACKSPACE')
  }

  const renderKey = (key: string, index: number) => {
    const isNumberKey = /^\d$/.test(key)
    const isBackspace = key === 'BACKSPACE'
    const className = classNames(`${classPrefix}-key`, {
      [`${classPrefix}-key-number`]: isNumberKey,
      [`${classPrefix}-key-sign`]: !isNumberKey && key,
      [`${classPrefix}-key-mid`]:
        index === 9 && !!confirmText && keys.length < 12,
    })

    const ariaProps = key
      ? {
          role: 'button',
          title: isBackspace ? locale.Input.clear : key,
          tabIndex: -1,
        }
      : undefined

    return (
      <div
        key={key}
        className={className}
        // 仅为  backspace 绑定，支持长按快速删除
        onTouchStart={isBackspace ? onBackspaceTouchStart : undefined}
        onTouchEnd={isBackspace ? onBackspaceTouchEnd : undefined}
        onTouchCancel={isBackspace ? stopContinueClear : undefined}
        // <div role="button" title="1" onTouchEnd={e => {}}>1</div> 安卓上 talback 可读不可点
        // see https://ua-gilded-eef7f9.netlify.app/grid-button-bug.html
        // 所以普通按钮绑定 click 事件，而 backspace 仍然额外绑定 touch 事件支持长按删除
        // backspace touchend 时会 preventDefault 阻止其后续 click 事件
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          stopContinueClear()
          onKeyPress(e, key)
        }}
        {...ariaProps}
      >
        {isBackspace ? <TextDeletionOutline /> : key}
      </div>
    )
  }

  return (
    <Popup
      visible={visible}
      getContainer={getContainer}
      mask={false}
      afterClose={props.afterClose}
      afterShow={props.afterShow}
      className={`${classPrefix}-popup`}
      stopPropagation={props.stopPropagation}
      destroyOnClose={props.destroyOnClose}
      forceRender={props.forceRender}
    >
      {withNativeProps(
        props,
        <div ref={keyboardRef} className={classPrefix}>
          {renderHeader()}
          <div className={`${classPrefix}-wrapper`}>
            <div
              className={classNames(`${classPrefix}-main`, {
                [`${classPrefix}-main-confirmed-style`]: !!confirmText,
              })}
            >
              {keys.map(renderKey)}
            </div>
            {!!confirmText && (
              <div className={`${classPrefix}-confirm`}>
                {/* 与上面的 backspace 代码是一样的 */}
                <div
                  className={`${classPrefix}-key ${classPrefix}-key-extra ${classPrefix}-key-bs`}
                  onTouchStart={onBackspaceTouchStart}
                  onTouchEnd={onBackspaceTouchEnd}
                  onTouchCancel={stopContinueClear}
                  onClick={e => {
                    stopContinueClear()
                    onKeyPress(e, 'BACKSPACE')
                  }}
                  onContextMenu={e => {
                    // Long press should not trigger native context menu
                    e.preventDefault()
                  }}
                  title={locale.Input.clear}
                  role='button'
                  tabIndex={-1}
                >
                  <TextDeletionOutline />
                </div>
                <div
                  className={`${classPrefix}-key ${classPrefix}-key-extra ${classPrefix}-key-ok`}
                  onClick={e => onKeyPress(e, 'OK')}
                  role='button'
                  tabIndex={-1}
                  aria-label={confirmText}
                >
                  {confirmText}
                </div>
              </div>
            )}
          </div>
          {props.safeArea && (
            <div className={`${classPrefix}-footer`}>
              <SafeArea position='bottom' />
            </div>
          )}
        </div>
      )}
    </Popup>
  )
}
