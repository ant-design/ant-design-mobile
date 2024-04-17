import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import Image, { ImageProps } from '../image'
import { Fallback } from './fallback'

const classPrefix = 'adm-avatar'

export type AvatarProps = {
  src: string
  fallback?: ReactNode
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
} & Pick<ImageProps, 'alt' | 'lazy' | 'onClick' | 'onError' | 'onLoad'> &
  NativeProps<'--size' | '--border-radius'>

const defaultProps = {
  fallback: <Fallback />,
  fit: 'cover',
}

export const Avatar: FC<AvatarProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  return withNativeProps(
    mergedProps,
    <Image
      className={classPrefix}
      src={mergedProps.src}
      fallback={mergedProps.fallback}
      placeholder={mergedProps.fallback}
      alt={mergedProps.alt}
      lazy={mergedProps.lazy}
      fit={mergedProps.fit}
      onClick={mergedProps.onClick}
      onError={mergedProps.onError}
      onLoad={mergedProps.onLoad}
    />
  )
}
