import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { EmptyIcon } from './empty-icon'

const classPrefix = `adm-empty`

export type EmptyProps = {
  image?: ReactNode
  imageStyle?: React.CSSProperties
  description?: ReactNode
} & NativeProps

export const Empty: React.FC<EmptyProps> = props => {
  function renderImageNode() {
    const { image } = props
    if (image === undefined) {
      return (
        <EmptyIcon
          className={`${classPrefix}-image`}
          style={props.imageStyle}
        />
      )
    }
    if (typeof image === 'string') {
      return (
        <img
          className={`${classPrefix}-image`}
          style={props.imageStyle}
          src={image}
          alt='empty'
        />
      )
    }
    return image
  }

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <div className={`${classPrefix}-image-container`}>
        {renderImageNode()}
      </div>
      {props.description && (
        <div className={classNames(`${classPrefix}-description`)}>
          {props.description}
        </div>
      )}
    </div>
  )
}
