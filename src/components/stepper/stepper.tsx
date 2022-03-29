import classNames from 'classnames'
import React, { FC, useCallback, useMemo, useRef, useState } from 'react'
import { MinusOutline, AddOutline } from 'antd-mobile-icons'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import Input, { InputProps, InputRef } from '../input'
import Button from '../button'
import getMiniDecimal, {
  DecimalClass,
  toFixed,
  ValueType,
} from 'rc-input-number/es/utils/MiniDecimal'
import {
  getNumberPrecision,
  num2str,
  validateNumber,
} from 'rc-input-number/es/utils/numberUtil'
import { useUpdateEffect } from 'ahooks'
import useRangeValue from './hooks/use-range-value'

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
  const {
    disabled,
    step,
    allowEmpty,
    inputReadOnly,
    value,
    defaultValue,
    onChange,
    digits: precision,
  } = props

  const { max, min, getRangeValue, isInRange } = useRangeValue(props)

  const inputRef = useRef<InputRef>(null)

  const [hasFocus, setHasFocus] = useState(false)

  const compositionRef = useRef(false)

  // Real value control
  const [decimalValue, setDecimalValue] = useState<DecimalClass>(() =>
    getMiniDecimal(value ?? defaultValue)
  )

  const getPrecision = useCallback(
    (numStr: string, userTyping: boolean): number => {
      if (userTyping) {
        return undefined as unknown as number
      }

      if (precision !== undefined && precision >= 0) {
        return precision
      }

      return Math.max(getNumberPrecision(numStr), getNumberPrecision(step))
    },
    [precision, step]
  )

  const convertNumber = useCallback(
    (number: string | number, userTyping: boolean) => {
      let str = typeof number === 'number' ? num2str(number) : number

      if (!userTyping) {
        const mergedPrecision = getPrecision(str, userTyping)

        if (validateNumber(str) && mergedPrecision >= 0) {
          // Separator
          const separatorStr = '.'

          str = toFixed(str, separatorStr, mergedPrecision)
        }
      }

      return str
    },
    [getPrecision]
  )

  const [inputValue, setInternalInputValue] = useState<string>(() => {
    const initValue = defaultValue ?? value
    if (
      decimalValue.isInvalidate() &&
      ['string', 'number'].includes(typeof initValue)
    ) {
      return Number.isNaN(initValue) ? '' : getMiniDecimal(initValue).toString()
    }
    return convertNumber(decimalValue.toString(), false)
  })

  function setInputValue(newValue: DecimalClass, userTyping: boolean) {
    setInternalInputValue(
      convertNumber(
        newValue.isInvalidate()
          ? newValue.toString(false)
          : newValue.toString(!userTyping),
        userTyping
      )
    )
  }

  // Input by precision
  useUpdateEffect(() => {
    if (!decimalValue.isInvalidate()) {
      setInputValue(decimalValue, false)
    }
  }, [precision])

  // Input by value
  useUpdateEffect(() => {
    const newValue = getMiniDecimal(value ?? '')
    setDecimalValue(newValue)

    const currentParsedValue = getMiniDecimal(inputValue)

    if (!newValue.equals(currentParsedValue)) {
      setInputValue(newValue, false)
    }
  }, [value])

  const triggerValueUpdate = (newValue: DecimalClass, userTyping: boolean) => {
    let updateValue = newValue

    const isEmpty = allowEmpty && updateValue.isEmpty()

    let isRangeValidate = isInRange(updateValue) || isEmpty

    if (!userTyping) {
      if (!updateValue.isEmpty()) {
        updateValue = getRangeValue(updateValue) || updateValue
      } else if (!allowEmpty) {
        updateValue = getMiniDecimal(defaultValue)
      }

      isRangeValidate = true
    }

    if (!disabled && isRangeValidate) {
      const numStr = updateValue.toString()
      const mergedPrecision = getPrecision(numStr, userTyping)
      if (mergedPrecision >= 0) {
        updateValue = getMiniDecimal(toFixed(numStr, '.', mergedPrecision))
      }

      // Trigger event
      if (!updateValue.equals(decimalValue)) {
        if (updateValue.isEmpty()) {
          if (allowEmpty) {
            onChange?.(null)
          }
        } else {
          onChange?.(updateValue.toNumber())
        }

        if (value === undefined) {
          setDecimalValue(updateValue)
          setInputValue(updateValue, userTyping)
        }
      }
    }
    return updateValue
  }

  const collectInputValue = (v: string) => {
    setInternalInputValue(v)

    const finalDecimal = getMiniDecimal(v)

    if (!compositionRef.current) {
      if (!finalDecimal.isNaN()) {
        triggerValueUpdate(finalDecimal, true)
      }
    }
  }

  const onInternalStep = (plus: boolean) => {
    let stepDecimal = getMiniDecimal(step)
    if (plus === false) {
      stepDecimal = stepDecimal.negate()
    }

    const target = (decimalValue || getMiniDecimal(0)).add(
      stepDecimal.toNumber()
    )
    triggerValueUpdate(target, false)
  }

  const flushInputValue = (userTyping: boolean) => {
    const parsedValue = getMiniDecimal(inputValue)
    let formatValue: DecimalClass = parsedValue

    if (!parsedValue.isNaN()) {
      // Only validate value or empty value can be re-fill to inputValue
      // Reassign the formatValue within ranged of trigger control
      formatValue = triggerValueUpdate(parsedValue, userTyping)
    } else {
      formatValue = decimalValue
    }

    if (value !== undefined) {
      // Reset back with controlled value first
      setInputValue(decimalValue, false)
    } else if (!formatValue.isNaN()) {
      // Reset input back since no validate value
      setInputValue(formatValue, false)
    }
  }

  const plusDisabled = useMemo(() => {
    if (disabled) return true

    if (!max || !decimalValue || decimalValue.isInvalidate()) {
      return false
    }

    return max.lessEquals(decimalValue)
  }, [max, decimalValue])

  const minusDisabled = useMemo(() => {
    if (disabled) return true

    if (!min || !decimalValue || decimalValue.isInvalidate()) {
      return false
    }

    return decimalValue.lessEquals(min)
  }, [min, decimalValue])

  const onCompositionStart = () => {
    compositionRef.current = true
  }

  const onCompositionEnd = () => {
    compositionRef.current = false

    if (inputRef.current?.nativeElement) {
      collectInputValue(inputRef.current.nativeElement.value)
    }
  }

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-active`]: hasFocus,
      })}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
    >
      <Button
        className={`${classPrefix}-minus`}
        onClick={() => onInternalStep(false)}
        disabled={minusDisabled}
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
          onChange={collectInputValue}
          disabled={disabled}
          onBlur={e => {
            setHasFocus(false)
            flushInputValue(false)
            props.onBlur?.(e)
          }}
          ref={inputRef}
          readOnly={inputReadOnly}
        />
      </div>
      <Button
        className={`${classPrefix}-plus`}
        onClick={() => onInternalStep(true)}
        disabled={plusDisabled}
        fill='none'
        shape='rectangular'
        color='primary'
      >
        <AddOutline />
      </Button>
    </div>
  )
}
