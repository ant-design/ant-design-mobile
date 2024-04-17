import type { ReactNode } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import { staged } from 'staged-components'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { toCSSLength } from '../../utils/to-css-length'
import { useIsomorphicUpdateLayoutEffect } from '../../utils/use-isomorphic-update-layout-effect'
import { mergeProps } from '../../utils/with-default-props'
import { BrokenImageIcon } from './broken-image-icon'
import { ImageIcon } from './image-icon'
import { LazyDetector } from './lazy-detector'

const classPrefix = `adm-image`

export type ImageProps = {
  src?: string
  alt?: string
  width?: number | string
  height?: number | string
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  placeholder?: ReactNode
  fallback?: ReactNode
  lazy?: boolean
  draggable?: boolean
  onClick?: (event: React.MouseEvent<HTMLImageElement, Event>) => void
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
  onContainerClick?: (event: React.MouseEvent<HTMLDivElement, Event>) => void
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
    | 'id'
  >

const defaultProps = {
  fit: 'fill',
  placeholder: (
    <div className={`${classPrefix}-tip`}>
      <ImageIcon />
    </div>
  ),
  fallback: (
    <div className={`${classPrefix}-tip`}>
      <BrokenImageIcon />
    </div>
  ),
  lazy: false,
  draggable: false,
}

export const Image = staged<ImageProps>(props => {
  const mergedProps = mergeProps(defaultProps, props)

  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  let src: string | undefined = mergedProps.src
  let srcSet: string | undefined = mergedProps.srcSet

  const [initialized, setInitialized] = useState(!mergedProps.lazy)

  src = initialized ? mergedProps.src : undefined
  srcSet = initialized ? mergedProps.srcSet : undefined

  useIsomorphicUpdateLayoutEffect(() => {
    setLoaded(false)
    setFailed(false)
  }, [src])

  useEffect(() => {
    // for nextjs ssr
    if (imgRef.current?.complete) {
      setLoaded(true)
    }
  }, [])

  function renderInner() {
    if (failed) {
      return <>{mergedProps.fallback}</>
    }
    const img = (
      <img
        ref={imgRef}
        id={mergedProps.id}
        className={`${classPrefix}-img`}
        src={src}
        alt={mergedProps.alt}
        onClick={mergedProps.onClick}
        onLoad={e => {
          setLoaded(true)
          mergedProps.onLoad?.(e)
        }}
        onError={e => {
          setFailed(true)
          mergedProps.onError?.(e)
        }}
        style={{
          objectFit: mergedProps.fit,
          display: loaded ? 'block' : 'none',
        }}
        crossOrigin={mergedProps.crossOrigin}
        decoding={mergedProps.decoding}
        loading={mergedProps.loading}
        referrerPolicy={mergedProps.referrerPolicy}
        sizes={mergedProps.sizes}
        srcSet={srcSet}
        useMap={mergedProps.useMap}
        draggable={mergedProps.draggable}
      />
    )
    return (
      <>
        {!loaded && mergedProps.placeholder}
        {img}
      </>
    )
  }

  const style: ImageProps['style'] = {}
  if (mergedProps.width) {
    style['--width'] = toCSSLength(mergedProps.width)
    style['width'] = toCSSLength(mergedProps.width)
  }
  if (mergedProps.height) {
    style['--height'] = toCSSLength(mergedProps.height)
    style['height'] = toCSSLength(mergedProps.height)
  }
  return withNativeProps(
    mergedProps,
    <div
      ref={ref}
      className={classPrefix}
      style={style}
      onClick={mergedProps.onContainerClick}
    >
      {mergedProps.lazy && !initialized && (
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
