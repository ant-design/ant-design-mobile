import React, { FC, InputHTMLAttributes, useRef, useState } from 'react'
import { AddOutline } from 'antd-mobile-icons'
import { mergeProps } from '../../utils/with-default-props'
import ImageViewer, { ImageViewerShowHandler } from '../image-viewer'
import PreviewItem from './preview-item'
import { usePropsValue } from '../../utils/use-props-value'
import { useIsomorphicLayoutEffect, useUnmount } from 'ahooks'
import Space from '../space'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useConfig } from '../config-provider'
import type { ImageProps } from '../image'

export type TaskStatus = 'pending' | 'fail' | 'success'

export interface ImageUploadItem {
  key?: string | number
  url: string
  thumbnailUrl?: string
  extra?: any
}

type Task = {
  id: number
  url?: string
  file: File
  status: TaskStatus
}

export type UploadTask = Pick<Task, 'id' | 'status'>

export type ImageUploaderProps = {
  defaultValue?: ImageUploadItem[]
  value?: ImageUploadItem[]
  onChange?: (items: ImageUploadItem[]) => void
  onUploadQueueChange?: (tasks: UploadTask[]) => void
  accept?: string
  multiple?: boolean
  maxCount?: number
  onCountExceed?: (exceed: number) => void
  disableUpload?: boolean
  showUpload?: boolean
  deletable?: boolean
  capture?: InputHTMLAttributes<unknown>['capture']
  onPreview?: (index: number, item: ImageUploadItem) => void
  beforeUpload?: (
    file: File,
    files: File[]
  ) => Promise<File | null> | File | null
  upload: (file: File) => Promise<ImageUploadItem>
  onDelete?: (item: ImageUploadItem) => boolean | Promise<boolean> | void
  preview?: boolean
  showFailed?: boolean
  imageFit?: ImageProps['fit']
  children?: React.ReactNode
  renderItem?: (
    originNode: React.ReactElement,
    file: ImageUploadItem,
    fileList: ImageUploadItem[]
  ) => React.ReactNode
} & NativeProps<'--cell-size'>

const classPrefix = `adm-image-uploader`

const defaultProps = {
  disableUpload: false,
  deletable: true,
  showUpload: true,
  multiple: false,
  maxCount: 0,
  defaultValue: [] as ImageUploadItem[],
  accept: 'image/*',
  preview: true,
  showFailed: true,
  imageFit: 'cover',
}

export const ImageUploader: FC<ImageUploaderProps> = p => {
  const { locale } = useConfig()
  const props = mergeProps(defaultProps, p)
  const [value, setValue] = usePropsValue(props)

  const [tasks, setTasks] = useState<Task[]>([])

  useIsomorphicLayoutEffect(() => {
    setTasks(prev =>
      prev.filter(task => {
        if (task.url === undefined) return true
        return !value.some(fileItem => fileItem.url === task.url)
      })
    )
  }, [value])

  useIsomorphicLayoutEffect(() => {
    props.onUploadQueueChange?.(
      tasks.map(item => ({ id: item.id, status: item.status }))
    )
  }, [tasks])

  const idCountRef = useRef(0)

  const { maxCount, onPreview, renderItem } = props

  async function processFile(file: File, fileList: File[]) {
    const { beforeUpload } = props

    let transformedFile: File | null | undefined = file

    transformedFile = await beforeUpload?.(file, fileList)

    return transformedFile
  }

  function getFinalTasks(tasks: Task[]) {
    return props.showFailed
      ? tasks
      : tasks.filter(task => task.status !== 'fail')
  }

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist()
    const { files: rawFiles } = e.target
    if (!rawFiles) return
    let files = [].slice.call(rawFiles) as File[]
    e.target.value = '' // HACK: fix the same file doesn't trigger onChange

    if (props.beforeUpload) {
      const postFiles = files.map(file => {
        return processFile(file, files)
      })

      await Promise.all(postFiles).then(filesList => {
        files = filesList.filter(Boolean) as File[]
      })
    }

    if (files.length === 0) {
      return
    }

    if (maxCount > 0) {
      const exceed = value.length + files.length - maxCount
      if (exceed > 0) {
        files = files.slice(0, files.length - exceed)
        props.onCountExceed?.(exceed)
      }
    }

    const newTasks = files.map(
      file =>
        ({
          id: idCountRef.current++,
          status: 'pending',
          file,
        } as Task)
    )

    setTasks(prev => [...getFinalTasks(prev), ...newTasks])

    await Promise.all(
      newTasks.map(async currentTask => {
        try {
          const result = await props.upload(currentTask.file)
          setTasks(prev => {
            return prev.map(task => {
              if (task.id === currentTask.id) {
                return {
                  ...task,
                  status: 'success',
                  url: result.url,
                }
              }
              return task
            })
          })
          setValue(prev => {
            const newVal = { ...result }
            return [...prev, newVal]
          })
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
    ).catch(error => console.error(error))
  }

  const imageViewerHandlerRef = useRef<ImageViewerShowHandler | null>(null)

  function previewImage(index: number) {
    imageViewerHandlerRef.current = ImageViewer.Multi.show({
      images: value.map(fileItem => fileItem.url),
      defaultIndex: index,
      onClose: () => {
        imageViewerHandlerRef.current = null
      },
    })
  }

  useUnmount(() => {
    imageViewerHandlerRef.current?.close()
  })

  const finalTasks = getFinalTasks(tasks)

  const showUpload =
    props.showUpload &&
    (maxCount === 0 || value.length + finalTasks.length < maxCount)

  const renderImages = () => {
    return value.map((fileItem, index) => {
      const originNode = (
        <PreviewItem
          key={fileItem.key ?? index}
          url={fileItem.thumbnailUrl ?? fileItem.url}
          deletable={props.deletable}
          imageFit={props.imageFit}
          onClick={() => {
            if (props.preview) {
              previewImage(index)
            }
            onPreview && onPreview(index, fileItem)
          }}
          onDelete={async () => {
            const canDelete = await props.onDelete?.(fileItem)
            if (canDelete === false) return
            setValue(value.filter((x, i) => i !== index))
          }}
        />
      )
      return renderItem ? renderItem(originNode, fileItem, value) : originNode
    })
  }

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <Space className={`${classPrefix}-space`} wrap block>
        {renderImages()}
        {finalTasks.map(task => {
          return (
            <PreviewItem
              key={task.id}
              file={task.file}
              deletable={task.status !== 'pending'}
              status={task.status}
              imageFit={props.imageFit}
              onDelete={() => {
                setTasks(prev => prev.filter(x => x.id !== task.id))
              }}
            />
          )
        })}
        {showUpload && (
          <div className={`${classPrefix}-upload-button-wrap`}>
            {props.children ? (
              props.children
            ) : (
              <span
                className={`${classPrefix}-cell ${classPrefix}-upload-button`}
                role='button'
                aria-label={locale.ImageUploader.upload}
              >
                <span className={`${classPrefix}-upload-button-icon`}>
                  <AddOutline />
                </span>
              </span>
            )}
            {!props.disableUpload && (
              <input
                capture={props.capture}
                accept={props.accept}
                multiple={props.multiple}
                type='file'
                className={`${classPrefix}-input`}
                onChange={onChange}
                aria-hidden
              />
            )}
          </div>
        )}
      </Space>
    </div>
  )
}
