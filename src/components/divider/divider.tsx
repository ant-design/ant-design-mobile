import React, { FC } from 'react'
import classNames from 'classnames'
import { ElementProps } from '../../utils/element-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-divider`

export type DividerProps = {
  contentPosition?: 'left' | 'right' | 'center'
} & ElementProps

const defaultProps = {
  contentPosition: 'center',
}

export const Divider: FC<DividerProps> = p => {
  const props = mergeProps(defaultProps, p)
  return (
    <div
      style={props.style}
      className={classNames(
        classPrefix,
        `${classPrefix}-${props.contentPosition}`,
        props.className
      )}
    >
      {props.children && (
        <div className={`${classPrefix}-content`}>{props.children}</div>
      )}
    </div>
  )
}
