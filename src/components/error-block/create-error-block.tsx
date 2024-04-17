import classNames from 'classnames'
import type { FC, ReactElement, ReactNode } from 'react'
import React from 'react'
import type { ErrorBlockStatus, ImageRecord } from '.'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import './error-block.less'

const classPrefix = `adm-error-block`

export type ErrorBlockProps = {
  status?: ErrorBlockStatus
  title?: ReactNode
  image?: string | ReactElement
  description?: ReactNode
  fullPage?: boolean
  children?: ReactNode
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
  const ErrorBlock: FC<ErrorBlockProps> = props => {
    const mergedProps = mergeProps(defaultProps, props)
    const { locale } = useConfig()
    const contentPack = locale.ErrorBlock[mergedProps.status]
    const desc =
      'description' in mergedProps
        ? mergedProps.description
        : contentPack.description
    const title = 'title' in mergedProps ? mergedProps.title : contentPack.title

    const image: ReactNode =
      mergedProps.image ?? imageRecord[mergedProps.status]
    const imageNode =
      typeof image === 'string' ? (
        <img src={image} alt='error block image' />
      ) : (
        image
      )

    return withNativeProps(
      mergedProps,
      <div
        className={classNames(classPrefix, {
          [`${classPrefix}-full-page`]: mergedProps.fullPage,
        })}
      >
        <div className={`${classPrefix}-image`}>{imageNode}</div>
        <div className={`${classPrefix}-description`}>
          {![undefined, null].includes(title as null) && (
            <div className={`${classPrefix}-description-title`}>{title}</div>
          )}

          {![undefined, null].includes(desc as null) && (
            <div className={`${classPrefix}-description-subtitle`}>{desc}</div>
          )}
        </div>

        {mergedProps.children && (
          <div className={`${classPrefix}-content`}>{mergedProps.children}</div>
        )}
      </div>
    )
  }
  return ErrorBlock
}
