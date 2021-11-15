import React, { useRef, useMemo } from 'react'
import classNames from 'classnames'
import { DownOutline, TextDeletionOutline } from 'antd-mobile-icons'
import { mergeProps } from '../../utils/with-default-props'
import { shuffle } from '../../utils/shuffle'
import Popup, { PopupProps } from '../popup'
import { GetContainer } from '../../utils/render-to-container'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import SafeArea from '../safe-area'

const classPrefix = 'adm-number-keyboard'

export type NumberKeyboardProps = {
  visible?: boolean
  title?: string
  getContainer?: GetContainer
  confirmText?: string | null
  customKey?: '-' | '.' | 'X'
  randomOrder?: boolean
  showCloseButton?: boolean
  onInput?: (v: string) => void
  onDelete?: () => void
  onClose?: () => void
  onConfirm?: () => void
  afterShow?: () => void
  afterClose?: () => void
  closeOnConfirm?: boolean
  safeArea?: boolean
} & Pick<PopupProps, 'stopPropagation'> &
  NativeProps

const defaultProps = {
  defaultVisible: false,
  randomOrder: false,
  showCloseButton: true,
  confirmText: null,
  closeOnConfirm: true,
  safeArea: true,
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
    onDelete,
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

  // 点击键盘按键
  const onKeyPress = (key: string) => {
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
        onInput?.(key)
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

    return (
      <div
        key={key}
        className={className}
        onClick={() => key && onKeyPress(key)}
        title={key}
        role='button'
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
                  onClick={() => onKeyPress('BACKSPACE')}
                  title='BACKSPACE'
                  role='button'
                >
                  <TextDeletionOutline />
                </div>
                <div
                  className={`${classPrefix}-key extra-key ok-key`}
                  onClick={() => onKeyPress('OK')}
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
