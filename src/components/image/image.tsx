import { mergeProps } from '../../utils/with-default-props'
import React, { ReactNode, useState, useRef } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { PictureOutline, PictureWrongOutline } from 'antd-mobile-icons'
import { staged } from 'staged-components'
import { toCSSLength } from '../../utils/to-css-length'
import { LazyDetector } from './lazy-detector'
import { useUpdateLayoutEffect } from 'ahooks'

const classPrefix = `adm-image`

export type ImageProps = {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  placeholder?: ReactNode
  fallback?: ReactNode
  lazy?: boolean
  onClick?: (event: React.MouseEvent<HTMLImageElement, Event>) => void
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
} & NativeProps<'--width' | '--height'> &
  Pick<
    React.ImgHTMLAttributes<HTMLImageElement>,
    | 'crossOrigin'
    | 'decoding'
    | 'loading'
    | 'referrerPolicy'
    | 'sizes'
    | 'srcSet'
    | 'useMap'
  >

const defaultProps = {
  fit: 'fill',
  placeholder: (
    <div className={`${classPrefix}-tip`}>
      <PictureOutline />
    </div>
  ),
  fallback: (
    <div className={`${classPrefix}-tip`}>
      <PictureWrongOutline />
    </div>
  ),
  lazy: false,
}

export const Image = staged<ImageProps>(p => {
  const props = mergeProps(defaultProps, p)
  const [status, setStatus] = useState<'pending' | 'loaded' | 'failed'>(
    'pending'
  )

  const ref = useRef<HTMLDivElement>(null)

  let src: string | undefined = props.src
  let srcSet: string | undefined = props.srcSet

  const [initialized, setInitialized] = useState(!props.lazy)

  src = initialized ? props.src : undefined
  srcSet = initialized ? props.srcSet : undefined

  useUpdateLayoutEffect(() => {
    setStatus('pending')
  }, [src])

  function renderInner() {
    const img = (
      <img
        className={`${classPrefix}-img`}
        src={src}
        alt={props.alt}
        onClick={props.onClick}
        onLoad={() => {
          setStatus('loaded')
        }}
        onError={e => {
          setStatus('failed')
          props.onError?.(e)
        }}
        style={{
          objectFit: props.fit,
          display: status === 'loaded' ? 'block' : 'none',
        }}
        crossOrigin={props.crossOrigin}
        decoding={props.decoding}
        loading={props.loading}
        referrerPolicy={props.referrerPolicy}
        sizes={props.sizes}
        srcSet={srcSet}
        useMap={props.useMap}
      />
    )
    if (status === 'failed') {
      return (
        <>
          {props.fallback}
          {img}
        </>
      )
    }
    return (
      <>
        {status === 'pending' && props.placeholder}
        {img}
      </>
    )
  }

  const style: ImageProps['style'] = {}
  if (props.width) {
    style['--width'] = toCSSLength(props.width)
  }
  if (props.height) {
    style['--height'] = toCSSLength(props.height)
  }
  return withNativeProps(
    props,
    <div ref={ref} className={classPrefix} style={style}>
      {props.lazy && !initialized && (
        <LazyDetector
          onActive={() => {
            setInitialized(true)
          }}
        />
      )}
      {renderInner()}
    </div>
  )
})
