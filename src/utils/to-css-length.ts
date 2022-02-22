export function toCSSLength(val: string | number) {
  // 修复 css 属性
  return typeof val === 'number' ? `${val}px` : val
}
