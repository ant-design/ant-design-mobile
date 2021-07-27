import {PlusOutlined} from '@ant-design/icons'
import React, {useRef} from 'react'
import {isPromise} from '../../utils/validate'
import {withDefaultProps} from '../../utils/with-default-props'
import {readFileContent, toArray} from './util'

type FileType = 'image' | 'video' | 'file'
type FileStatus = 'loading' | 'error' | 'success' | ''

interface FileItem {
  url?: string
  type?: FileType
  status?: FileStatus
  file?: File
  content?: string
  deletable?: boolean
}

type PromiseOrNot<T> = T | Promise<T>

export type UploaderBeforeRead = (
  file: File | File[]
) => PromiseOrNot<File | File[] | undefined>

interface Props {
  fileList?: FileItem[]
  accept?: FileType | 'all'
  disabled?: boolean
  resultType?: string
  showUpload?: boolean // 是否展示文件上传按钮
  deletable?: boolean // 是否展示删除按钮
  capture?: string[]
  maxSize?: number
  maxCount?: number
  delete?: (index: number) => void
  onOversize?: (files: FileItem[]) => void // 超出文件大小之后的回调
  onOverCount?: (overCount: number) => void // 超过最大数量的回调，参数是超过的个数
  onBeforeRead?: UploaderBeforeRead
  onAfterRead?: (files: FileItem[]) => void
}

const classPrefix = `am-uploader`

const defaultProps: Props = {
  maxCount: Number.MAX_SAFE_INTEGER,
  maxSize: Number.MAX_SAFE_INTEGER,
  fileList: [],
  resultType: 'dataUrl',
}

const Uploader = withDefaultProps(defaultProps)<Props>(props => {
  const inputRef = useRef<HTMLInputElement>(null)

  const {fileList = [], maxCount, maxSize} = props

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    let {files} = e.target

    if (!files?.length) return

    const file =
      files.length === 1 ? files[0] : ([].slice.call(files) as File[])

    if (props.onBeforeRead) {
      const result = props.onBeforeRead(file)

      if (!result) return

      if (isPromise(result)) {
        result
          .then(data => {
            if (data) {
              readFile(data)
            } else {
              readFile(file)
            }
          })
          .catch(console.log) // TODO
        return
      }
    }

    readFile(file)
  }

  function getOverCount(maxCount: number, fileList: FileItem[], files: File[]) {
    const remainCount = maxCount! - fileList?.length!

    return remainCount - files.length
  }

  function readFile(files: File | File[]) {
    const {maxCount, fileList, resultType} = props

    if (Array.isArray(files)) {
      const overCount = getOverCount(maxCount!, fileList!, files)

      if (overCount > 0) {
        props.onOverCount && props.onOverCount(overCount)
        return
      }

      Promise.all(
        files.map(file => readFileContent(file, resultType as any))
      ).then((contents: any) => {
        const newFileList = files.map((file, index) => {
          const result: FileItem = {file, status: '', content: ''}

          if (contents[index]) {
            result.content = contents[index]
          }

          return result
        })

        // TODO oversize
        onAfterRead(newFileList, false)
      })
    } else {
      readFileContent(files, resultType as any).then(content => {
        const result: FileItem = {
          file: files as File,
          status: '',
        }

        if (content) {
          result.content = content
        }

        // TODO
        onAfterRead(result, false)
      })
    }
  }
  function onAfterRead(files: FileItem | FileItem[], oversize: boolean) {
    // this.resetInput();
    let validFiles = toArray(files)

    if (oversize) {
      let oversizeFiles = toArray(files)
      if (Array.isArray(files)) {
        oversizeFiles = []
        validFiles = []
        files.forEach(item => {
          if (item.file) {
            if (item.file.size > maxSize!) {
              oversizeFiles.push(item)
            } else {
              validFiles.push(item)
            }
          }
        })
      } else {
        validFiles = []
      }
      if (props.onOversize) {
        props.onOversize(oversizeFiles)
      }
    }

    const isValidFiles = Array.isArray(validFiles)
      ? Boolean(validFiles.length)
      : Boolean(validFiles)

    if (isValidFiles) {
      if (props.onAfterRead) {
        props.onAfterRead([...fileList, ...toArray(validFiles)])
      }
    }
  }

  return (
    <div className={`${classPrefix}-container`}>
      {fileList.map((file, index) => {
        return (
          <div key={index} className={`${classPrefix}-card`}>
            <img src={file.url || file.content} />
          </div>
        )
      })}
      <span
        className={`${classPrefix}-card ${classPrefix}-select-picture`}
        role='button'
      >
        <span className={'addition'}>
          {' '}
          <PlusOutlined />
        </span>
        <input
          ref={inputRef}
          type='file'
          className={'file-input'}
          onChange={onChange}
        />
      </span>
    </div>
  )
})

export default Uploader
