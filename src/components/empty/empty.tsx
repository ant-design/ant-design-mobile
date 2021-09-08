import React, { ReactNode, FC } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import EmptyIcon from '../../assets/empty-icon.svg'

const classPrefix = `adm-empty`

export type EmptyProps = {
  imageStyle?: React.CSSProperties
  description?: ReactNode
} & NativeProps

export const Empty: FC<EmptyProps> = props => {
  return withNativeProps(
    props,
    <div className={classPrefix}>
      <img
        className={classNames(`${classPrefix}-image`)}
        src={EmptyIcon}
        alt='empty'
        style={props.imageStyle}
      />
      {props.description && (
        <div className={classNames(`${classPrefix}-description`)}>
          {props.description}
        </div>
      )}
    </div>
  )
}
