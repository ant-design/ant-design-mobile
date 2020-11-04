import * as React from 'react'
import classnames from 'classnames'
import KeypadItem from './KeypadItem'
import { EventInside } from '../../rmc'
import { useCompleteLocale } from '../../hooks'
import NumericInputClear from './clear'
import NumericInputDown from './down'

/**
 * determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * @param {array} arr The array to search in
 * @param {any} item  The value to search for
 */
function includes(arr: Array<any>, item: any) {
  if (!arr || !arr.length || !item) {
    return false
  }
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === item) {
      return true
    }
  }
  return false
}

export interface KeypadProps {
  className?: string
  header?: React.ReactNode
  showEmptyHeader?: boolean
  disabledKeys?: string[]
  confirm?: boolean
  confirmLabel?: string
  confirmDisabled?: boolean
  active?: boolean
  customKey?: string
  onKeypadPress?: (v: string) => void
  onClear?: () => void
  onHidePress?: () => void
}

export enum SPECIAL_KEY {
  confirm = 'confirm',
  delete = 'delete',
}

const prefix = 'amd-numeric-keypad'

const customClsMap: {
  [key: string]: string | undefined
} = {
  '-': prefix + '-decrease',
  X: prefix + '-x',
}

const CustomKeypad = React.forwardRef<HTMLDivElement, KeypadProps>(
  (props, ref) => {
    const lang = useCompleteLocale()

    const onKeypadPress = (value: string) => {
      if (props.disabledKeys && includes(props.disabledKeys, value)) {
        return
      }

      if (value === SPECIAL_KEY.confirm && props.confirmDisabled) {
        return null
      }

      props.onKeypadPress && props.onKeypadPress(value)
    }

    const invalidCustomKey = () => {
      return props.customKey == null
    }

    const renderKeypadItem = (item: string, index: number) => {
      const disabled = props.disabledKeys && includes(props.disabledKeys, item)

      let colspan = 1

      // hack
      if (props.confirm && item === '0') {
        colspan = 2
      }

      // hack
      if (props.confirm && item === '0' && invalidCustomKey()) {
        colspan = 3
      }

      return (
        <KeypadItem
          onPress={onKeypadPress}
          key={`item-${item}-${index}`}
          disabled={disabled}
          colSpan={colspan}
          value={item}
        >
          {item}
        </KeypadItem>
      )
    }

    const cls = classnames(`${prefix}-wrapper`, props.className, {
      [`${prefix}-wrapper-hide`]: !props.active,
    })

    const transparentCls = `${prefix}-transparent`

    const customKeyCls = classnames(`${prefix}-custom`, {
      [`${customClsMap[props.customKey || '']}`]:
        !!props.customKey && !!customClsMap[props.customKey],
    })

    const renderWithoutConfirm = () => {
      return (
        <>
          <tr>{['1', '2', '3'].map(renderKeypadItem)}</tr>
          <tr>{['4', '5', '6'].map(renderKeypadItem)}</tr>
          <tr>{['7', '8', '9'].map(renderKeypadItem)}</tr>
          <tr>
            <KeypadItem
              className={classnames(customKeyCls, transparentCls)}
              value={props.customKey}
              onPress={onKeypadPress}
            >
              {props.customKey}
            </KeypadItem>
            {['0'].map(renderKeypadItem)}
            <KeypadItem
              className={classnames(`${prefix}-delete`, transparentCls)}
              value={SPECIAL_KEY.delete}
              onPress={onKeypadPress}
              onLongPress={props.onClear}
            >
              <NumericInputClear className={`${prefix}-delete-icon`} />
            </KeypadItem>
          </tr>
        </>
      )
    }

    const renderWithConfirm = () => {
      return (
        <>
          <tr>
            {['1', '2', '3'].map(renderKeypadItem)}
            <KeypadItem
              className={`${prefix}-delete`}
              value={SPECIAL_KEY.delete}
              onPress={onKeypadPress}
              onLongPress={props.onClear}
            >
              <NumericInputClear className={`${prefix}-delete-icon`} />
            </KeypadItem>
          </tr>
          <tr>
            {['4', '5', '6'].map(renderKeypadItem)}
            {props.confirm && (
              <KeypadItem
                className={`${prefix}-confirm`}
                rowSpan={4}
                value={SPECIAL_KEY.confirm}
                onPress={onKeypadPress}
                disabled={props.confirmDisabled}
              >
                {props.confirmLabel ?? lang.NumericInput.okText}
              </KeypadItem>
            )}
          </tr>
          <tr>{['7', '8', '9'].map(renderKeypadItem)}</tr>
          <tr>
            {['0'].map(renderKeypadItem)}

            {!invalidCustomKey() && (
              <KeypadItem
                className={customKeyCls}
                value={props.customKey}
                onPress={onKeypadPress}
              >
                {props.customKey}
              </KeypadItem>
            )}
          </tr>
        </>
      )
    }

    // 结构不要轻易变动，使用者有样式复写的
    return (
      <EventInside>
        <div className={cls} ref={ref}>
          {(props.header || props.showEmptyHeader) && (
            <div className={`${prefix}-header`}>
              {props.header && (
                <div className={`${prefix}-header-content`}>{props.header}</div>
              )}
              <NumericInputDown
                className={`${prefix}-header-down`}
                onPress={props.onHidePress}
              />
            </div>
          )}
          <table>
            <tbody>
              {props.confirm ? renderWithConfirm() : renderWithoutConfirm()}
            </tbody>
          </table>
        </div>
      </EventInside>
    )
  },
)

CustomKeypad.displayName = 'CustomKeypad'
CustomKeypad.defaultProps = {
  className: '',
  disabledKeys: [],
  active: false,
  confirmLabel: undefined,
  confirm: false,
  showEmptyHeader: false,
  onClear: () => null,
}

export default CustomKeypad
