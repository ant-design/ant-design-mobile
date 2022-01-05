import React, {
  FC,
  InputHTMLAttributes,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { AddOutline } from 'antd-mobile-icons'
import { mergeProps } from '../../utils/with-default-props'
import ImageViewer, { ImageViewerHandler } from '../image-viewer'
import PreviewItem from './preview-item'
import { usePropsValue } from '../../utils/use-props-value'
import { useMemoizedFn, useUnmount } from 'ahooks'
import Space from '../space'
import { NativeProps, withNativeProps } from '../../utils/native-props'

export type TaskStatus = 'pending' | 'fail'

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

export type ImageUploaderProps = {
  defaultValue?: ImageUploadItem[]
  value?: ImageUploadItem[]
  onChange?: (items: ImageUploadItem[]) => void
  accept?: string
  multiple?: boolean
  maxCount?: number
  onCountExceed?: (exceed: number) => void
  disableUpload?: boolean
  showUpload?: boolean
  deletable?: boolean
  capture?: InputHTMLAttributes<unknown>['capture']
  onPreview?: (index: number) => void
  beforeUpload?: (file: File[]) => Promise<File[]> | File[]
  upload: (file: File) => Promise<ImageUploadItem>
  onDelete?: (item: ImageUploadItem) => boolean | Promise<boolean> | void
  preview?: boolean
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
}

export const ImageUploader: FC<ImageUploaderProps> = p => {
  const props = mergeProps(defaultProps, p)
  const [value, setValue] = usePropsValue(props)
  const updateValue = useMemoizedFn(
    (updater: (prev: ImageUploadItem[]) => ImageUploadItem[]) => {
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
    e.persist()
    const { files: rawFiles } = e.target
    if (!rawFiles) return
    let files = [].slice.call(rawFiles) as File[]

    if (props.beforeUpload) {
      files = await props.beforeUpload(files)
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
          updateValue(prev => {
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

    e.target.value = '' // HACK: fix the same file doesn't trigger onChange
  }

  const imageViewerHandlerRef = useRef<ImageViewerHandler | null>(null)

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

  const showUpload =
    props.showUpload &&
    (maxCount === 0 || value.length + tasks.length < maxCount)

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <Space className={`${classPrefix}-space`} wrap>
        {value.map((fileItem, index) => (
          <PreviewItem
            key={fileItem.key ?? index}
            url={fileItem.thumbnailUrl ?? fileItem.url}
            deletable={props.deletable}
            onClick={() => {
              if (props.preview) {
                previewImage(index)
              }
              onPreview && onPreview(index)
            }}
            onDelete={async () => {
              const canDelete = await props.onDelete?.(fileItem)
              if (canDelete === false) return
              setValue(value.filter((x, i) => i !== index))
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
              setTasks(tasks.filter(x => x.id !== task.id))
            }}
          />
        ))}
        {showUpload && (
          <div className={`${classPrefix}-upload-button-wrap`}>
            {props.children ? (
              props.children
            ) : (
              <span
                className={`${classPrefix}-cell ${classPrefix}-upload-button`}
                role='button'
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
              />
            )}
          </div>
        )}
      </Space>
    </div>
  )
}
