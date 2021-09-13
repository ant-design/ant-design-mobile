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
  image: EmptyIcon,
}

type EmptyType = React.FC<EmptyProps> & {
  DEFAULT_IMAGE: string
}

export const Empty: EmptyType = p => {
  const props = mergeProps(defaultProps, p)

  const imageNode: React.ReactNode =
    typeof props.image === 'string' ? (
      <img src={props.image} alt='empty' />
    ) : (
      props.image
    )

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <div
        className={classNames(`${classPrefix}-image`)}
        style={props.imageStyle}
      >
        {imageNode}
      </div>
      {props.description && (
        <div className={classNames(`${classPrefix}-description`)}>
          {props.description}
        </div>
      )}
    </div>
  )
}

Empty.DEFAULT_IMAGE = EmptyIcon
