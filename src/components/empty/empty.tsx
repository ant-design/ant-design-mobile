import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import EmptyIcon from '../../assets/empty-icon.svg'

const classPrefix = `adm-empty`

export type EmptyProps = {
  image?: ReactNode
  imageStyle?: React.CSSProperties
  description?: ReactNode
} & NativeProps

const defaultProps = {
  image: EmptyIcon as string,
}

export const Empty: React.FC<EmptyProps> = p => {
  const props = mergeProps(defaultProps, p)

  const imageNode =
    typeof props.image === 'string' ? (
      <img
        className={`${classPrefix}-image`}
        style={props.imageStyle}
        src={props.image}
        alt='empty'
      />
    ) : (
      props.image
    )

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <div className={`${classPrefix}-image-container`}>{imageNode}</div>
      {props.description && (
        <div className={classNames(`${classPrefix}-description`)}>
          {props.description}
        </div>
      )}
    </div>
  )
}
