import * as React from 'react'
import classnames from 'classnames'
import { BaseFormItemType, BasePropsType, getDataAttr } from '../../_internal'
import { useControlledByValue } from '../../hooks'
import InputHandler from './InputHandler'
import { useStep } from './useStep'
import { upStep, downStep, toNumber } from './utils'

interface InputNumberPropsType extends BasePropsType, BaseFormItemType {
  prefixCls: string
  min?: number
  max?: number
  placeholder?: string
  step?: number
  value?: number
  defaultValue?: number
  onFocus?: (v: number) => void
  onBlur?: (v: number) => void
  mode?: 'number' | 'numeric'
  precision?: number
  parser?: (v: string) => string
  upHandler?: React.ReactNode
  downHandler?: React.ReactNode
}

const InputNumber: React.FC<InputNumberPropsType> = React.forwardRef<
  any,
  InputNumberPropsType
>((props, ref) => {
  const {
    prefixCls,
    className,
    step: STEP,
    disabled,
    max,
    min,
    precision,
  } = props

  const { value, onChange } = useControlledByValue(props)

  // 输入时的
  const [inputValue, setInputValue] = React.useState<string>()
  const inputRef = React.createRef<HTMLInputElement>()

  React.useImperativeHandle(ref, () => ({
    focus: inputRef.current?.focus,
    blur: inputRef.current?.blur,
  }))

  const upDisabled = disabled || value >= max!
  const downDisabled = disabled || value <= min!

  const fixedNextValue = (nextValue: number | undefined) => {
    // toNumber 计算出错，没有结果
    if (nextValue == null) {
      // 没有要更新的
      return nextValue
    }

    // 修正
    if (nextValue! < min!) {
      nextValue = min!
    }
    if (nextValue! > max!) {
      nextValue = max!
    }

    return nextValue
  }

  const step = (type: 'up' | 'down') => {
    // 不能点击
    if (type === 'up' && upDisabled) {
      return
    }
    if (type === 'down' && downDisabled) {
      return
    }

    let nextValue: number | undefined
    if (type === 'up') {
      nextValue = upStep(value, STEP, precision)
    }

    if (type === 'down') {
      nextValue = downStep(value, STEP, precision)
    }

    nextValue = fixedNextValue(nextValue)
    if (nextValue != null) {
      onChange(nextValue)
    }
  }

  const { callback: action, stop } = useStep((type: 'up' | 'down') => {
    step(type)
  })

  const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = props.parser!(e.target.value)

    // 清除 inputValue，以便 value 可以正确显示
    setInputValue(undefined)
    const nextValue = fixedNextValue(toNumber(v))

    if (nextValue != null) {
      onChange(nextValue)
      props.onBlur?.(nextValue)
    } else {
      props.onBlur?.(value)
    }
  }

  const handleInputFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onFocus?.(value)
  }

  const renderInput = () => {
    const inputProps = {
      className: `${prefixCls}-input`,
      id: props.id,
      name: props.name,
      tabIndex: props.tabIndex,
      autoComplete: 'off',
      autoFocus: props.autoFocus,
      disabled: props.disabled,
      ref: inputRef,
      max: props.max,
      min: props.min,
      step: props.step,
      // 不影响用户正常输入，在 blur 的时候才校验输入正确与否
      onBlur: handleInputBlur,
      onFocus: handleInputFocus,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
      },
      // 优先显示 inputValue， 在 blur 的时候会清除 inputValue, 这时候显示 value
      value: inputValue ?? value,
    }

    return (
      // 1. number is for android
      // 2. pattern \d* is for ios
      // 3. inputmode="decimal" is for ios with decimal
      <input type="number" pattern="\d*" inputMode="decimal" {...inputProps} />
    )
  }

  return (
    <div
      className={classnames(prefixCls, className, {
        [prefixCls + '-disabled']: disabled,
      })}
      {...getDataAttr(props)}
    >
      <InputHandler
        disabled={upDisabled}
        prefixCls={prefixCls}
        onPressIn={() => action('up')}
        onPressOut={stop}
        role="button"
        aria-label="Increase Value"
        aria-disabled={upDisabled}
        className={`${prefixCls}-handler-up`}
      >
        {props.upHandler ? (
          props.upHandler
        ) : (
          <span className={`${prefixCls}-handler-up-inner`} />
        )}
      </InputHandler>
      <InputHandler
        disabled={downDisabled}
        prefixCls={prefixCls}
        onPressIn={() => action('down')}
        onPressOut={stop}
        role="button"
        aria-label="Decrease Value"
        aria-disabled={downDisabled}
        className={`${prefixCls}-handler-down`}
      >
        {props.downHandler ? (
          props.downHandler
        ) : (
          <span className={`${prefixCls}-handler-down-inner`} />
        )}
      </InputHandler>
      <div
        className={`${prefixCls}-input-wrap`}
        role="spinbutton"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      >
        {renderInput()}
      </div>
    </div>
  )
})

const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1
InputNumber.defaultProps = {
  max: MAX_SAFE_INTEGER,
  min: -MAX_SAFE_INTEGER,
  step: 1,
  defaultValue: 0,
  parser: (input: string) => {
    return input.replace(/[^\w.-]+/g, '')
  },
}

export default InputNumber
