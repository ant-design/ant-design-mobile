import React, { FC, ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { Image } from '../../index'
import { mergeProps } from '../../utils/with-default-props'
import { Fallback } from './fallback'
import { ImageProps } from '../image'

const classPrefix = 'adm-avatar'

export type AvatarProps = {
  src: string
  fallback?: ReactNode
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
} & Pick<ImageProps, 'alt' | 'lazy' | 'onClick' | 'onError'> &
  NativeProps<'--size' | '--border-radius'>

const defaultProps = {
  fallback: <Fallback />,
  fit: 'cover',
}

export const Avatar: FC<AvatarProps> = p => {
  const props = mergeProps(defaultProps, p)
  return withNativeProps(
    props,
    <Image
      className={classPrefix}
      src={props.src}
      fallback={props.fallback}
      placeholder={props.fallback}
      alt={props.alt}
      lazy={props.lazy}
      fit={props.fit}
      onClick={props.onClick}
      onError={props.onError}
    />
  )
}
