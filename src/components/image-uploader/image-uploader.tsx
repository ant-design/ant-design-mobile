import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { mergeProps } from '../../utils/with-default-props'
import ImageViewer from '../image-viewer'
import PreviewItem from './preview-item'
import { useNewControllableValue } from '../../utils/use-controllable-value'
import { usePersistFn } from 'ahooks'
import Space from '../space'
import { convertPx } from '../../utils/convert-px'

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

export type ImageUploaderProps = {
  defaultValue?: FileItem[]
  value?: FileItem[]
  onChange?: (fileList: FileItem[]) => void
  accept?: string
  multiple?: boolean
  maxCount?: number
  onCountExceed?: (exceed: number) => void
  disableUpload?: boolean
  showUpload?: boolean
  deletable?: boolean
  capture?: string
  onPreview?: (index: number) => void
  beforeUpload?: (file: File[]) => Promise<File[]> | File[]
  upload: (file: File) => Promise<FileItem>
}

const classPrefix = `adm-image-uploader`

const defaultProps = {
  disableUpload: false,
  deletable: true,
  showUpload: true,
  multiple: false,
  maxCount: 0,
  defaultValue: [] as FileItem[],
  capture: '',
  accept: 'image/*',
}

export const ImageUploader: FC<ImageUploaderProps> = p => {
  const props = mergeProps(defaultProps, p)
  const [value, setValue] = useNewControllableValue(props)
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

  const idCountRef = useRef(0)

  const { maxCount, onPreview } = props

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { files: rawFiles } = e.target
    if (!rawFiles) return
    let files = [].slice.call(rawFiles) as File[]

    if (props.beforeUpload) {
      files = await props.beforeUpload(files)
    }

    if (files.length === 0) {
      return
    }

    const exceed = value.length + files.length - maxCount
    if (exceed > 0) {
      files = files.slice(0, maxCount - exceed)
      props.onCountExceed?.(exceed)
    }

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
  }

  function previewImage(index: number) {
    ImageViewer.Multi.show({
      images: value.map(fileItem => fileItem.url),
      defaultIndex: index,
    })
    onPreview && onPreview(index)
  }

  const showUpload =
    props.showUpload &&
    (maxCount === 0 || value.length + tasks.length < maxCount)

  return (
    <div className={classPrefix}>
      <Space size={convertPx(12)} wrap>
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
            className={`${classPrefix}-cell ${classPrefix}-upload-button`}
            role='button'
          >
            <span className={`${classPrefix}-upload-button-icon`}>
              <PlusOutlined />
            </span>
            {!props.disableUpload && (
              <input
                capture={props.capture}
                accept={props.accept}
                multiple={props.multiple}
                type='file'
                className={`${classPrefix}-input`}
                onChange={onChange}
              />
            )}
          </span>
        )}
      </Space>
    </div>
  )
}
