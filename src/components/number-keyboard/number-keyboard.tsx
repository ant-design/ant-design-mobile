import React, { useRef, useMemo, TouchEvent, MouseEvent } from 'react'
import classNames from 'classnames'
import { DownOutline, TextDeletionOutline } from 'antd-mobile-icons'
import { mergeProps } from '../../utils/with-default-props'
import { shuffle } from '../../utils/shuffle'
import Popup, { PopupProps } from '../popup'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import SafeArea from '../safe-area'
import { useMemoizedFn } from 'ahooks'

const classPrefix = 'adm-number-keyboard'

export type NumberKeyboardProps = {
  visible?: boolean
  title?: string
  confirmText?: string | null
  customKey?: '-' | '.' | 'X'
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
  NativeProps

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

export const NumberKeyboard: React.FC<NumberKeyboardProps> = p => {
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

  const keyboardRef = useRef<HTMLDivElement | null>(null)

  const keys = useMemo(() => {
    const defaultKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const keyList = randomOrder ? shuffle(defaultKeys) : defaultKeys
    keyList.push('0')
    if (confirmText) {
      keyList.push(customKey || '')
    } else {
      keyList.splice(9, 0, customKey || '')
      keyList.push('BACKSPACE')
    }
    return keyList
  }, [customKey, confirmText, randomOrder, randomOrder && visible])

  const timeoutRef = useRef(-1)
  const intervalRef = useRef(-1)

  const onDelete = useMemoizedFn(() => {
    props.onDelete?.()
  })

  const onBackspacePressStart = () => {
    timeoutRef.current = window.setTimeout(() => {
      onDelete()
      intervalRef.current = window.setInterval(onDelete, 150)
    }, 700)
  }
  const onBackspacePressEnd = () => {
    clearTimeout(timeoutRef.current)
    clearInterval(intervalRef.current)
  }

  // 点击键盘按键
  const onKeyPress = (
    e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>,
    key: string
  ) => {
    e.preventDefault()

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
        // 当 customKey 不存在时，点击该键不应该触发 onInput
        if (key !== '') onInput?.(key)
        break
    }
  }

  // 渲染 title 和 close button
  const renderHeader = () => {
    if (!showCloseButton && !title) return null
    return (
      <div
        className={classNames(`${classPrefix}-header`, {
          'with-title': !!title,
        })}
      >
        {title && <div className={`${classPrefix}-title`}>{title}</div>}
        {showCloseButton && (
          <span
            className={`${classPrefix}-header-close-button`}
            onClick={() => {
              props.onClose?.()
            }}
            role='button'
            title='CLOSE'
          >
            <DownOutline />
          </span>
        )}
      </div>
    )
  }

  // 渲染基础键盘按键
  const renderKey = (key: string, index: number) => {
    const isNumberKey = /^\d$/.test(key)
    const className = classNames(`${classPrefix}-key`, {
      'number-key': isNumberKey,
      'sign-key': !isNumberKey && key,
      'mid-key': index === 9 && !!confirmText,
    })

    const ariaProps = key
      ? {
          role: 'button',
          title: key,
        }
      : undefined

    return (
      <div
        key={key}
        className={className}
        onTouchStart={() => {
          if (key === 'BACKSPACE') {
            onBackspacePressStart()
          }
        }}
        onTouchEnd={e => {
          onKeyPress(e, key)
          if (key === 'BACKSPACE') {
            onBackspacePressEnd()
          }
        }}
        {...ariaProps}
      >
        {key === 'BACKSPACE' ? <TextDeletionOutline /> : key}
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
        <div
          ref={keyboardRef}
          className={classPrefix}
          onMouseDown={e => {
            e.preventDefault()
          }}
        >
          {renderHeader()}
          <div className={`${classPrefix}-wrapper`}>
            <div
              className={classNames(`${classPrefix}-main`, {
                'confirmed-style': !!confirmText,
              })}
            >
              {keys.map(renderKey)}
            </div>
            {!!confirmText && (
              <div className={`${classPrefix}-confirm`}>
                <div
                  className={`${classPrefix}-key extra-key bs-key`}
                  onTouchStart={() => {
                    onBackspacePressStart()
                  }}
                  onTouchEnd={e => {
                    onKeyPress(e, 'BACKSPACE')
                    onBackspacePressEnd()
                  }}
                  title='BACKSPACE'
                  role='button'
                >
                  <TextDeletionOutline />
                </div>
                <div
                  className={`${classPrefix}-key extra-key ok-key`}
                  onTouchEnd={e => onKeyPress(e, 'OK')}
                  role='button'
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
