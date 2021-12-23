import React, { FC, ReactElement, ReactNode } from 'react'
import classNames from 'classnames'
import { iconRecord } from './error'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useConfig } from '../config-provider'

const classPrefix = `adm-error-block`

export type ErrorBlockProps = {
  status?: 'default' | 'disconnected' | 'empty' | 'busy'
  title?: ReactNode
  image?: string | ReactElement
  description?: ReactNode
  fullPage?: boolean
} & NativeProps<'--image-height' | '--image-height-full-page'>

const defaultProps = {
  status: 'default',
}

export const ErrorBlock: FC<ErrorBlockProps> = p => {
  const props = mergeProps(defaultProps, p)
  const icon = iconRecord[props.status]
  const { locale } = useConfig()
  const contentPack = locale.ErrorBlock[props.status]
  const des =
    'description' in props ? props.description : contentPack.description
  const title = 'title' in props ? props.title : contentPack.title
  let imageNode: ReactNode = <img src={icon} />

  if (props.image) {
    if (typeof props.image === 'string') {
      imageNode = <img src={props.image} />
    } else {
      imageNode = props.image
    }
  }

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-full-page`]: props.fullPage,
      })}
    >
      <div className={`${classPrefix}-image`}>{imageNode}</div>
      <div className={`${classPrefix}-description`}>
        {title && (
          <div className={`${classPrefix}-description-title`}>{title}</div>
        )}
        {des && (
          <div className={`${classPrefix}-description-subtitle`}>{des}</div>
        )}
      </div>

      {props.children && (
        <div className={`${classPrefix}-content`}>{props.children}</div>
      )}
    </div>
  )
}
