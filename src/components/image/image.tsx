import { mergeProps } from '../../utils/with-default-props'
import React, { ReactNode, useState, useRef } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { staged } from 'staged-components'
import { toCSSLength } from '../../utils/to-css-length'
import { LazyDetector } from './lazy-detector'
import { useIsomorphicUpdateLayoutEffect } from '../../utils/use-isomorphic-update-layout-effect'
import { ImageIcon } from './image-icon'
import { BrokenImageIcon } from './broken-image-icon'

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

export const Image = staged<ImageProps>(p => {
  const props = mergeProps(defaultProps, p)

  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  let src: string | undefined = props.src
  let srcSet: string | undefined = props.srcSet

  const [initialized, setInitialized] = useState(!props.lazy)

  src = initialized ? props.src : undefined
  srcSet = initialized ? props.srcSet : undefined

  useIsomorphicUpdateLayoutEffect(() => {
    setLoaded(false)
    setFailed(false)
  }, [src])

  function renderInner() {
    if (failed) {
      return <>{props.fallback}</>
    }
    const img = (
      <img
        className={`${classPrefix}-img`}
        src={src}
        alt={props.alt}
        onClick={props.onClick}
        onLoad={e => {
          setLoaded(true)
          props.onLoad?.(e)
        }}
        onError={e => {
          setFailed(true)
          props.onError?.(e)
        }}
        style={{
          objectFit: props.fit,
          display: loaded ? 'block' : 'none',
        }}
        crossOrigin={props.crossOrigin}
        decoding={props.decoding}
        loading={props.loading}
        referrerPolicy={props.referrerPolicy}
        sizes={props.sizes}
        srcSet={srcSet}
        useMap={props.useMap}
        draggable={props.draggable}
      />
    )
    return (
      <>
        {!loaded && props.placeholder}
        {img}
      </>
    )
  }

  const style: ImageProps['style'] = {}
  if (props.width) {
    style['--width'] = toCSSLength(props.width)
    style['width'] = toCSSLength(props.width)
  }
  if (props.height) {
    style['--height'] = toCSSLength(props.height)
    style['height'] = toCSSLength(props.height)
  }
  return withNativeProps(
    props,
    <div
      ref={ref}
      className={classPrefix}
      style={style}
      onClick={props.onContainerClick}
    >
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
