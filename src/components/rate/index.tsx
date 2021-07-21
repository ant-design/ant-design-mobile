import React, {useState} from 'react'
import classNames from 'classnames'
import {ElementProps} from '../../utils/element-props'
import {withDefaultProps} from '../../utils/with-default-props'
import {StarFilled} from '@ant-design/icons'

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
} & ElementProps

const defaultProps = {
  count: 5,
  allowHalf: false,
  character: <StarFilled />,
  defaultValue: 0,
  readonly: false,
  allowClear: true,
}

const Rate = withDefaultProps(defaultProps)<RateProps>(props => {
  const [current, setCurrent] = useState(props.value || props.defaultValue)
  const getStarList = (num: number) => {
    return Array.from(new Array(num)).map((v, i) => i)
  }
  return (
    <div
      style={props.style}
      className={classNames(classPrefix, props.className)}
    >
      {getStarList(props.count).map((v, i) => {
        return (
          <div key={i} className={classNames(`${classPrefix}-box`)}>
            {props.allowHalf && (
              <div
                className={
                  current >= i + 0.5
                    ? classNames(`${classPrefix}-half`, 'active')
                    : classNames(`${classPrefix}-half`)
                }
                onClick={() => {
                  if (!props.readonly) {
                    if (props.allowClear && current === i + 0.5) {
                      setCurrent(0)
                    } else {
                      setCurrent(i + 0.5)
                    }
                  }
                }}
              >
                {props.character}
              </div>
            )}
            <div
              className={
                current >= i + 1
                  ? classNames(`${classPrefix}-whole`, 'active')
                  : classNames(`${classPrefix}-whole`)
              }
              onClick={() => {
                if (!props.readonly) {
                  if (props.allowClear && current === i + 1) {
                    setCurrent(0)
                  } else {
                    setCurrent(i + 1)
                  }
                }
              }}
            >
              {props.character}
            </div>
          </div>
        )
      })}
    </div>
  )
})

export default Rate
