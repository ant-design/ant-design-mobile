import React, { FC, useMemo } from 'react'
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { TaskStatus } from './image-uploader'
import Image from '../image'

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
        <div className={`${classPrefix}-card-mask`}>
          <span className={`${classPrefix}-card-loading`}>
            <LoadingOutlined />
            <span className={`${classPrefix}-card-mask-message`}>
              上传中...
            </span>
          </span>
        </div>
      )
    )
  }

  function renderDelete() {
    return (
      deletable && (
        <span className={`${classPrefix}-card-delete`} onClick={onDelete}>
          <CloseOutlined style={{ position: 'absolute', left: 4, top: 3 }} />
        </span>
      )
    )
  }

  return (
    <div
      className={classNames(
        `${classPrefix}-card`,
        props.status === 'fail' && `${classPrefix}-card-error`
      )}
    >
      <Image
        // TODO: 改用 CSS 变量实现
        className={`${classPrefix}-card-preview-image`}
        src={src}
        onClick={props.onClick}
      />
      {renderLoading()}
      {renderDelete()}
    </div>
  )
}

export default PreviewItem
