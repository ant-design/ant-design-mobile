/**
 * 修改本组件需要回归一下场景
 * 1. 点收起图标关闭键盘时，键盘下层 input 的 focus 和 click 事件，防止穿透
 * 2. 先触发其他任何的 input focus 然后在打开键盘，防止出现两个 focus
 * 3. 检查外部 inputRef.focus() 是否能正常工作
 * 4. 检查 props.autoFocus 是否能正常工作
 * 5. 检查每次 focus, blur, onChange, onConfirm 事件回调执行次数是否符合预期
 * 6. 多个键盘间不能同时唤起
 * 7. 重复点外部按钮是，应该是能切换键盘显示与否
 */

import * as React from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import { ClearFill } from '@ant-design/mobile-icons'
import { Touchable, withError, EventInside } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker, useContainer } from '../hooks'
import { NumericInputPropsType } from './PropsType'
import CustomKeypad, { SPECIAL_KEY } from './CustomKeypad'
import useDocumentEvent from './useDocumentEvent'
import useGlobalFocus from './useGlobalFocus'
import { blurExcept } from './globalFocus'
import scrollToViewIfNeed from './scrollToViewIfNeed'

import '@ant-design/mobile-styles/lib/NumericInput'

const prefixCls = 'amd-numeric-input'

const hiddenStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  padding: 0,
  border: 0,
}

export const NumericInput: React.FC<NumericInputPropsType> = props => {
  const {
    placeholder,
    disabled,
    defaultValue,
    disabledKeys,
    keypadClassName,
    customKey,
    confirm,
    onConfirm,
    onFocus,
    onBlur,
    autoFocus,
    confirmDisabled,
    confirmLabel,
    clear,
    // @ts-ignore
    // Provide by withError with forwardRef=true
    forwardRef,
  } = props
  const [value, setValue] = React.useState(
    String(props.value ?? defaultValue ?? ''),
  )
  const [focus, setFocus] = React.useState(false)
  const focusRef = React.createRef<any>()
  const dom = useContainer('numeric-input', focus)

  useTracker(NumericInput.displayName)

  React.useEffect(() => {
    // value 模式
    if (props.value != null && value !== String(props.value)) {
      setValue(String(props.value))
    }
    // else defaultValue 模式
  }, [props.value])

  React.useLayoutEffect(() => {
    autoFocus && doFocus()
  }, [])

  const doFocus = () => {
    // hack 先把其他 focus 状态的数字键盘关掉
    blurExcept(uuid)
    if (disabled) {
      return
    }
    if (!focus) {
      focusRef.current?.focus()
      setFocus(true)
      onFocus!(value)
    }
  }

  const onKeypadRef = (el: HTMLDivElement | null) => {
    if (el) {
      scrollToViewIfNeed(focusRef.current, {
        offsetBottom: el.getBoundingClientRect().height + 10, // 增加 10 的空间
        behavior: 'smooth',
        block: 'end',
      })
    }
  }

  // hack
  // 外部的 focus 命令，先等 document 上的事件发生后，才获取焦点
  // 以避免 focus 之后立马触发 blur
  // 100 只是一个经验数字，实测 10 已经有效果了
  const focusNextTick = () => {
    setTimeout(doFocus, 100)
  }

  const doBlur = () => {
    if (focus) {
      // 两个焦点都要失效
      forwardRef?.current?.blur()
      focusRef.current?.blur()
      setFocus(false)
      onBlur!(value)
    }
  }

  const uuid = useGlobalFocus(doBlur, focus)
  useDocumentEvent(doBlur, focus)

  const showClear = (() => {
    return clear && focus && value !== ''
  })()

  const fakeInputCls = classnames('fake-input', {
    focus,
    'fake-input-disabled': disabled,
    'fake-input-with-clear': showClear,
  })

  const clsStr = classnames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-left`]: props.align === 'left',
    [`${props.className}`]: !!props.className,
  })

  const onChange = (v: string) => {
    const changed = v !== value

    if (!('value' in props)) {
      setValue(v)
    }
    props.onChange!(v, changed)
  }

  const onKeypadPress = (v: string) => {
    let valueAfterChange

    if (v === SPECIAL_KEY.delete) {
      valueAfterChange = value.substring(0, value.length - 1)
      onChange(valueAfterChange)
    } else if (v === SPECIAL_KEY.confirm) {
      valueAfterChange = value
      onChange(valueAfterChange)
      doBlur()
      onConfirm!(valueAfterChange)
    } else {
      valueAfterChange = value + v
      onChange(valueAfterChange)
    }
  }

  return (
    <EventInside>
      <div className={clsStr}>
        {value === '' && (
          <div className="fake-input-placeholder">{placeholder}</div>
        )}
        {/* hack, 用于接听外部的 focus 事件，然后触发 focus */}
        <span
          ref={forwardRef}
          tabIndex={-1}
          onFocus={focusNextTick}
          style={hiddenStyle}
        />
        {/* hack，必须要有 tabIndex，使其具备 focus 能力 */}
        <Touchable onPress={doFocus}>
          <div
            role="textbox"
            ref={focusRef}
            tabIndex={-1}
            aria-label={value || placeholder}
            className={fakeInputCls}
            {...getDataAttr(props)}
          >
            {value}
          </div>
        </Touchable>
        {showClear && (
          <ClearFill
            className="fake-input-clear"
            size="sm"
            onPress={() => onChange('')}
          />
        )}
        {focus &&
          createPortal(
            <CustomKeypad
              className={keypadClassName}
              confirm={confirm}
              confirmLabel={confirmLabel}
              active={focus}
              header={props.header}
              disabledKeys={disabledKeys}
              customKey={customKey}
              onKeypadPress={onKeypadPress}
              onClear={() => onChange('')}
              onHidePress={doBlur}
              confirmDisabled={confirmDisabled || value === ''}
              ref={onKeypadRef}
            />,
            dom!,
          )}
      </div>
    </EventInside>
  )
}

NumericInput.displayName = 'NumericInput'
NumericInput.defaultProps = {
  className: '',
  keypadClassName: '',
  header: '',
  defaultValue: undefined,
  placeholder: '',
  disabled: false,
  disabledKeys: [],
  autoFocus: false,
  confirm: false,
  confirmDisabled: false,
  customKey: undefined,
  align: 'left',
  onConfirm: () => null,
  onChange: () => null,
  onFocus: () => null,
  onBlur: () => null,
}

export default withError(NumericInput, {
  forwardRef: true,
})
