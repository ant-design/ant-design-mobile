export function generateIntArray(from: number, to: number) {
  const array: number[] = []
  for (let i = from; i <= to; i++) {
    array.push(i)
  }
  return array
}
