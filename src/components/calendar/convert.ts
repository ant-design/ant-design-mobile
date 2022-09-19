import dayjs from 'dayjs'
export type DateRange = [Date, Date] | null
export type Page = { month: number; year: number }
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
export function convertPageToDayjs(page: Page) {
  return dayjs()
    .year(page.year)
    .month(page.month - 1)
    .date(1)
}
