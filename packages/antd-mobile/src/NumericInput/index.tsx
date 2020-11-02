/**
 * 修改本组件需要回归一下场景
 * 1. 点收起图标关闭键盘时，键盘下层 input 的 focus 和 click 事件，防止穿透
 * 2. 先触发其他任何的 input focus 然后在打开键盘，防止出现两个 focus
 * 3. 检查外部 inputRef.focus() 是否能正常工作
 * 4. 检查 props.autoFocus 是否能正常工作
 * 5. 检查每次 focus, blur, onChange, onConfirm 事件回调执行次数是否符合预期
 * 6. 多个键盘间不能同时唤起
 * 7. 重复点外部按钮是，控制台不能有 blur, focus 状态重复切换
 */

import * as React from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import { ClearFill } from '@ant-design/mobile-icons'
import { withError, Labelable, LabelInstance } from '../rmc'
import { getDataAttr } from '../_internal'
import {
  useTracker,
  useContainer,
  useControlledByValue,
  useFocus,
} from '../hooks'
import { NumericInputPropsType } from './PropsType'
import CustomKeypad, { SPECIAL_KEY } from './CustomKeypad'
import scrollToViewIfNeed from './scrollToViewIfNeed'

import '@ant-design/mobile-styles/lib/NumericInput'

const prefixCls = 'amd-numeric-input'

export const NumericInput: React.FC<NumericInputPropsType> = props => {
  const {
    placeholder,
    disabled,
    disabledKeys,
    keypadClassName,
    customKey,
    confirm,
    onConfirm,
    confirmDisabled,
    confirmLabel,
    clear,
    disabledAutoScroll,
    // @ts-ignore
    // Provide by withError with forwardRef=true
    forwardRef,
  } = props
  const { value, onChange } = useControlledByValue(props)
  const focusRef = React.createRef<LabelInstance>()
  const fakeRef = React.createRef<any>()

  const { focus, onFocus, onBlur } = useFocus(value, props)
  const dom = useContainer('numeric-input', focus)

  useTracker(NumericInput.displayName)

  React.useImperativeHandle(forwardRef, () => ({
    // 通过 click 达到 focus 的效果
    focus: doFocus,

    blur: doBlur,
  }))

  const onKeypadRef = (el: HTMLDivElement | null) => {
    if (el && !disabledAutoScroll) {
      scrollToViewIfNeed(fakeRef.current, {
        offsetBottom: el.getBoundingClientRect().height + 10, // 增加 10 的空间
        behavior: 'smooth',
        block: 'end',
      })
    }
  }

  const doFocus = () => {
    focusRef.current?.focus()
  }

  const doBlur = () => {
    focusRef.current?.blur()
  }

  const showClear = (() => {
    return clear && focus && value !== ''
  })()

  const fakePrefix = prefixCls + '-fake'

  const fakeInputCls = classnames(fakePrefix, {
    [`${fakePrefix}-focus`]: focus,
    [`${fakePrefix}-disabled`]: disabled,
    [`${fakePrefix}-with-clear`]: showClear,
  })

  const clsStr = classnames({
    [`${prefixCls}`]: true,
    [`${prefixCls}-left`]: props.align === 'left',
    [`${props.className}`]: !!props.className,
  })

  const onKeypadPress = (v: string) => {
    let valueAfterChange

    if (v === SPECIAL_KEY.delete) {
      valueAfterChange = value.substring(0, value.length - 1)
      onChange(valueAfterChange)
    } else if (v === SPECIAL_KEY.confirm) {
      valueAfterChange = value
      doBlur()
      onConfirm!(valueAfterChange)
    } else {
      valueAfterChange = value + v
      onChange(valueAfterChange)
    }
  }

  return (
    <div className={clsStr}>
      {/* 添加 label 支持 */}
      <Labelable
        ref={focusRef}
        {...Labelable.getProps(props)}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        autoFocus={props.autoFocus}
      >
        {value === '' && (
          <div className={fakePrefix + '-placeholder'}>{placeholder}</div>
        )}
        <div
          role="textbox"
          ref={fakeRef}
          aria-label={value || placeholder}
          className={fakeInputCls}
          {...getDataAttr(props)}
        >
          {value}
        </div>
        {showClear && (
          <ClearFill
            className={fakePrefix + '-clear'}
            size="sm"
            onPress={() => {
              onChange('')
            }}
          />
        )}
      </Labelable>
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
  )
}

NumericInput.displayName = 'NumericInput'
NumericInput.defaultProps = {
  className: '',
  keypadClassName: '',
  header: '',
  defaultValue: '',
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
  disabledAutoScroll: false,
}

export default withError(NumericInput, {
  forwardRef: true,
})
