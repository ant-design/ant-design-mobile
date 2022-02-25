import classNames from 'classnames'
import React, { FC, useEffect, useState } from 'react'
import { MinusOutline, AddOutline } from 'antd-mobile-icons'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { bound } from '../../utils/bound'
import Input, { InputProps } from '../input'
import Button from '../button'

const classPrefix = `adm-stepper`

type StepperValueType<B extends boolean> = B extends true
  ? number | null
  : number

export type StepperProps<T extends boolean> = Pick<
  InputProps,
  'onFocus' | 'onBlur'
> & {
  value?: StepperValueType<T>
  defaultValue?: StepperValueType<T>
  onChange?: (value: StepperValueType<T>) => void
  min?: number
  max?: number
  step?: number
  digits?: number
  disabled?: boolean
  inputReadOnly?: boolean
  allowEmpty?: T
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

type DefaultValueType = false

const defaultProps = {
  defaultValue: 0,
  step: 1,
  disabled: false,
  allowEmpty: false as DefaultValueType,
}

export function Stepper<T extends boolean = DefaultValueType>(
  p: StepperProps<T>
) {
  const props = mergeProps(defaultProps, p)
  const { disabled, step, max, min, inputReadOnly } = props

  const [value, setValue] = usePropsValue(props)
  const [inputValue, setInputValue] = useState(() => convertValueToText(value))
  function setValueWithCheck(v: number) {
    if (isNaN(v)) return
    let target = bound(v, props.min, props.max)
    if (props.digits || props.digits === 0) {
      target = parseFloat(target.toFixed(props.digits))
    }
    setValue(target as StepperValueType<T>)
  }

  const [hasFocus, setHasFocus] = useState(false)

  useEffect(() => {
    if (!hasFocus) {
      setInputValue(convertValueToText(value))
    }
  }, [hasFocus])

  useEffect(() => {
    if (!hasFocus) {
      setInputValue(convertValueToText(value))
    }
  }, [value])

  const handleInputChange = (v: string) => {
    setInputValue(v)
    const value = convertTextToValue(v)
    if (value === null) {
      if (props.allowEmpty) {
        setValue(null as StepperValueType<T>)
      } else {
        setValue(props.defaultValue)
      }
    } else {
      setValueWithCheck(value)
    }
  }

  const handleMinus = () => {
    setValueWithCheck((value ?? 0) - step)
  }

  const handlePlus = () => {
    setValueWithCheck((value ?? 0) + step)
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

function convertValueToText(value: number | null) {
  if (value === null) return ''
  return value.toString()
}

function convertTextToValue(text: string) {
  if (text === '') return null
  return parseFloat(text)
}
