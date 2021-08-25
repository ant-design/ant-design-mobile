import React from 'react'
import { withDefaultProps } from '../../utils/with-default-props'
import { RadioValue } from '.'
import { RadioGroupContext } from './group-context'
import { useNewControllableValue } from '../../utils/use-controllable-value'

export interface RadioGroupProps {
  value?: RadioValue | null
  onChange?: (val: RadioValue) => void
  defaultValue?: RadioValue | null
  disabled?: boolean
}

const defaultProps = {
  disabled: false,
  defaultValue: null,
}

export const Group = withDefaultProps(defaultProps)<RadioGroupProps>(props => {
  const [value, setValue] = useNewControllableValue(props)
  return (
    <RadioGroupContext.Provider
      // TODO: 性能优化
      value={{
        value: value === null ? [] : [value],
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
