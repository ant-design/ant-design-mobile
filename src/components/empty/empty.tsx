import React, { ReactNode, FC } from 'react'
import classNames from 'classnames'
import { ElementProps } from '../../utils/element-props'
import EmptyIcon from '../../assets/empty-icon.svg'

const classPrefix = `am-empty`

export type EmptyProps = {
  imageStyle?: React.CSSProperties
  description?: ReactNode
} & ElementProps

const Empty: FC<EmptyProps> = props => {
  return (
    <div
      style={props.style}
      className={classNames(classPrefix, props.className)}
    >
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

export default Empty
