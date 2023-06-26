// useWheel 的滚动数据特殊处理
export function wheelBound(
  position: number,
  min: number | undefined,
  max: number | undefined
) {
  let ret = position

  if (min !== undefined && max !== undefined) {
    if (ret > 0) {
      ret = Math.max(ret, min)

      ret = Math.min(ret, max)
    }
    if (ret < 0) {
      ret = Math.min(ret, min)
      ret = Math.max(ret, min)
    }
  }

  return ret
}
