import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { withDefaultProps } from '../../utils/with-default-props'
import { bound } from '../../utils/rubberband'

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
  defaultValue: 1,
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
    if (props.digits) {
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
      <button
        type='button'
        className={`${classPrefix}-minus`}
        onClick={handleMinus}
        disabled={minusDisabled()}
      />
      <input
        onFocus={() => {
          setHasFocus(true)
        }}
        value={inputValue}
        onChange={e => {
          disabled || handleInputChange(e.target.value)
        }}
        disabled={disabled}
        onBlur={() => {
          setHasFocus(false)
        }}
      />
      <button
        type='button'
        className={`${classPrefix}-plus`}
        onClick={handlePlus}
        disabled={plusDisabled()}
      />
    </div>
  )
})
