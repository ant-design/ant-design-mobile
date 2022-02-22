import React, { FC, MutableRefObject, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { rubberbandIfOutOfBounds } from '../../utils/rubberband'
import { useDragAndPinch } from '../../utils/use-drag-and-pinch'
import { bound } from '../../utils/bound'

const classPrefix = `adm-image-viewer`

type Props = {
  image: string
  maxZoom: number
  onTap: () => void
  onZoomChange?: (zoom: number) => void
  dragLockRef?: MutableRefObject<boolean>
}

export const Slide: FC<Props> = props => {
  const { dragLockRef } = props
  const controlRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [{ zoom, x, y }, api] = useSpring(() => ({
    zoom: 1,
    x: 0,
    y: 0,
    config: { tension: 200 },
  }))

  const pinchLockRef = useRef(false)

  function boundXY([x, y]: [number, number], rubberband: boolean) {
    const currentZoom = zoom.get()
    let xOffset = 0,
      yOffset = 0
    if (imgRef.current && controlRef.current) {
      xOffset =
        ((currentZoom * imgRef.current.width || 0) -
          controlRef.current.clientWidth) /
        2
      yOffset =
        ((currentZoom * imgRef.current.height || 0) -
          controlRef.current.clientHeight) /
        2
    }
    xOffset = xOffset > 0 ? xOffset : 0
    yOffset = yOffset > 0 ? yOffset : 0

    const bounds = {
      left: -xOffset,
      right: xOffset,
      top: -yOffset,
      bottom: yOffset,
    }

    if (rubberband) {
      return [
        rubberbandIfOutOfBounds(x, bounds.left, bounds.right, currentZoom * 50),
        rubberbandIfOutOfBounds(y, bounds.top, bounds.bottom, currentZoom * 50),
      ] as const
    } else {
      return [
        bound(x, bounds.left, bounds.right),
        bound(y, bounds.top, bounds.bottom),
      ]
    }
  }

  useDragAndPinch(
    {
      onDrag: state => {
        if (state.tap && state.elapsedTime > 0 && state.elapsedTime < 1000) {
          // 判断点击时间>0是为了过滤掉非正常操作，例如用户长按选择图片之后的取消操作（也是一次点击）
          props.onTap()
          return
        }
        const currentZoom = zoom.get()
        if (dragLockRef) {
          dragLockRef.current = currentZoom !== 1
        }
        if (!pinchLockRef.current && currentZoom <= 1) {
          api.start({
            x: 0,
            y: 0,
          })
        } else {
          if (state.last) {
            const [x, y] = boundXY(
              [
                state.offset[0] + state.velocity[0] * state.direction[0] * 200,
                state.offset[1] + state.velocity[1] * state.direction[1] * 200,
              ],
              false
            )
            api.start({
              x,
              y,
            })
          } else {
            const [x, y] = boundXY(state.offset, true)
            api.start({
              x,
              y,
              immediate: true,
            })
          }
        }
      },
      onPinch: state => {
        pinchLockRef.current = !state.last
        const [d] = state.offset
        if (d < 0) return
        const nextZoom = state.last ? bound(d, 1, props.maxZoom) : d
        api.start({
          zoom: nextZoom,
          immediate: !state.last,
        })
        props.onZoomChange?.(nextZoom)
        if (state.last && nextZoom <= 1) {
          api.start({
            x: 0,
            y: 0,
          })
          if (dragLockRef) {
            dragLockRef.current = false
          }
        } else {
          if (dragLockRef) {
            dragLockRef.current = true
          }
        }
      },
    },
    {
      target: controlRef,
      drag: {
        // filterTaps: true,
        from: () => [x.get(), y.get()],
        pointer: { touch: true },
      },
      pinch: {
        from: () => [zoom.get(), 0],
        pointer: { touch: true },
      },
    }
  )

  return (
    <div
      className={`${classPrefix}-slide`}
      onPointerMove={e => {
        if (zoom.get() !== 1) {
          e.stopPropagation()
        }
      }}
    >
      <div className={`${classPrefix}-control`} ref={controlRef}>
        <animated.div
          className={`${classPrefix}-image-wrapper`}
          style={{
            translateX: x,
            translateY: y,
            scale: zoom,
          }}
        >
          <img
            ref={imgRef}
            src={props.image}
            draggable={false}
            alt={props.image}
          />
        </animated.div>
      </div>
    </div>
  )
}
