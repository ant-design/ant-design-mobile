import React from 'react'
import {useControllableValue} from 'ahooks'
import {withDefaultProps} from '../../utils/with-default-props'
import {RadioValue} from '.'
import {RadioGroupContext} from './group-context'

export interface RadioGroupProps {
  value?: RadioValue
  onChange?: (val: RadioValue) => void
  defaultValue?: RadioValue
  disabled?: boolean
}

const defaultProps = {
  disabled: false,
}

export const Group = withDefaultProps(defaultProps)<RadioGroupProps>(props => {
  const [value, setValue] = useControllableValue<RadioValue>(props, {
    defaultValue: undefined,
  })
  return (
    <RadioGroupContext.Provider
      // TODO: 性能优化
      value={{
        value: [value],
        check: v => {
          setValue(v)
        },
        uncheck: () => {},
        disabled: props.disabled,
      }}
    >
      {props.children}
    </RadioGroupContext.Provider>
  )
})
