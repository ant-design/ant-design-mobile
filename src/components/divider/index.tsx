import React, {FC} from 'react'
import classNames from 'classnames'
import {ElementProps} from '../../utils/element-props'
import {withDefaultProps} from '../../utils/with-default-props'

const classPrefix = `am-divider`

export type DividerProps = {
  contentPosition?: 'left' | 'right' | 'center'
} & ElementProps

const defaultProps = {
  contentPosition: 'center',
}

const Divider = withDefaultProps(defaultProps)<DividerProps>(props => {
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
})

export default Divider
