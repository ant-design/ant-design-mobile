export type UploaderResultType = 'dataUrl' | 'text' | 'file'

export function readFileContent(file: File, resultType: UploaderResultType) {
  return new Promise<string | void>(resolve => {
    if (resultType === 'file') {
      resolve()
      return
    }

    const reader = new FileReader()

    reader.onload = event => {
      resolve((event.target as FileReader).result as string)
    }

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file)
    } else if (resultType === 'text') {
      reader.readAsText(file)
    }
  })
}

export type UploaderFileListItem = {
  url?: string
  file?: File
  content?: string
  status?: '' | 'uploading' | 'done' | 'failed'
  deletable?: boolean
}

export function toArray<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item
  }

  return [item]
}
