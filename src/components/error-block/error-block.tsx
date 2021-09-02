import React, { ReactNode, ReactElement } from 'react'
import classNames from 'classnames'
import { errorConfigRecord } from './error'
import { withDefaultProps } from '../../utils/with-default-props'
import { ElementProps, withElementProps } from '../../utils/element-props'

const classPrefix = `adm-error-block`

export type ErrorBlockProps = {
  status?: 'default' | 'disconnected' | 'empty' | 'busy'
  title?: ReactNode
  image?: string | ReactElement
  description?: ReactNode
  fullPage?: boolean
} & ElementProps

const defaultProps = {
  status: 'default',
}

export const ErrorBlock = withDefaultProps(defaultProps)<ErrorBlockProps>(
  props => {
    const config = errorConfigRecord[props.status]
    const des = 'description' in props ? props.description : config.description
    const title = 'title' in props ? props.title : config.title
    let imageNode: ReactNode = <img src={config.icon} />

    if (props.image) {
      if (typeof props.image === 'string') {
        imageNode = <img src={props.image} />
      } else {
        imageNode = props.image
      }
    }

    return withElementProps(
      props,
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-full-page`]: props.fullPage,
        })}
      >
        <div className={`${classPrefix}-image`}>{imageNode}</div>
        <div className={`${classPrefix}-description`}>
          {title && (
            <span className={`${classPrefix}-description-title`}>{title}</span>
          )}
          {des && (
            <span className={`${classPrefix}-description-subtitle`}>{des}</span>
          )}
        </div>

        {props.children && (
          <div className={`${classPrefix}-content`}>{props.children}</div>
        )}
      </div>
    )
  }
)
