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
