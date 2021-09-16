import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { withDefaultProps } from '../../utils/with-default-props'
import { bound } from '../../utils/bound'
import Input from '../input'
import Button from '../button'

const classPrefix = `adm-stepper`

export type StepperProps = {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  digits?: number
  disabled?: boolean
  onChange?: (value: number) => void
} & NativeProps

const defaultProps = {
  defaultValue: 0,
  step: 1,
  disabled: false,
}

export const Stepper = withDefaultProps(defaultProps)<StepperProps>(props => {
  const { disabled, step, max, min } = props

  const [value, setValue] = useNewControllableValue(props)
  const [inputValue, setInputValue] = useState(() => value.toString())
  function setValueWithCheck(v: number) {
    if (isNaN(v)) return
    let target = bound(v, props.min, props.max)
    if (props.digits || props.digits === 0) {
      target = parseFloat(target.toFixed(props.digits))
    }
    setValue(target)
    if (!hasFocus) {
      setInputValue(target.toString())
    }
  }

  const [hasFocus, setHasFocus] = useState(false)

  useEffect(() => {
    if (!hasFocus) {
      setInputValue(value.toString())
    }
  }, [hasFocus])

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
      })}
    >
      <Button
        className={`${classPrefix}-minus`}
        onClick={handleMinus}
        disabled={minusDisabled()}
        fill='none'
        color='primary'
      >
        <MinusOutlined />
      </Button>
      <Input
        className={`${classPrefix}-input`}
        onFocus={() => {
          setHasFocus(true)
        }}
        value={inputValue}
        onChange={val => {
          disabled || handleInputChange(val)
        }}
        disabled={disabled}
        onBlur={() => {
          setHasFocus(false)
        }}
      />
      <Button
        className={`${classPrefix}-plus`}
        onClick={handlePlus}
        disabled={plusDisabled()}
        fill='none'
        color='primary'
      >
        <PlusOutlined />
      </Button>
    </div>
  )
})
