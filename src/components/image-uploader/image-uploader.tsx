import { useIsomorphicLayoutEffect, useSize, useUnmount } from 'ahooks'
import { AddOutline, CloseOutline } from 'antd-mobile-icons'
import type {
  CSSProperties,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { measureCSSLength } from '../../utils/measure-css-length'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import Grid, { GridProps } from '../grid'
import type { ImageProps } from '../image'
import ImageViewer, { ImageViewerShowHandler } from '../image-viewer'
import Space from '../space'
import PreviewItem from './preview-item'

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
  columns?: GridProps['columns']
  onChange?: (items: ImageUploadItem[]) => void
  onUploadQueueChange?: (tasks: UploadTask[]) => void
  accept?: string
  multiple?: boolean
  maxCount?: number
  onCountExceed?: (exceed: number) => void
  disableUpload?: boolean
  showUpload?: boolean
  deletable?: boolean
  deleteIcon?: ReactNode
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
  children?: ReactNode
  renderItem?: (
    originNode: ReactElement,
    file: ImageUploadItem,
    fileList: ImageUploadItem[]
  ) => ReactNode
} & NativeProps<'--cell-size' | '--gap' | '--gap-vertical' | '--gap-horizontal'>

export interface ImageUploaderRef {
  nativeElement: HTMLInputElement | null
}

const classPrefix = `adm-image-uploader`

const defaultProps = {
  disableUpload: false,
  deletable: true,
  deleteIcon: <CloseOutline className={`${classPrefix}-cell-delete-icon`} />,
  showUpload: true,
  multiple: false,
  maxCount: 0,
  defaultValue: [] as ImageUploadItem[],
  accept: 'image/*',
  preview: true,
  showFailed: true,
  imageFit: 'cover',
}

export const ImageUploader = forwardRef<ImageUploaderRef, ImageUploaderProps>(
  (p, ref) => {
    const { locale } = useConfig()
    const props = mergeProps(defaultProps, p)
    const { columns } = props
    const [value, setValue] = usePropsValue(props)

    const [tasks, setTasks] = useState<Task[]>([])

    const containerRef = useRef<HTMLDivElement>(null)

    const containerSize = useSize(containerRef)
    const gapMeasureRef = useRef<HTMLDivElement>(null)
    const [cellSize, setCellSize] = useState<number>(80)

    const inputRef = useRef<HTMLInputElement>(null)

    useIsomorphicLayoutEffect(() => {
      const gapMeasure = gapMeasureRef.current
      if (columns && containerSize && gapMeasure) {
        const width = containerSize.width
        const gap = measureCSSLength(
          window.getComputedStyle(gapMeasure).getPropertyValue('height')
        )
        setCellSize((width - gap * (columns - 1)) / columns)
      }
    }, [containerSize?.width])

    const style: CSSProperties & {
      '--cell-size': string
    } = {
      '--cell-size': cellSize + 'px',
    }

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
        const postFiles = files.map(file => processFile(file, files))

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
          }) as Task
      )

      setTasks(prev => [...getFinalTasks(prev), ...newTasks])
      const newVal: ImageUploadItem[] = []
      await Promise.all(
        newTasks.map(async (currentTask, index) => {
          try {
            const result = await props.upload(currentTask.file)
            newVal[index] = result
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
            console.error(e)
          }
        })
      )
      setValue(prev => prev.concat(newVal).filter(Boolean))
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
            deleteIcon={props.deleteIcon}
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

    const contentNode = (
      <>
        {renderImages()}
        {tasks.map(task => {
          if (!props.showFailed && task.status === 'fail') {
            return null
          }
          return (
            <PreviewItem
              key={task.id}
              file={task.file}
              deletable={task.status !== 'pending'}
              deleteIcon={props.deleteIcon}
              status={task.status}
              imageFit={props.imageFit}
              onDelete={() => {
                setTasks(tasks.filter(x => x.id !== task.id))
              }}
            />
          )
        })}
        <div
          className={`${classPrefix}-upload-button-wrap`}
          style={showUpload ? undefined : { display: 'none' }}
        >
          {props.children || (
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
              aria-label={locale.ImageUploader.upload}
              ref={inputRef}
              capture={props.capture}
              accept={props.accept}
              multiple={props.multiple}
              type='file'
              className={`${classPrefix}-input`}
              onChange={onChange}
            />
          )}
        </div>
      </>
    )

    useImperativeHandle(ref, () => ({
      get nativeElement() {
        return inputRef.current
      },
    }))

    return withNativeProps(
      props,
      <div className={classPrefix} ref={containerRef}>
        {columns ? (
          <Grid
            className={`${classPrefix}-grid`}
            columns={columns}
            style={style}
          >
            <div className={`${classPrefix}-gap-measure`} ref={gapMeasureRef} />
            {contentNode.props.children}
          </Grid>
        ) : (
          <Space className={`${classPrefix}-space`} wrap block>
            {contentNode.props.children}
          </Space>
        )}
      </div>
    )
  }
)
