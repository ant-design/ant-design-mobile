import { useDrag } from '@use-gesture/react'
import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React, { useRef } from 'react'
import { bound } from '../../utils/bound'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { Star } from './star'

const classPrefix = `adm-rate`

export type RateProps = {
  allowClear?: boolean
  allowHalf?: boolean
  character?: ReactNode
  count?: number
  defaultValue?: number
  readOnly?: boolean
  value?: number
  onChange?: (value: number) => void
} & NativeProps<
  | '--star-size'
  | '--active-color'
  | '--inactive-color'
  | '--inactive-color-half'
>

const defaultProps = {
  count: 5,
  allowHalf: false,
  character: <Star />,
  defaultValue: 0,
  readOnly: false,
  allowClear: true,
}

export const Rate: FC<RateProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const [value, setValue] = usePropsValue(mergedProps)

  const containerRef = useRef<HTMLDivElement>(null)
  const starList = Array(mergedProps.count).fill(null)

  function renderStar(v: number, half: boolean) {
    return (
      <div
        className={classNames(`${classPrefix}-star`, {
          [`${classPrefix}-star-active`]: value >= v,
          [`${classPrefix}-star-half`]: half,
          [`${classPrefix}-star-readonly`]: mergedProps.readOnly,
        })}
        role='radio'
        aria-checked={value >= v}
        aria-label={'' + v}
      >
        {mergedProps.character}
      </div>
    )
  }

  const bind = useDrag(
    state => {
      if (mergedProps.readOnly) return
      const {
        xy: [clientX],
        tap,
      } = state
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      const rawValue = ((clientX - rect.left) / rect.width) * mergedProps.count

      const ceiledValue = mergedProps.allowHalf
        ? Math.ceil(rawValue * 2) / 2
        : Math.ceil(rawValue)

      const boundValue = bound(ceiledValue, 0, mergedProps.count)

      if (tap) {
        if (mergedProps.allowClear && boundValue === value) {
          setValue(0)
          return
        }
      }

      setValue(boundValue)
    },
    {
      axis: 'x',
      pointer: {
        touch: true,
      },
      filterTaps: true,
    }
  )
  return withNativeProps(
    mergedProps,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-half`]: mergedProps.allowHalf,
      })}
      role='radiogroup'
      aria-readonly={mergedProps.readOnly}
      ref={containerRef}
      {...bind()}
    >
      {starList.map((_, i) => (
        <div key={i} className={classNames(`${classPrefix}-box`)}>
          {mergedProps.allowHalf && renderStar(i + 0.5, true)}
          {renderStar(i + 1, false)}
        </div>
      ))}
    </div>
  )
}
