import React, { FC, useRef } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import { Star } from './star'

const classPrefix = `adm-rate`

export type RateProps = {
  allowClear?: boolean
  allowHalf?: boolean
  character?: React.ReactNode
  count?: number
  defaultValue?: number
  readOnly?: boolean
  value?: number
  onChange?: (value: number) => void
} & NativeProps<'--star-size' | '--active-color' | '--inactive-color'>

const defaultProps = {
  count: 5,
  allowHalf: false,
  character: <Star />,
  defaultValue: 0,
  readOnly: false,
  allowClear: true,
}

export const Rate: FC<RateProps> = p => {
  const props = mergeProps(defaultProps, p)
  const [value, setValue] = usePropsValue(props)
  const starRefs = useRef<HTMLDivElement[]>([])
  const ranges = useRef<
    {
      left: number
      value: number
    }[]
  >([])
  const starList = Array(props.count).fill(null)

  function renderStar(v: number, half: boolean) {
    return (
      <div
        className={classNames(`${classPrefix}-star`, {
          [`${classPrefix}-star-active`]: value >= v,
          [`${classPrefix}-star-half`]: half,
          [`${classPrefix}-star-readonly`]: props.readOnly,
        })}
        ref={el => {
          if (el) starRefs.current[v] = el
        }}
        onClick={() => {
          if (props.readOnly) return
          if (props.allowClear && value === v) {
            setValue(0)
          } else {
            setValue(v)
          }
        }}
        role='radio'
        aria-checked={value >= v}
        aria-label={'' + v}
      >
        {props.character}
      </div>
    )
  }

  return withNativeProps(
    props,
    <div
      className={classPrefix}
      role='radiogroup'
      aria-readonly={props.readOnly}
      onTouchStart={() => {
        ranges.current = starList
          .reduce((prev, _, i) => {
            const rect = starRefs.current[i + 1].getBoundingClientRect()

            if (props.allowHalf) {
              prev.push({
                left: rect.left,
                value: i + 0.5,
              })
              prev.push({
                left: rect.left + rect.width / 2,
                value: i + 1,
              })
            } else {
              prev.push({
                left: rect.left,
                value: i + 1,
              })
            }

            return prev
          }, [] as typeof ranges.current)
          .reverse()
      }}
      onTouchMove={event => {
        if (props.readOnly) return
        const { clientX } = event.touches[0]

        const firstStar = ranges.current.find(i => i.left < clientX)
        if (firstStar) {
          setValue(firstStar.value)
        } else {
          setValue(0)
        }
      }}
    >
      {starList.map((_, i) => (
        <div key={i} className={classNames(`${classPrefix}-box`)}>
          {props.allowHalf && renderStar(i + 0.5, true)}
          {renderStar(i + 1, false)}
        </div>
      ))}
    </div>
  )
}
