import classNames from 'classnames'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `adm-stepper`

export type StepperProps = {
  value?: number | string // 这里的 string 类型是为了给用户手动输入负数或小数时做缓冲
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  onChange?: (value: number) => void
} & NativeProps

const defaultProps = {
  defaultValue: 1,
  step: 1,
  disabled: false,
}

// 处理用户手动输入的数字
// 处理「01」变成「1」
// 不处理「0.」、「-」、「-0.」等情况，因为用户可能输了一半
function parseInputValue(value: string): string | number {
  if (value === '') return value
  if (value === '-') return value
  if (value === '-0') return value
  // 不处理以「.」结尾的情况
  if (value.indexOf('.') === value.length - 1) {
    return value
  }
  if (value.indexOf('.') !== -1) {
    // 不处理「0.10」这样的情况
    if (value[value.length - 1] === '0') {
      return value
    }
    // 不处理「0.00」这样的情况
    for (const num of value.split('.')[1]) {
      if (num !== '0') return parseFloat(value)
    }
    return value
  }
  return parseFloat(value)
}

export const Stepper = withDefaultProps(defaultProps)<StepperProps>(props => {
  const { disabled, step, max, min, defaultValue } = props
  const [value, setValue] = useNewControllableValue(props)

  // 处理数字，判断是否超出范围等
  const formatNumber = (value: number): number => {
    if (isNaN(value)) {
      return defaultValue
    }
    if (max !== undefined && value >= max) {
      return max
    }
    if (min !== undefined && value <= min) {
      return min
    }
    return value
  }

  const handleInputChange = (value: string) => {
    const parsedValue = parseInputValue(value)
    if (typeof parsedValue === 'string') {
      setValue(parsedValue)
    } else {
      setValue(formatNumber(parsedValue))
    }
  }

  const handleMinus = () => {
    if (typeof value === 'number') {
      setValue(formatNumber(value - step))
    } else {
      setValue(formatNumber(parseFloat(value) - step))
    }
  }

  const handlePlus = () => {
    if (typeof value === 'number') {
      setValue(formatNumber(value + step))
    } else {
      setValue(formatNumber(parseFloat(value) + step))
    }
  }

  const minusDisabled = () => {
    if (min === undefined) {
      return disabled
    } else {
      return disabled || (value as number) <= min
    }
  }

  const plusDisabled = () => {
    if (max === undefined) {
      return disabled
    } else {
      return disabled || (value as number) >= max
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
        value={value}
        onChange={e => {
          disabled || handleInputChange(e.target.value)
        }}
        disabled={disabled}
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
