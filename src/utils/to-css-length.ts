export function toCSSLength(val: string | number) {
  return typeof val === 'number' ? `${val}px` : val
}
