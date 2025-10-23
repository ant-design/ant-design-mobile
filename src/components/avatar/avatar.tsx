import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import Image, { ImageProps } from '../image'
import { Fallback } from './fallback'

export type AvatarProps = {
  src: string
  fallback?: ReactNode
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  onClick?: (
    event: React.MouseEvent<HTMLDivElement | HTMLImageElement, Event>
  ) => void
  prefixCls?: string
} & Pick<ImageProps, 'alt' | 'lazy' | 'onError' | 'onLoad'> &
  NativeProps<'--size' | '--border-radius'>

const defaultProps = {
  fallback: <Fallback />,
  fit: 'cover',
}

export const Avatar: FC<AvatarProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { getPrefixCls } = useConfig()
  const prefixCls = getPrefixCls('avatar', props.prefixCls)
  const mergedSrc = props.src?.trim() || undefined

  return withNativeProps(
    props,
    <Image
      className={prefixCls}
      src={mergedSrc}
      fallback={props.fallback}
      placeholder={props.fallback}
      alt={props.alt}
      lazy={props.lazy}
      fit={props.fit}
      onClick={props.onClick}
      onError={props.onError}
      onLoad={props.onLoad}
    />
  )
}
