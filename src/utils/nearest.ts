export function nearest(arr: number[], target: number) {
  // 找到最接近tartget
  return arr.reduce((pre, cur) => {
    return Math.abs(pre - target) < Math.abs(cur - target) ? pre : cur
  })
}
