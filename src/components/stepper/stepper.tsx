import classNames from 'classnames'
import React, { FC, useEffect, useState } from 'react'
import { MinusOutline, AddOutline } from 'antd-mobile-icons'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { bound } from '../../utils/bound'
import Input, { InputProps } from '../input'
import Button from '../button'
import Big from 'big.js'
import { useConfig } from '../config-provider'

const classPrefix = `adm-stepper`

type ValueProps = {
  allowEmpty: true
  value?: number | null
  defaultValue?: number | null
  onChange?: (value: number | null) => void
}

type ValuePropsWithNull = {
  allowEmpty?: false
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
}

export type StepperProps = Pick<InputProps, 'onFocus' | 'onBlur'> &
  (ValuePropsWithNull | ValueProps) & {
    min?: number
    max?: number
    step?: number
    digits?: number
    disabled?: boolean
    inputReadOnly?: boolean

    // Format & Parse
    parser?: (value?: string) => number
    formatter?: (value?: number) => string
  } & NativeProps<
    | '--height'
    | '--input-width'
    | '--input-font-size'
    | '--input-background-color'
    | '--border-radius'
    | '--border'
    | '--border-inner'
    | '--active-border'
    | '--button-font-size'
    | '--button-background-color'
    | '--button-width'
    | '--input-font-color'
    | '--button-text-color'
  >

const defaultProps = {
  defaultValue: 0,
  step: 1,
  disabled: false,
  allowEmpty: false,
}

export const Stepper: FC<StepperProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { disabled, step, max, min, inputReadOnly, digits, formatter, parser } =
    props
  const { locale } = useConfig()

  // ========================== Parse / Format ==========================
  const parseValue = (text: string) => {
    if (text === '') return null
    return parseFloat(text)
  }

  const formatValue = (value: number | null) => {
    if (value === null) return ''

    if (digits !== undefined) {
      return value.toFixed(digits)
    } else {
      return value.toString()
    }
  }

  // ======================== Value & InputValue ========================
  const [value, setValue] = usePropsValue<number | null>(props as any)
  const [inputValue, setInputValue] = useState(() => formatValue(value))

  // >>>>> Value
  function setValueWithCheck(v: number) {
    if (isNaN(v)) return
    let target = bound(v, props.min, props.max)
    if (digits !== undefined) {
      target = parseFloat(target.toFixed(digits))
    }
    setValue(target)
  }

  // >>>>> Input
  const handleInputChange = (v: string) => {
    setInputValue(v)
    const value = parseValue(v)
    if (value === null) {
      if (props.allowEmpty) {
        setValue(null)
      } else {
        setValue(props.defaultValue)
      }
    } else {
      setValueWithCheck(value)
    }
  }

  // ============================== Focus ===============================
  const [focused, setFocused] = useState(false)

  function triggerFocus(nextFocus: boolean) {
    setFocused(nextFocus)

    // We will convert value to original text when focus
    if (nextFocus) {
      // TODO
    }
  }

  // ============================ Operations ============================
  const handleMinus = () => {
    setValueWithCheck(
      Big(value ?? 0)
        .minus(step)
        .toNumber()
    )
  }

  const handlePlus = () => {
    setValueWithCheck(
      Big(value ?? 0)
        .add(step)
        .toNumber()
    )
  }

  const minusDisabled = () => {
    if (disabled) return true
    if (value === null) return false
    if (min !== undefined) {
      return value <= min
    }
    return false
  }

  const plusDisabled = () => {
    if (disabled) return true
    if (value === null) return false
    if (max !== undefined) {
      return value >= max
    }
    return false
  }

  // ============================== Effect ==============================
  useEffect(() => {
    if (!focused) {
      setInputValue(formatValue(value))
    }
  }, [focused])

  useEffect(() => {
    if (!focused) {
      setInputValue(formatValue(value))
    }
  }, [value, digits])

  // ============================== Render ==============================
  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-active`]: focused,
      })}
    >
      <Button
        className={`${classPrefix}-minus`}
        onClick={handleMinus}
        disabled={minusDisabled()}
        fill='none'
        shape='rectangular'
        color='primary'
        aria-label={locale.Stepper.decrease}
      >
        <MinusOutline />
      </Button>
      <div className={`${classPrefix}-middle`}>
        <Input
          className={`${classPrefix}-input`}
          onFocus={e => {
            triggerFocus(true)
            props.onFocus?.(e)
          }}
          value={inputValue}
          onChange={val => {
            disabled || handleInputChange(val)
          }}
          disabled={disabled}
          onBlur={e => {
            triggerFocus(false)
            props.onBlur?.(e)
          }}
          readOnly={inputReadOnly}
          role='spinbutton'
          aria-valuenow={Number(inputValue)}
          aria-valuemax={max}
          aria-valuemin={min}
          inputMode='decimal'
        />
      </div>
      <Button
        className={`${classPrefix}-plus`}
        onClick={handlePlus}
        disabled={plusDisabled()}
        fill='none'
        shape='rectangular'
        color='primary'
        aria-label={locale.Stepper.increase}
      >
        <AddOutline />
      </Button>
    </div>
  )
}
