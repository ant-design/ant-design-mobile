import React from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { withDefaultProps } from '../../utils/with-default-props'
import { StarFilled } from '@ant-design/icons'
import { useNewControllableValue } from '../../utils/use-controllable-value'

const classPrefix = `adm-rate`

export type RateProps = {
  allowClear?: boolean
  allowHalf?: boolean
  character?: React.ReactNode
  count?: number
  defaultValue?: number
  readonly?: boolean
  value?: number
  onChange?: (value: number) => void
} & NativeProps<'--star-size' | '--active-color'>

const defaultProps = {
  count: 5,
  allowHalf: false,
  character: <StarFilled />,
  defaultValue: 0,
  readonly: false,
  allowClear: true,
}

export const Rate = withDefaultProps(defaultProps)<RateProps>(props => {
  const [value, setValue] = useNewControllableValue(props)
  const starList = Array(props.count).fill(null)
  function renderStar(v: number, half: boolean) {
    return (
      <div
        className={classNames(`${classPrefix}-star`, {
          [`${classPrefix}-star-active`]: value >= v,
          [`${classPrefix}-star-half`]: half,
          [`${classPrefix}-star-readonly`]: props.readonly,
        })}
        onClick={() => {
          if (props.readonly) return
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
  return withNativeProps(
    props,
    <div className={classPrefix}>
      {starList.map((_, i) => (
        <div key={i} className={classNames(`${classPrefix}-box`)}>
          {props.allowHalf && renderStar(i + 0.5, true)}
          {renderStar(i + 1, false)}
        </div>
      ))}
    </div>
  )
})
