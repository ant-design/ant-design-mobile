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
  const { disabled, step, max, min, inputReadOnly } = props

  const [value, setValue] = usePropsValue<number | null>(props as any)
  const [inputValue, setInputValue] = useState(() =>
    convertValueToText(value, props.digits)
  )
  function setValueWithCheck(v: number) {
    if (isNaN(v)) return
    let target = bound(v, props.min, props.max)
    if (props.digits !== undefined) {
      target = parseFloat(target.toFixed(props.digits))
    }
    setValue(target)
  }

  const [hasFocus, setHasFocus] = useState(false)

  useEffect(() => {
    if (!hasFocus) {
      setInputValue(convertValueToText(value, props.digits))
    }
  }, [hasFocus])

  useEffect(() => {
    if (!hasFocus) {
      setInputValue(convertValueToText(value, props.digits))
    }
  }, [value, props.digits])

  const handleInputChange = (v: string) => {
    setInputValue(v)
    const value = convertTextToValue(v)
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

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-active`]: hasFocus,
      })}
    >
      <Button
        className={`${classPrefix}-minus`}
        onClick={handleMinus}
        disabled={minusDisabled()}
        fill='none'
        shape='rectangular'
        color='primary'
      >
        <MinusOutline />
      </Button>
      <div className={`${classPrefix}-middle`}>
        <Input
          className={`${classPrefix}-input`}
          onFocus={e => {
            setHasFocus(true)
            props.onFocus?.(e)
          }}
          value={inputValue}
          onChange={val => {
            disabled || handleInputChange(val)
          }}
          disabled={disabled}
          onBlur={e => {
            setHasFocus(false)
            props.onBlur?.(e)
          }}
          readOnly={inputReadOnly}
        />
      </div>
      <Button
        className={`${classPrefix}-plus`}
        onClick={handlePlus}
        disabled={plusDisabled()}
        fill='none'
        shape='rectangular'
        color='primary'
      >
        <AddOutline />
      </Button>
    </div>
  )
}

function convertValueToText(value: number | null, digits?: number) {
  if (value === null) return ''
  if (digits !== undefined) {
    return value.toFixed(digits)
  } else {
    return value.toString()
  }
}

function convertTextToValue(text: string) {
  if (text === '') return null
  return parseFloat(text)
}
