import React, { useEffect, useMemo } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { TaskStatus } from './image-uploader'
import Image from '../image'
import SpinLoading from '../spin-loading'
import { useConfig } from '../config-provider'
import type { ImageProps } from '../image'

interface Props {
  onClick?: () => void
  onDelete?: () => void
  deletable: boolean
  deleteIcon: ReactNode
  url?: string
  file?: File
  status?: TaskStatus
  imageFit: ImageProps['fit']
}

const classPrefix = `adm-image-uploader`

const PreviewItem: FC<Props> = props => {
  const { locale } = useConfig()
  const { url, file, deletable, deleteIcon, onDelete, imageFit } = props
  const src = useMemo(() => {
    if (url) {
      return url
    }
    if (file) {
      return URL.createObjectURL(file)
    }
    return ''
  }, [url, file])

  useEffect(() => {
    return () => {
      if (file) URL.revokeObjectURL(src)
    }
  }, [src, file])

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
          {deleteIcon}
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
