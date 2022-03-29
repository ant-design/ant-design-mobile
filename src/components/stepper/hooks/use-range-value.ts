import getMiniDecimal, {
  DecimalClass,
} from 'rc-input-number/es/utils/MiniDecimal'
import { useMemo } from 'react'
import { StepperProps } from '../stepper'

const getDecimalIfValidate = (value: number) => {
  const decimal = getMiniDecimal(value)
  return decimal.isInvalidate() ? null : decimal
}

const useRangeValue = ({
  max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
}: StepperProps) => {
  const maxDecimal = useMemo(() => getDecimalIfValidate(max), [max])

  const minDecimal = useMemo(() => getDecimalIfValidate(min), [min])

  const getRangeValue = (target: DecimalClass) => {
    // target > max
    if (maxDecimal && !target.lessEquals(maxDecimal)) {
      return maxDecimal
    }

    // target < min
    if (minDecimal && !minDecimal.lessEquals(target)) {
      return minDecimal
    }

    return null
  }

  /**
   * Check value is in [min, max] range
   */
  const isInRange = (target: DecimalClass) => !getRangeValue(target)

  return {
    max: maxDecimal,
    min: minDecimal,
    getRangeValue,
    isInRange,
  }
}

export default useRangeValue
