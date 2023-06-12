/**
 * Rounds a specific value to the next or previous step
 *
 * @param value the value to round
 * @param from the number that stepping started from
 * @param step the specified step
 */
export function roundValueToStep(value: number, from: number, step: number) {
  const nextValue = Math.round((value - from) / step) * step + from
  const precision = countDecimalPlaces(step)

  return toPrecision(nextValue, precision)
}

/**
 * Counts the number of decimal places a number has
 *
 * @param value the decimal value to count
 */
function countDecimalPlaces(value: number) {
  if (!Number.isFinite(value)) return 0

  let e = 1
  let p = 0
  while (Math.round(value * e) / e !== value) {
    e *= 10
    p += 1
  }
  return p
}

/**
 * Converts a value to a specific precision (or decimal points).
 *
 * Returns a string representing a number in fixed-point notation.
 *
 * @param value the value to convert
 * @param precision the precision or decimal points
 */
function toPrecision(value: number, precision?: number) {
  let nextValue: string | number = toNumber(value)
  const scaleFactor = 10 ** (precision ?? 10)
  nextValue = Math.round(nextValue * scaleFactor) / scaleFactor
  return precision ? nextValue.toFixed(precision) : nextValue.toString()
}

function toNumber(value: any) {
  const num = parseFloat(value)
  return isNotNumber(num) ? 0 : num
}

function isNotNumber(value: any) {
  return (
    typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value)
  )
}
