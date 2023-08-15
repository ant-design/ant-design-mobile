import React, { useEffect, useRef } from 'react'
import type { FC } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useSize, useInViewport } from 'ahooks'
import { rubberbandIfOutOfBounds } from '../../utils/rubberband'
import { useDragAndPinch } from '../../utils/use-drag-and-pinch'
import { bound } from '../../utils/bound'
import type { Matrix } from '../../utils/matrix'
import * as mat from '../../utils/matrix'

const classPrefix = `adm-image-viewer`

type SlideProps = {
  image: string
  maxZoom: number | 'auto'
  onTap?: () => void
  onZoomChange?: (zoom: number) => void
}

export const Slide: FC<SlideProps> = props => {
  const { maxZoom } = props
  const controlRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [{ matrix }, api] = useSpring(() => ({
    matrix: mat.create(),
    config: { tension: 200 },
  }))

  const controlSize = useSize(controlRef)
  const imgSize = useSize(imgRef)

  const pinchLockRef = useRef(false)

  const [inView] = useInViewport(controlRef)

  useEffect(() => {
    !inView &&
      api.start({
        matrix: mat.create(),
      })
  }, [inView])

  const boundMatrix = (
    nextMatrix: Matrix,
    type: 'translate' | 'scale',
    last = false
  ): Matrix => {
    if (!controlSize || !imgSize) return nextMatrix

    const controlLeft = -controlSize.width / 2
    const controlTop = -controlSize.height / 2
    const imgLeft = -imgSize.width / 2
    const imgTop = -imgSize.height / 2

    const zoom = mat.getScaleX(nextMatrix)
    const scaledImgWidth = zoom * imgSize.width
    const scaledImgHeight = zoom * imgSize.height
    const [x, y] = mat.apply(nextMatrix, [imgLeft, imgTop])

    if (type === 'translate') {
      let boundedX = x
      let boundedY = y
      if (scaledImgWidth > controlSize.width) {
        const minX = controlLeft - (scaledImgWidth - controlSize.width)
        const maxX = controlLeft
        boundedX = last
          ? bound(x, minX, maxX)
          : rubberbandIfOutOfBounds(x, minX, maxX, zoom * 50)
      } else {
        boundedX = -scaledImgWidth / 2
      }

      if (scaledImgHeight > controlSize.height) {
        const minY = controlTop - (scaledImgHeight - controlSize.height)
        const maxY = controlTop
        boundedY = last
          ? bound(y, minY, maxY)
          : rubberbandIfOutOfBounds(y, minY, maxY, zoom * 50)
      } else {
        boundedY = -scaledImgHeight / 2
      }

      return mat.translate(nextMatrix, boundedX - x, boundedY - y)
    }

    if (type === 'scale' && last) {
      const [boundedX, boundedY] = [
        scaledImgWidth > controlSize.width
          ? bound(
              x,
              controlLeft - (scaledImgWidth - controlSize.width),
              controlLeft
            )
          : -scaledImgWidth / 2,
        scaledImgHeight > controlSize.height
          ? bound(
              y,
              controlTop - (scaledImgHeight - controlSize.height),
              controlTop
            )
          : -scaledImgHeight / 2,
      ]
      return mat.translate(nextMatrix, boundedX - x, boundedY - y)
    }

    return nextMatrix
  }

  useDragAndPinch(
    {
      onDrag: state => {
        if (state.first) return
        if (state.pinching) return state.cancel()

        if (state.tap && state.elapsedTime > 0 && state.elapsedTime < 1000) {
          // 判断点击时间>0是为了过滤掉非正常操作，例如用户长按选择图片之后的取消操作（也是一次点击）
          props?.onTap?.()
          return
        }

        const currentZoom = mat.getScaleX(matrix.get())

        if (!pinchLockRef.current && currentZoom <= 1) {
          api.start({
            matrix: mat.create(),
          })
        } else {
          const currentMatrix = matrix.get()
          const offset = [
            state.offset[0] - mat.getTranslateX(currentMatrix),
            state.offset[1] - mat.getTranslateY(currentMatrix),
          ] as const

          const nextMatrix = mat.translate(
            currentMatrix,
            ...(state.last
              ? ([
                  offset[0] + state.velocity[0] * state.direction[0] * 200,
                  offset[1] + state.velocity[1] * state.direction[1] * 200,
                ] as const)
              : offset)
          )

          api.start({
            matrix: boundMatrix(nextMatrix, 'translate', state.last),
            immediate: !state.last,
          })
        }
      },
      onPinch: state => {
        pinchLockRef.current = !state.last
        const [d] = state.offset
        if (d < 0) return
        let mergedMaxZoom: number
        if (maxZoom === 'auto') {
          mergedMaxZoom =
            controlSize && imgSize
              ? Math.max(
                  controlSize.height / imgSize.height,
                  controlSize.width / imgSize.width
                )
              : 1
        } else {
          mergedMaxZoom = maxZoom
        }

        const nextZoom = state.last ? bound(d, 1, mergedMaxZoom) : d
        props.onZoomChange?.(nextZoom)
        if (state.last && nextZoom <= 1) {
          api.start({
            matrix: mat.create(),
          })
        } else {
          if (!controlSize) return

          const currentMatrix = matrix.get()
          const currentZoom = mat.getScaleX(currentMatrix)

          const originOffsetX = state.origin[0] - controlSize.width / 2
          const originOffsetY = state.origin[1] - controlSize.height / 2
          let nextMatrix = mat.translate(
            currentMatrix,
            -originOffsetX,
            -originOffsetY
          )
          nextMatrix = mat.scale(nextMatrix, nextZoom / currentZoom)
          nextMatrix = mat.translate(nextMatrix, originOffsetX, originOffsetY)

          api.start({
            matrix: boundMatrix(nextMatrix, 'scale', state.last),
            immediate: !state.last,
          })
        }
      },
    },
    {
      target: controlRef,
      drag: {
        from: () => [
          mat.getTranslateX(matrix.get()),
          mat.getTranslateY(matrix.get()),
        ],
        pointer: { touch: true },
      },
      pinch: {
        from: () => [mat.getScaleX(matrix.get()), 0],
        pointer: { touch: true },
      },
    }
  )

  return (
    <div className={`${classPrefix}-slide`}>
      <div className={`${classPrefix}-control`} ref={controlRef}>
        <animated.div
          className={`${classPrefix}-image-wrapper`}
          style={{
            matrix,
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
