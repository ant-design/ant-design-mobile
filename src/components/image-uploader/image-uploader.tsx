import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { isPromise } from '../../utils/validate'
import { withDefaultProps } from '../../utils/with-default-props'
import {
  getOverCount,
  isOversize,
  PromiseOrNot,
  readFileContent,
  toArray,
} from './util'
import ImageViewer from '../image-viewer'
import PreviewItem from './preview-item'

type FileStatus = 'loading' | 'error' | 'success' | ''

export interface FileItem {
  url?: string
  status?: FileStatus
  file?: File
  content?: string
  deletable?: boolean
}

export type UploaderBeforeRead = (
  file: File | File[]
) => PromiseOrNot<File | File[] | undefined>

interface Props {
  fileList?: FileItem[]
  accept?: string
  disabled?: boolean
  resultType?: string
  showUpload?: boolean // 是否展示文件上传按钮
  deletable?: boolean // 是否展示删除按钮
  capture?: string
  maxSize?: number
  maxCount?: number
  onChange?: (files: FileItem[]) => void
  onPreview?: (index: number) => void
  onDelete?: (files: FileItem[], index: number) => void
  onOversize?: (files: FileItem[]) => void // 超出文件大小之后的回调
  onOverCount?: (overCount: number) => void // 超过最大数量的回调，参数是超过的个数
  onBeforeRead?: UploaderBeforeRead
  onAfterRead?: (files: FileItem[]) => void
}

const classPrefix = `am-uploader`

const defaultProps: Props = {
  disabled: false,
  deletable: true,
  showUpload: true,
  maxCount: Number.MAX_SAFE_INTEGER,
  maxSize: Number.MAX_SAFE_INTEGER,
  fileList: [],
  capture: '',
  resultType: 'dataUrl',
  accept: 'image/*',
}

const Uploader = withDefaultProps(defaultProps)<Props>(props => {
  const {
    fileList = [],
    maxCount,
    maxSize,
    deletable,
    capture,
    accept,
    onOversize,
    onPreview,
    onDelete,
  } = props

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    let { files } = e.target

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

  function readFile(files: File | File[]) {
    const { maxCount, fileList, resultType } = props

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
          const result: FileItem = { file, status: '', content: '' }

          if (contents[index]) {
            result.content = contents[index]
          }

          return result
        })

        onAfterRead(newFileList, isOversize(newFileList, maxSize!))
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

        onAfterRead(result, isOversize(result, maxSize!))
      })
    }
  }

  function onAfterRead(files: FileItem | FileItem[], oversize: boolean) {
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

      onOversize && onOversize(oversizeFiles)
    }

    const isValidFiles = Array.isArray(validFiles)
      ? Boolean(validFiles.length)
      : Boolean(validFiles)

    if (isValidFiles) {
      if (props.onChange) {
        props.onChange([...fileList, ...toArray(validFiles)])
      }

      if (props.onAfterRead) {
        props.onAfterRead([...fileList, ...toArray(validFiles)])
      }
    }
  }

  function previewImage(index: number) {
    ImageViewer.Multi.show({
      images: fileList.map(file => file.content! || file.url!),
      defaultIndex: index,
    })
    onPreview && onPreview(index)
  }

  function deteleImage(index: number) {
    if (!onDelete) {
      console.warn('Please add a delete method!')
    }

    const newFileList = fileList.reduce((total, item, i) => {
      if (index !== i) {
        return [...total, item]
      }

      return total
    }, [])

    onDelete && onDelete(newFileList, index)
  }

  function renderPreviewList() {
    return (
      <>
        {fileList.map((file, index) => {
          return (
            <PreviewItem
              {...file}
              key={index}
              deletable={deletable}
              previewImage={() => previewImage(index)}
              deleteImage={() => deteleImage(index)}
            />
          )
        })}
      </>
    )
  }

  function renderUpload() {
    return (
      showUpload && (
        <span
          className={`${classPrefix}-card ${classPrefix}-select-picture`}
          role='button'
        >
          <span className={'addition'}>
            <PlusOutlined />
          </span>
          {!props.disabled && (
            <input
              capture={capture}
              accept={accept}
              type='file'
              className={'file-input'}
              onChange={onChange}
            />
          )}
        </span>
      )
    )
  }

  const showUpload = props.showUpload && maxCount && fileList.length < maxCount

  return (
    <div className={`${classPrefix}-container`}>
      {renderPreviewList()}
      {renderUpload()}
    </div>
  )
})

export default Uploader
