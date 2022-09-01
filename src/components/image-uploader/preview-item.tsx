import React, { FC, useMemo, useRef } from 'react'
import { CloseOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import { TaskStatus } from './image-uploader'
import Image from '../image'
import SpinLoading from '../spin-loading'
import { useConfig } from '../config-provider'
import type { ImageProps } from '../image'
import { useUnmount } from 'ahooks'

type Props = {
  onClick?: () => void
  onDelete?: () => void
  deletable: boolean
  url?: string
  file?: File
  status?: TaskStatus
  imageFit: ImageProps['fit']
}

const classPrefix = `adm-image-uploader`

const PreviewItem: FC<Props> = props => {
  const { locale } = useConfig()
  const { url, file, deletable, onDelete, imageFit } = props
  const fileObjectURLRef = useRef('')
  const src = useMemo(() => {
    if (url) {
      return url
    }
    if (file) {
      fileObjectURLRef.current = URL.createObjectURL(file)
      return fileObjectURLRef.current
    }
    return ''
  }, [url, file])

  useUnmount(() => {
    URL.revokeObjectURL(fileObjectURLRef.current)
    fileObjectURLRef.current = ''
  })

  function renderLoading() {
    return (
      props.status === 'pending' && (
        <div className={`${classPrefix}-cell-mask`}>
          <span className={`${classPrefix}-cell-loading`}>
            <SpinLoading color='white' />
            <span className={`${classPrefix}-cell-mask-message`}>
              {locale.ImageUploader.uploading}
            </span>
          </span>
        </div>
      )
    )
  }

  function renderDelete() {
    return (
      deletable && (
        <span className={`${classPrefix}-cell-delete`} onClick={onDelete}>
          <CloseOutline className={`${classPrefix}-cell-delete-icon`} />
        </span>
      )
    )
  }

  return (
    <div
      className={classNames(
        `${classPrefix}-cell`,
        props.status === 'fail' && `${classPrefix}-cell-fail`
      )}
    >
      <Image
        className={`${classPrefix}-cell-image`}
        src={src}
        fit={imageFit}
        onClick={props.onClick}
      />
      {renderLoading()}
      {renderDelete()}
    </div>
  )
}

export default PreviewItem
