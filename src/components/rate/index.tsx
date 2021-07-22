import React from 'react'
import classNames from 'classnames'
import {ElementProps} from '../../utils/element-props'
import {withDefaultProps} from '../../utils/with-default-props'
import {StarFilled} from '@ant-design/icons'
import {useControllableValue} from 'ahooks'

const classPrefix = `am-rate`

export type RateProps = {
  allowClear?: boolean
  allowHalf?: boolean
  character?: React.ReactNode
  count?: number
  defaultValue?: number
  readonly?: boolean
  value?: number
  onChange?: (value: number) => void
} & ElementProps<{
  '--star-size': string
  '--active-color': string
}>

const defaultProps = {
  count: 5,
  allowHalf: false,
  character: <StarFilled />,
  defaultValue: 0,
  readonly: false,
  allowClear: true,
}

const Rate = withDefaultProps(defaultProps)<RateProps>(props => {
  const [value, setValue] = useControllableValue<number>(props)
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
  return (
    <div
      style={props.style}
      className={classNames(classPrefix, props.className)}
    >
      {starList.map((_, i) => (
        <div key={i} className={classNames(`${classPrefix}-box`)}>
          {props.allowHalf && renderStar(i + 0.5, true)}
          {renderStar(i + 1, false)}
        </div>
      ))}
    </div>
  )
})

export default Rate
