import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { mergeProps } from '../../utils/with-default-props'
import { PromiseOrNot } from './util'
import ImageViewer from '../image-viewer'
import PreviewItem from './preview-item'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { usePersistFn } from 'ahooks'

export type TaskStatus = 'pending' | 'fail'

export interface FileItem {
  url: string
}

type Task = {
  id: number
  url?: string
  file: File
  status: TaskStatus
}

export type UploadResult = {
  url: string
}

export type ImageUploaderProps = {
  defaultValue?: FileItem[]
  value?: FileItem[]
  onChange?: (fileList: FileItem[]) => void

  accept?: string
  disableUpload?: boolean
  showUpload?: boolean
  deletable?: boolean
  capture?: string
  // maxSize?: number
  maxCount?: number
  onPreview?: (index: number) => void
  // onDelete?: (files: FileItem[], index: number) => void
  // onOversize?: (files: FileItem[]) => void
  onOverCount?: (overCount: number) => void
  onBeforeUpload?: (file: File[]) => PromiseOrNot<File[]>
  // onAfterRead?: (files: FileItem[]) => void
  upload: (file: File) => Promise<UploadResult>
}

const classPrefix = `adm-image-uploader`

const defaultProps = {
  disableUpload: false,
  deletable: true,
  showUpload: true,
  maxCount: Number.MAX_SAFE_INTEGER,
  defaultValue: [] as FileItem[],
  capture: '',
  accept: 'image/*',
}

export const ImageUploader: FC<ImageUploaderProps> = p => {
  const props = mergeProps(defaultProps, p)
  const [value, setValue] = useNewControllableValue(props)
  const fileList = useState()
  const updateValue = usePersistFn(
    (updater: (prev: FileItem[]) => FileItem[]) => {
      setValue(updater(value))
    }
  )

  const [tasks, setTasks] = useState<Task[]>([])

  useLayoutEffect(() => {
    setTasks(prev =>
      prev.filter(task => {
        if (task.url === undefined) return true
        return !value.some(fileItem => fileItem.url === task.url)
      })
    )
  }, [value])

  // const getKey = useCreation(() => {
  //   let count = 0
  //   const keyMap = new WeakMap<FileItem, number>()
  //   return function (fileItem: FileItem) {
  //     let key = keyMap.get(fileItem)
  //     if (key === undefined) {
  //       key = count
  //       count++
  //       keyMap.set(fileItem, key)
  //     }
  //     return key
  //   }
  // }, [])
  const idCountRef = useRef(0)

  const { maxCount, onPreview } = props

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    let { files: rawFiles } = e.target
    if (!rawFiles) return
    let files = [].slice.call(rawFiles) as File[]

    if (props.onBeforeUpload) {
      files = await props.onBeforeUpload(files)
    }

    if (files.length === 0) {
      return
    }

    // const overCount = getOverCount(maxCount!, fileList!, files)
    //
    // if (overCount > 0) {
    //   props.onOverCount && props.onOverCount(overCount)
    //   return
    // }

    const newTasks = files.map(
      file =>
        ({
          id: idCountRef.current++,
          status: 'pending',
          file,
        } as Task)
    )

    setTasks(prev => [...prev, ...newTasks])

    await Promise.all(
      newTasks.map(async currentTask => {
        try {
          const result = await props.upload(currentTask.file)
          setTasks(prev => {
            return prev.map(task => {
              if (task.id === currentTask.id) {
                return {
                  ...task,
                  url: result.url,
                }
              }
              return task
            })
          })
          updateValue(prev => [
            ...prev,
            {
              url: result.url,
            },
          ])
        } catch (e) {
          setTasks(prev => {
            return prev.map(task => {
              if (task.id === currentTask.id) {
                return {
                  ...task,
                  status: 'fail',
                }
              }
              return task
            })
          })
          throw e
        }
      })
    )

    // const fileItems = files.map((file, index) => {
    //   const result: FileItem = { file, status: 'pending' }
    //   return result
    // })
    // onAfterRead(fileItems, isOversize(fileItems, maxSize))
  }

  function previewImage(index: number) {
    ImageViewer.Multi.show({
      images: value.map(fileItem => fileItem.url),
      defaultIndex: index,
    })
    onPreview && onPreview(index)
  }

  const showUpload = props.showUpload && maxCount && fileList.length < maxCount

  return (
    <div className={`${classPrefix}-container`}>
      {value.map((fileItem, index) => (
        <PreviewItem
          key={fileItem.url}
          url={fileItem.url}
          deletable={props.deletable}
          onClick={() => previewImage(index)}
          onDelete={() => {
            setValue(value.filter(x => x.url !== fileItem.url))
          }}
        />
      ))}
      {tasks.map(task => (
        <PreviewItem
          key={task.id}
          file={task.file}
          deletable={task.status !== 'pending'}
          status={task.status}
          onDelete={() => {
            setValue(value.filter(x => x.url !== task.url))
          }}
        />
      ))}
      {showUpload && (
        <span
          className={`${classPrefix}-card ${classPrefix}-select-picture`}
          role='button'
        >
          <span className={'addition'}>
            <PlusOutlined />
          </span>
          {!props.disableUpload && (
            <input
              capture={props.capture}
              accept={props.accept}
              type='file'
              className={'file-input'}
              onChange={onChange}
            />
          )}
        </span>
      )}
    </div>
  )
}
