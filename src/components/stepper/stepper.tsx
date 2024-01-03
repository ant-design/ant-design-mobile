import classNames from 'classnames'
import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { MinusOutline, AddOutline } from 'antd-mobile-icons'
import { useMergedState } from 'rc-util'
import getMiniDecimal, {
  toFixed,
  type DecimalClass,
} from '@rc-component/mini-decimal'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import Input, { InputProps, InputRef } from '../input'
import Button from '../button'
import { useConfig } from '../config-provider'

const classPrefix = `adm-stepper`

type ValueProps<ValueType> = {
  allowEmpty: true
  value?: ValueType | null
  defaultValue?: ValueType | null
  onChange?: (value: ValueType | null) => void
}

type ValuePropsWithNull<ValueType> = {
  allowEmpty?: false
  value?: ValueType
  defaultValue?: ValueType
  onChange?: (value: ValueType) => void
}

export type BaseStepperProps<ValueType> = Pick<
  InputProps,
  'onFocus' | 'onBlur'
> &
  (ValuePropsWithNull<ValueType> | ValueProps<ValueType>) & {
    min?: ValueType
    max?: ValueType
    step?: ValueType
    digits?: number
    disabled?: boolean
    inputReadOnly?: boolean

    // Format & Parse
    parser?: (text: string) => ValueType
    formatter?: (value?: ValueType) => string
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

export type NumberStepperProps = BaseStepperProps<number> & {
  // stringMode
  stringMode?: false
}
export type StringStepperProps = BaseStepperProps<string> & {
  // stringMode
  stringMode: true
}

export type StepperProps = NumberStepperProps | StringStepperProps

export type StepperRef = Pick<InputRef, 'blur' | 'focus' | 'nativeElement'>

type DEFAULT_PROPS = 'step'
type MergedStepperProps<ValueType> = Omit<
  BaseStepperProps<ValueType>,
  DEFAULT_PROPS
> &
  Required<Pick<BaseStepperProps<ValueType>, DEFAULT_PROPS>> & {
    stringMode?: boolean
  }

const defaultProps = {
  step: 1,
  disabled: false,
  allowEmpty: false,
}

export function InnerStepper<ValueType extends number | string>(
  p: StepperProps,
  ref: React.ForwardedRef<StepperRef>
) {
  const props = mergeProps(defaultProps, p)
  const {
    defaultValue = 0 as ValueType,
    value,
    onChange,
    disabled,
    step,
    max,
    min,
    inputReadOnly,
    digits,
    stringMode,
    formatter,
    parser,
  } = props as MergedStepperProps<ValueType>

  const { locale } = useConfig()

  // ========================== Ref ==========================
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
    blur: () => {
      inputRef.current?.blur()
    },
    get nativeElement() {
      return inputRef.current?.nativeElement ?? null
    },
  }))

  // ========================== Parse / Format ==========================
  const fixedValue = (value: ValueType): string => {
    const fixedValue =
      digits !== undefined ? toFixed(value.toString(), '.', digits) : value

    return fixedValue.toString()
  }

  const getValueAsType = (value: DecimalClass) =>
    (stringMode ? value.toString() : value.toNumber()) as ValueType

  const parseValue = (text: string): string | null => {
    if (text === '') return null

    if (parser) {
      return String(parser(text))
    }

    const decimal = getMiniDecimal(text)
    return decimal.isInvalidate() ? null : decimal.toString()
  }

  const formatValue = (value: ValueType | null): string => {
    if (value === null) return ''

    return formatter ? formatter(value) : fixedValue(value)
  }

  // ======================== Value & InputValue ========================
  const [mergedValue, setMergedValue] = useMergedState<ValueType | null>(
    defaultValue,
    {
      value,
      onChange: nextValue => {
        onChange?.(nextValue as ValueType)
      },
    }
  )

  const [inputValue, setInputValue] = useState(() => formatValue(mergedValue))

  // >>>>> Value
  function setValueWithCheck(nextValue: DecimalClass) {
    if (nextValue.isNaN()) return

    let target = nextValue

    // Put into range
    if (min !== undefined) {
      const minDecimal = getMiniDecimal(min)
      if (target.lessEquals(minDecimal)) {
        target = minDecimal
      }
    }

    if (max !== undefined) {
      const maxDecimal = getMiniDecimal(max)
      if (maxDecimal.lessEquals(target)) {
        target = maxDecimal
      }
    }

    // Fix digits
    if (digits !== undefined) {
      target = getMiniDecimal(fixedValue(getValueAsType(target)))
    }

    setMergedValue(getValueAsType(target))
  }

  // >>>>> Input
  const handleInputChange = (v: string) => {
    setInputValue(v)
    const valueStr = parseValue(v)

    if (valueStr === null) {
      if (props.allowEmpty) {
        setMergedValue(null)
      } else {
        setMergedValue(defaultValue)
      }
    } else {
      setValueWithCheck(getMiniDecimal(valueStr))
    }
  }

  // ============================== Focus ===============================
  const [focused, setFocused] = useState(false)
  const inputRef = React.useRef<InputRef>(null)

  function triggerFocus(nextFocus: boolean) {
    setFocused(nextFocus)

    // We will convert value to original text when focus
    if (nextFocus) {
      setInputValue(
        mergedValue !== null && mergedValue !== undefined
          ? String(mergedValue)
          : ''
      )
    }
  }

  useEffect(() => {
    if (focused) {
      inputRef.current?.nativeElement?.select?.()
    }
  }, [focused])

  // Focus change to format value
  useEffect(() => {
    if (!focused) {
      setInputValue(formatValue(mergedValue))
    }
  }, [focused, mergedValue, digits])

  // ============================ Operations ============================
  const handleOffset = (positive: boolean) => {
    let stepValue = getMiniDecimal(step)
    if (!positive) {
      stepValue = stepValue.negate()
    }

    setValueWithCheck(
      getMiniDecimal(mergedValue ?? 0).add(stepValue.toString())
    )
  }

  const handleMinus = () => {
    handleOffset(false)
  }

  const handlePlus = () => {
    handleOffset(true)
  }

  const minusDisabled = () => {
    if (disabled) return true
    if (mergedValue === null) return false
    if (min !== undefined) {
      return mergedValue <= min
    }
    return false
  }

  const plusDisabled = () => {
    if (disabled) return true
    if (mergedValue === null) return false
    if (max !== undefined) {
      return mergedValue >= max
    }
    return false
  }

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
          ref={inputRef}
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
          aria-valuemax={Number(max)}
          aria-valuemin={Number(min)}
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

export const Stepper = forwardRef(InnerStepper)
