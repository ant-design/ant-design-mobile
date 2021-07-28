import { withDefaultProps } from '../../utils/with-default-props'
import {
  renderToContainer,
  GetContainer,
} from '../../utils/render-to-container'
import Mask from '../mask'
import { Slide } from './slide'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Slides } from './slides'
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  createRef,
} from 'react'
import { renderToBody } from '../../utils/render-to-body'

const classPrefix = `am-image-viewer`

export type ImageViewerProps = {
  image?: string
  maxZoom?: number
  getContainer?: GetContainer
  visible?: boolean
  onClose?: () => void
  afterClose?: () => void
}

const defaultProps = {
  maxZoom: 3,
  getContainer: null,
  visible: false,
}

const ImageViewer = withDefaultProps(defaultProps)<ImageViewerProps>(props => {
  const node = (
    <Mask
      visible={props.visible}
      disableBodyScroll={false}
      opacity='dark'
      afterClose={props.afterClose}
    >
      <div className={`${classPrefix}-content`}>
        {props.image && (
          <Slide
            image={props.image}
            onTap={() => {
              props.onClose?.()
            }}
            maxZoom={props.maxZoom}
          />
        )}
      </div>
    </Mask>
  )
  return renderToContainer(props.getContainer, node)
})

export type MultiImageViewerProps = Omit<ImageViewerProps, 'image'> & {
  images?: string[]
  defaultIndex?: number
  onIndexChange?: (index: number) => void
}

const multiDefaultProps = {
  ...defaultProps,
  defaultIndex: 0,
}

const MultiImageViewer = withDefaultProps(
  multiDefaultProps
)<MultiImageViewerProps>(props => {
  const node = (
    <Mask
      visible={props.visible}
      disableBodyScroll={false}
      opacity='dark'
      afterClose={props.afterClose}
    >
      <div className={`${classPrefix}-content`}>
        {props.images && (
          <Slides
            defaultIndex={props.defaultIndex}
            onIndexChange={props.onIndexChange}
            images={props.images}
            onTap={() => {
              props.onClose?.()
            }}
            maxZoom={props.maxZoom}
          />
        )}
      </div>
    </Mask>
  )
  return renderToContainer(props.getContainer, node)
})

function showImageViewer(props: Omit<ImageViewerProps, 'visible'>) {
  type Ref = {
    close: () => void
  }
  const Wrapper = forwardRef<Ref>((_, ref) => {
    const [visible, setVisible] = useState(true)
    useImperativeHandle(ref, () => ({
      close: () => {
        setVisible(false)
      },
    }))
    return (
      <ImageViewer
        {...props}
        visible={visible}
        onClose={() => {
          props.onClose?.()
          setVisible(false)
        }}
        afterClose={() => {
          props.afterClose?.()
          unmount()
        }}
      />
    )
  })
  const ref = createRef<Ref>()
  const unmount = renderToBody(<Wrapper ref={ref} />)
  return {
    close: () => {
      ref.current?.close()
    },
  }
}

function showMultiImageViewer(props: Omit<MultiImageViewerProps, 'visible'>) {
  type Ref = {
    close: () => void
  }
  const Wrapper = forwardRef<Ref>((_, ref) => {
    const [visible, setVisible] = useState(true)
    useImperativeHandle(ref, () => ({
      close: () => {
        setVisible(false)
      },
    }))
    return (
      <MultiImageViewer
        {...props}
        visible={visible}
        onClose={() => {
          props.onClose?.()
          setVisible(false)
        }}
        afterClose={() => {
          props.afterClose?.()
          unmount()
        }}
      />
    )
  })
  const ref = createRef<Ref>()
  const unmount = renderToBody(<Wrapper ref={ref} />)
  return {
    close: () => {
      ref.current?.close()
    },
  }
}

const Multi = attachPropertiesToComponent(MultiImageViewer, {
  show: showMultiImageViewer,
})

export default attachPropertiesToComponent(ImageViewer, {
  Multi,
  show: showImageViewer,
})
