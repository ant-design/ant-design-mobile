import { animated, useSpring } from '@react-spring/web'
import { useSize } from 'ahooks'
import type { FC, MutableRefObject, ReactNode, RefObject } from 'react'
import React, { useRef } from 'react'
import { bound } from '../../utils/bound'
import type { Matrix } from '../../utils/matrix'
import * as mat from '../../utils/matrix'
import { rubberbandIfOutOfBounds } from '../../utils/rubberband'
import { useDragAndPinch } from '../../utils/use-drag-and-pinch'

const classPrefix = `adm-image-viewer`

type Props = {
  image: string
  maxZoom: number | 'auto'
  onTap?: () => void
  onZoomChange?: (zoom: number) => void
  dragLockRef?: MutableRefObject<boolean>
  imageRender?: (
    image: string,
    { ref, index }: { ref: RefObject<HTMLImageElement>; index: number }
  ) => ReactNode
  index?: number
}

export const Slide: FC<Props> = props => {
  const { dragLockRef, maxZoom, imageRender, index } = props
  const initialMartix = useRef<boolean[]>([])
  const controlRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [{ matrix }, api] = useSpring(() => ({
    matrix: mat.create(),
    config: { tension: 200 },
  }))

  const controlSize = useSize(controlRef)
  const imgSize = useSize(imgRef)

  const pinchLockRef = useRef(false)

  /**
   * Calculate the min and max value of x and y
   */
  const getMinAndMax = (
    nextMatrix: Matrix
  ): {
    x: {
      position: number
      minX: number
      maxX: number
    }
    y: {
      position: number
      minY: number
      maxY: number
    }
  } => {
    if (!controlSize || !imgSize)
      return {
        x: {
          position: 0,
          minX: 0,
          maxX: 0,
        },
        y: {
          position: 0,
          minY: 0,
          maxY: 0,
        },
      }
    const controlLeft = -controlSize.width / 2
    const controlTop = -controlSize.height / 2

    const imgLeft = -imgSize.width / 2
    const imgTop = -imgSize.height / 2

    const zoom = mat.getScaleX(nextMatrix)
    const scaledImgWidth = zoom * imgSize.width
    const scaledImgHeight = zoom * imgSize.height

    const minX = controlLeft - (scaledImgWidth - controlSize.width)
    const maxX = controlLeft

    const minY = controlTop - (scaledImgHeight - controlSize.height)
    const maxY = controlTop

    const [x, y] = mat.apply(nextMatrix, [imgLeft, imgTop])

    return {
      x: {
        position: x,
        minX,
        maxX,
      },
      y: {
        position: y,
        minY,
        maxY,
      },
    }
  }

  /**
   * Check if is reach the bound
   */
  const getReachBound = (
    position: number,
    min: number,
    max: number,
    buffer = 0
  ) => {
    return [position <= min - buffer, position >= max + buffer]
  }

  /**
   * Limit the matrix in the bound
   */
  const boundMatrix = (
    nextMatrix: Matrix,
    type: 'translate' | 'scale',
    last = false
  ): Matrix => {
    if (!controlSize || !imgSize) return nextMatrix

    const zoom = mat.getScaleX(nextMatrix)
    const scaledImgWidth = zoom * imgSize.width
    const scaledImgHeight = zoom * imgSize.height

    const {
      x: { position: x, minX, maxX },
      y: { position: y, minY, maxY },
    } = getMinAndMax(nextMatrix)

    if (type === 'translate') {
      let boundedX = x
      let boundedY = y
      if (scaledImgWidth > controlSize.width) {
        boundedX = last
          ? bound(x, minX, maxX)
          : rubberbandIfOutOfBounds(x, minX, maxX, zoom * 50)
      } else {
        boundedX = -scaledImgWidth / 2
      }

      if (scaledImgHeight > controlSize.height) {
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
          ? bound(x, minX, maxX)
          : -scaledImgWidth / 2,
        scaledImgHeight > controlSize.height
          ? bound(y, minY, maxY)
          : -scaledImgHeight / 2,
      ]
      return mat.translate(nextMatrix, boundedX - x, boundedY - y)
    }

    return nextMatrix
  }

  useDragAndPinch(
    {
      onDrag: state => {
        if (state.first) {
          const {
            x: { position: x, minX, maxX },
          } = getMinAndMax(matrix.get())
          initialMartix.current = getReachBound(x, minX, maxX)
          return
        }
        if (state.pinching) return state.cancel()

        if (state.tap && state.elapsedTime > 0 && state.elapsedTime < 1000) {
          // 判断点击时间>0是为了过滤掉非正常操作，例如用户长按选择图片之后的取消操作（也是一次点击）
          props.onTap?.()
          return
        }
        const currentZoom = mat.getScaleX(matrix.get())
        if (dragLockRef) {
          dragLockRef.current = currentZoom !== 1
        }
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

          const {
            x: { position: x, minX, maxX },
          } = getMinAndMax(nextMatrix)
          if (
            state.last &&
            initialMartix.current.some(i => i) &&
            getReachBound(x, minX, maxX).some(i => i)
          ) {
            if (dragLockRef) {
              dragLockRef.current = false
            }

            api.start({
              matrix: mat.create(),
            })
          }
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
          if (dragLockRef) {
            dragLockRef.current = false
          }
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
          if (dragLockRef) {
            dragLockRef.current = true
          }
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

  const customRendering =
    typeof imageRender === 'function' &&
    imageRender(props.image, { ref: imgRef, index: index ?? 0 })

  return (
    <div className={`${classPrefix}-slide`}>
      <div className={`${classPrefix}-control`} ref={controlRef}>
        <animated.div
          className={`${classPrefix}-image-wrapper`}
          style={{
            matrix,
          }}
        >
          {customRendering ? (
            customRendering
          ) : (
            <img
              ref={imgRef}
              src={props.image}
              draggable={false}
              alt={props.image}
            />
          )}
        </animated.div>
      </div>
    </div>
  )
}
