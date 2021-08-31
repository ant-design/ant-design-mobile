import { FileItem } from '.'

export type PromiseOrNot<T> = T | Promise<T>

export function toArray<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item
  }

  return [item]
}

export function isOversize(
  items: FileItem | FileItem[],
  maxSize: number
): boolean {
  return toArray(items).some(item => {
    if (item.file) {
      return item.file.size > maxSize
    }
    return false
  })
}

export function getOverCount(
  maxCount: number,
  fileList: FileItem[],
  files: File[]
) {
  const remainCount = maxCount! - fileList?.length!

  return remainCount - files.length
}
