import * as React from 'react'
import classnames from 'classnames'
import KeypadItem from './KeypadItem'
import { Touchable, EventInside } from '../../rmc'
import { useCompleteLocale } from '../../hooks'
import { isReactComponent } from '../../_internal'

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

    const renderKeypadItem = (item: string, index: number) => {
      const disabled = props.disabledKeys && includes(props.disabledKeys, item)

      let colspan = 1
      // hack
      if (item === '0' && props.customKey == null) {
        colspan = 2
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

    let defaultHeader
    if (isReactComponent(props.header)) {
      // @ts-ignore
      // 可以封装数字键盘的 header 以便多次使用
      defaultHeader = <props.header locale={lang.locale} />
    } else {
      defaultHeader = props.header
    }

    const customKeyCls = classnames(`${prefix}-custom`, {
      [`${customClsMap[props.customKey || '']}`]:
        !!props.customKey && !!customClsMap[props.customKey],
    })

    // 结构不要轻易变动，使用者有样式复写的
    return (
      // 键盘内部的点击事件不对页面元素的 focus 等行为造成影响
      <EventInside>
        <div className={cls} ref={ref}>
          <div className={`${prefix}-real-background`}>
            {props.header && (
              <div className={`${prefix}-header`}>
                <div className={`${prefix}-header-content`}>
                  {defaultHeader}
                </div>
                <Touchable onPress={props.onHidePress}>
                  <div className={`${prefix}-down-icon`} />
                </Touchable>
              </div>
            )}
            <table>
              <tbody>
                <tr>
                  {['1', '2', '3'].map(renderKeypadItem)}
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
                <tr>{['4', '5', '6'].map(renderKeypadItem)}</tr>
                <tr>{['7', '8', '9'].map(renderKeypadItem)}</tr>
                <tr>
                  <KeypadItem
                    className={customKeyCls}
                    value={props.customKey}
                    onPress={onKeypadPress}
                  >
                    {props.customKey}
                  </KeypadItem>
                  {['0'].map(renderKeypadItem)}
                  <KeypadItem
                    className={`${prefix}-delete`}
                    value={SPECIAL_KEY.delete}
                    onPress={onKeypadPress}
                    onLongPress={props.onClear}
                  />
                </tr>
              </tbody>
            </table>
          </div>
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
  onClear: () => null,
}

export default CustomKeypad
