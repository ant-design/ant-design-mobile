export type Matrix = readonly [number, number, number, number, number, number]

export const create = (): Matrix => {
  return [1, 0, 0, 1, 0, 0]
}

export const getTranslateX = (m: Matrix): number => {
  return m[4]
}

export const getTranslateY = (m: Matrix): number => {
  return m[5]
}

export const getScaleX = (m: Matrix): number => {
  return m[0]
}

export const getScaleY = (m: Matrix): number => {
  return m[3]
}

export const translate = (m: Matrix, x: number, y: number): Matrix => {
  return multiply([1, 0, 0, 1, x, y], m)
}

export const scale = (m: Matrix, scaleX: number, scaleY = scaleX): Matrix => {
  return multiply([scaleX, 0, 0, scaleY, 0, 0], m)
}

export const apply = (
  m: Matrix,
  [ox, oy]: [number, number]
): [number, number] => {
  return [m[0] * ox + m[2] * oy + m[4], m[1] * ox + m[3] * oy + m[5]]
}

export const multiply = (m1: Matrix, m2: Matrix): Matrix => {
  return [
    m1[0] * m2[0] + m1[2] * m2[1],
    m1[1] * m2[0] + m1[3] * m2[1],
    m1[0] * m2[2] + m1[2] * m2[3],
    m1[1] * m2[2] + m1[3] * m2[3],
    m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
    m1[1] * m2[4] + m1[3] * m2[5] + m1[5],
  ]
}
