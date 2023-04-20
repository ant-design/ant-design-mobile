import { bound } from './bound'

export function rubberband(
  distance: number,
  dimension: number,
  constant: number
) {
  return (distance * dimension * constant) / (dimension + constant * distance)
}

export function rubberbandIfOutOfBounds(
  position: number,
  min: number,
  max: number,
  dimension: number,
  constant = 0.15
) {
  if (constant === 0) return bound(position, min, max)
  if (position < min)
    return -rubberband(min - position, dimension, constant) + min
  if (position > max)
    return +rubberband(position - max, dimension, constant) + max
  return position
}

/**
 * 橡皮筋效果。
 * @param {number} offset 手指偏移量（原始偏移量）
 * @param {number} height 滚动容器的高度
 * @returns {number} 实际偏移量
 */
export function rubberBanding(offset: number, height: number): number {
  //ratio为一个因子。取值为0.55时的表现约等于ios橡皮筋效果。
  //分析见：https://medium.com/@esskeetit/how-uiscrollview-works-e418adc47060 中的 Spring Animation 章节。
  //原公式来源：https://twitter.com/chpwn/status/285540192096497664
  const ratio = 0.55
  return (1.0 - 1.0 / ((ratio * offset) / height + 1.0)) * height
}
