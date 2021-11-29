import React, { FC, useMemo } from 'react'
import { CloseOutline } from 'antd-mobile-icons'
import classNames from 'classnames'
import { TaskStatus } from './image-uploader'
import Image from '../image'
import Loading from '../loading'
import { useConfig } from '../config-provider'

type Props = {
  onClick?: () => void
  onDelete?: () => void
  deletable: boolean
  url?: string
  file?: File
  status?: TaskStatus
}

const classPrefix = `adm-image-uploader`

const PreviewItem: FC<Props> = props => {
  const { locale } = useConfig()
  const { url, file, deletable, onDelete } = props
  const src = useMemo(() => {
    if (url) {
      return url
    }
    if (file) {
      return URL.createObjectURL(file)
    }
    return ''
  }, [url, file])

  function renderLoading() {
    return (
      props.status === 'pending' && (
        <div className={`${classPrefix}-cell-mask`}>
          <span className={`${classPrefix}-cell-loading`}>
            <Loading color='#fff' />
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
        fit='cover'
        onClick={props.onClick}
      />
      {renderLoading()}
      {renderDelete()}
    </div>
  )
}

export default PreviewItem
