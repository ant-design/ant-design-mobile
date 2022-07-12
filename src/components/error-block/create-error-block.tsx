import React, { FC, ReactElement, ReactNode } from 'react'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useConfig } from '../config-provider'
import type { ErrorBlockStatus, ImageRecord } from '.'

const classPrefix = `adm-error-block`

export type ErrorBlockProps = {
  status?: ErrorBlockStatus
  title?: ReactNode
  image?: string | ReactElement
  description?: ReactNode
  fullPage?: boolean
  children?: React.ReactNode
} & NativeProps<
  | '--image-height'
  | '--image-height-full-page'
  | '--image-width'
  | '--image-width-full-page'
>

const defaultProps = {
  status: 'default',
}

export function createErrorBlock(imageRecord: ImageRecord) {
  const ErrorBlock: FC<ErrorBlockProps> = p => {
    const props = mergeProps(defaultProps, p)
    const { locale } = useConfig()
    const contentPack = locale.ErrorBlock[props.status]
    const des =
      'description' in props ? props.description : contentPack.description
    const title = 'title' in props ? props.title : contentPack.title
    const image: ReactNode = props.image ?? imageRecord[props.status]
    const imageNode =
      typeof image === 'string' ? (
        <img src={image} alt='error block image' />
      ) : (
        image
      )

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
  return ErrorBlock
}
