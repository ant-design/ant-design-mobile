import React, { ReactNode, FC } from 'react'
import classNames from 'classnames'
import { ElementProps, withElementProps } from '../../utils/element-props'
import EmptyIcon from '../../assets/empty-icon.svg'

const classPrefix = `adm-empty`

export type EmptyProps = {
  imageStyle?: React.CSSProperties
  description?: ReactNode
} & ElementProps

export const Empty: FC<EmptyProps> = props => {
  return withElementProps(
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
