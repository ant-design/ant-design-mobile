import React, { FC, useRef } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import { Star } from './star'
import Slider from '../slider'

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
  const initialValue = useRef(value)
  const starList = Array(props.count).fill(null)

  function renderStar(v: number, half: boolean) {
    return (
      <div
        className={classNames(`${classPrefix}-star`, {
          [`${classPrefix}-star-active`]: value >= v,
          [`${classPrefix}-star-half`]: half,
          [`${classPrefix}-star-readonly`]: props.readOnly,
        })}
        role='radio'
        aria-checked={value >= v}
        aria-label={'' + v}
        onClick={() => {
          if (props.readOnly) return
          if (props.allowClear && value === v) {
            setValue(0)
          } else {
            setValue(v)
          }
        }}
      >
        {props.character}
      </div>
    )
  }

  const getNearNum = (val: number) => {
    if (!val) return 0

    const roundValue = Math.round(val)
    const floorValue = Math.floor(val)
    const ceilValue = Math.ceil(val)

    if (props.allowHalf) {
      return roundValue > val ? roundValue : floorValue + 0.5
    }

    return ceilValue
  }

  return withNativeProps(
    props,
    <div
      className={classPrefix}
      role='radiogroup'
      aria-readonly={props.readOnly}
    >
      {starList.map((_, i) => (
        <div key={i} className={classNames(`${classPrefix}-box`)}>
          {props.allowHalf && renderStar(i + 0.5, true)}
          {renderStar(i + 1, false)}
        </div>
      ))}

      {withNativeProps(
        {
          ...props,
          style: {
            '--slider-translate': value === 0 ? 0 : '-100%',
          },
        },
        <Slider
          className={classNames(`${classPrefix}-range`)}
          value={value}
          max={props.count}
          step={0.1}
          onAfterChange={val => {
            if (props.readOnly) return
            const afterValue = getNearNum(val as number)
            if (props.allowClear && afterValue === initialValue.current) {
              setValue(0)
              initialValue.current = 0
              return
            }

            initialValue.current = afterValue
          }}
          onChange={val => {
            if (props.readOnly) return
            setValue(getNearNum(val as number))
          }}
        ></Slider>
      )}
    </div>
  )
}
