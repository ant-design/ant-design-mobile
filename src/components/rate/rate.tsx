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
      >
        {props.character}
      </div>
    )
  }

  const clearEvent = (val: number) => {
    if (props.readOnly) return
    if (!props.allowClear) return

    const roundValue = Math.round(val)
    const floorValue = Math.floor(val)
    const ceilValue = Math.ceil(val)

    if (props.allowHalf) {
      if (floorValue === roundValue) {
        if (floorValue + 0.5 === initialValue.current) {
          setValue(0)
        }
        return
      }
      if (ceilValue === initialValue.current) {
        setValue(0)
      }
      return
    }

    if (ceilValue === initialValue.current) {
      setValue(0)
    }
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

      <input
        role='slider'
        aria-label='hidden'
        type='range'
        className={classNames(`${classPrefix}-range`)}
        step={0.01}
        max={props.count}
        defaultValue={value}
        onChange={val => {
          if (props.readOnly) return
          const numberVal = +val.target.value
          const roundValue = Math.round(numberVal)
          const floorValue = Math.floor(numberVal)
          const ceilValue = Math.ceil(numberVal)
          if (!numberVal) {
            setValue(numberVal)
            return
          }

          if (roundValue === floorValue && props.allowHalf) {
            setValue(floorValue + 0.5)
            return
          }

          setValue(ceilValue)
        }}
        onMouseDown={() => {
          initialValue.current = value
        }}
        onMouseUp={e => {
          clearEvent(+(e.target as HTMLInputElement).value)
        }}
        onTouchStart={() => {
          initialValue.current = value
        }}
        onTouchEnd={e => {
          clearEvent(+(e.target as HTMLInputElement).value)
        }}
      />
    </div>
  )
}
