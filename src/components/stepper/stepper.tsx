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

export type StepperProps = Pick<InputProps, 'onFocus' | 'onBlur'> & {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  digits?: number
  disabled?: boolean
  onChange?: (value: number) => void
} & NativeProps<
    | '--height'
    | '--input-width'
    | '--input-font-size'
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
}

export const Stepper: FC<StepperProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { disabled, step, max, min } = props

  const [value, setValue] = usePropsValue(props)
  const [inputValue, setInputValue] = useState(() => value.toString())
  function setValueWithCheck(v: number) {
    if (isNaN(v)) return
    let target = bound(v, props.min, props.max)
    if (props.digits || props.digits === 0) {
      target = parseFloat(target.toFixed(props.digits))
    }
    setValue(target)
  }

  const [hasFocus, setHasFocus] = useState(false)

  useEffect(() => {
    if (!hasFocus) {
      setInputValue(value.toString())
    }
  }, [hasFocus])

  useEffect(() => {
    if (!hasFocus) {
      setInputValue(value.toString())
    }
  }, [value])

  const handleInputChange = (v: string) => {
    setInputValue(v)
    setValueWithCheck(parseFloat(v))
  }

  const handleMinus = () => {
    setValueWithCheck(value - step)
  }

  const handlePlus = () => {
    setValueWithCheck(value + step)
  }

  const minusDisabled = () => {
    if (min === undefined) {
      return disabled
    } else {
      return disabled || value <= min
    }
  }

  const plusDisabled = () => {
    if (max === undefined) {
      return disabled
    } else {
      return disabled || value >= max
    }
  }

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-active`]: hasFocus,
      })}
    >
      <Button
        className={`${classPrefix}-minus`}
        onClick={handleMinus}
        disabled={minusDisabled()}
        fill='none'
        color='primary'
      >
        <MinusOutline fontSize={12} />
      </Button>
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
      />
      <Button
        className={`${classPrefix}-plus`}
        onClick={handlePlus}
        disabled={plusDisabled()}
        fill='none'
        color='primary'
      >
        <AddOutline fontSize={12} />
      </Button>
    </div>
  )
}
