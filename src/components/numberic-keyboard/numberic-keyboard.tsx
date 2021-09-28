import React, { useState, useCallback, useRef } from 'react'
import classNames from 'classnames'
import { DownOutline, TextDeletionOutline } from 'antd-mobile-icons'
import { mergeProps } from '../../utils/with-default-props'
import { shuffle } from '../../utils/shuffle'
import Popup from '../popup'
import { GetContainer } from '../../utils/render-to-container'
import { useControllableValue, useUpdateEffect, useClickAway } from 'ahooks'

const classPrefix = 'adm-numberic-keyboard'

export interface NumbericKeyboardProps {
  visible?: boolean
  defaultVisible?: boolean
  title?: string
  getContainer?: GetContainer
  confirmText?: string | false
  customKey?: '-' | '.' | 'X'
  randomOrder?: boolean
  showCloseButton?: boolean
  onInput?: (v: string) => void
  onDelete?: () => void
  onClose?: (done: boolean) => void
  onBlur?: () => void
  afterShow?: () => void
  afterClose?: () => void
}

const defaultProps = {
  visible: false,
  randomOrder: false,
  getContainer: document.body,
  showCloseButton: true,
  confirmText: false,
}

export const NumbericKeyboard: React.FC<NumbericKeyboardProps> = p => {
  const props = mergeProps(defaultProps, p)
  const {
    title,
    getContainer,
    confirmText,
    customKey,
    randomOrder,
    showCloseButton,
    onInput,
    onDelete,
    onClose,
    onBlur,
    afterShow,
    afterClose,
  } = props

  const [visible, setVisible] = useControllableValue(props, {
    defaultValuePropName: 'defaultVisible',
    valuePropName: 'visible',
  })

  const keyboardRef = useRef<HTMLDivElement | null>(null)
  useClickAway(() => {
    if (visible) {
      onBlur && onBlur()
      onClose && onClose(false)
      setVisible(false)
    }
  }, keyboardRef)

  // 获取数字区域按键列表
  const getNumberics = useCallback(() => {
    const DEFAULT_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    const keyList = randomOrder ? shuffle(DEFAULT_KEYS) : DEFAULT_KEYS

    if (confirmText) {
      keyList.push(customKey || '')
    } else {
      keyList.splice(9, 0, customKey || '')
      keyList.push('BACKSPACE')
    }

    return keyList
  }, [customKey, confirmText, randomOrder])

  // 记录键盘数字区域按键
  const [keys, setKeys] = useState(getNumberics)

  // 每次展示键盘时重新获取按键
  useUpdateEffect(() => {
    visible && setKeys(getNumberics())
  }, [visible, getNumberics])

  const onCloseKeyboard = () => {
    setVisible(false)
    onClose && onClose(false)
  }

  // 点击键盘按键
  const onKeyPress = (key: string) => {
    switch (key) {
      case 'BACKSPACE':
        onDelete && onDelete()
        break
      case 'OK':
        onClose && onClose(true)
        setVisible(false)
        break
      default:
        onInput && onInput(key)
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
          <span onClick={onCloseKeyboard} role='button' title='CLOSE'>
            <DownOutline />
          </span>
        )}
      </div>
    )
  }

  // 渲染基础键盘按键
  const renderKey = (key: string, index: number) => {
    const isNumbericKey = /^\d$/.test(key)
    const className = classNames(`${classPrefix}-key`, {
      'numberic-key': isNumbericKey,
      'sign-key': !isNumbericKey && key,
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
      afterClose={afterClose}
      afterShow={afterShow}
      bodyClassName={`${classPrefix}-popup`}
    >
      <div ref={keyboardRef}>
        {renderHeader()}
        <div className={`${classPrefix}-wrapper`}>
          <div
            className={classNames(classPrefix, {
              'confirmed-style': !!confirmText,
            })}
          >
            {keys.map(renderKey)}
          </div>
          {!!confirmText && (
            <div className={`${classPrefix}-confirm`}>
              <div
                className={`${classPrefix}-key extra-key bs-key`}
                onClick={() => onKeyPress('c')}
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
      </div>
    </Popup>
  )
}
