export type DateRange = [Date, Date] | null
export function convertValueToRange(
  selectionMode: 'single' | 'range' | undefined,
  value: Date | [Date, Date] | null
): DateRange {
  if (selectionMode === undefined) {
    return null
  }
  if (value === null) {
    return null
  }
  if (Array.isArray(value)) {
    return value
  }
  return [value, value]
}
