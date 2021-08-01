import React, {FC} from 'react'
import {CloseOutlined, LoadingOutlined} from '@ant-design/icons'
import {FileItem} from '.'
import classNames from 'classnames'

type Props = {
  previewImage: () => void
  deleteImage: () => void
} & FileItem

const classPrefix = `am-uploader`

const PreviewItem: FC<Props> = props => {
  const {status, url, content, deletable, previewImage, deleteImage} = props

  function renderLoading() {
    return (
      status === 'loading' && (
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
        <span className={`${classPrefix}-card-delete`} onClick={deleteImage}>
          <CloseOutlined style={{position: 'absolute', left: 4, top: 3}} />
        </span>
      )
    )
  }

  return (
    <div
      className={classNames(
        `${classPrefix}-card`,
        status === 'error' && `${classPrefix}-card-error`
      )}
    >
      <img
        className={`${classPrefix}-card-preview-image`}
        src={url || content}
        onClick={() => previewImage()}
      />

      {renderLoading()}
      {renderDelete()}
    </div>
  )
}

export default PreviewItem
