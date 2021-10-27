import React from 'react'
import { withDefaultProps } from '../../utils/with-default-props'
import { CheckboxValue } from '.'
import { CheckboxGroupContext } from './group-context'
import { usePropsValue } from '../../utils/use-props-value'

export interface CheckboxGroupProps {
  value?: CheckboxValue[]
  onChange?: (val: CheckboxValue[]) => void
  defaultValue?: CheckboxValue[]
  disabled?: boolean
}

const defaultProps = {
  disabled: false,
  defaultValue: [],
}

export const Group = withDefaultProps(defaultProps)<CheckboxGroupProps>(
  props => {
    const [value, setValue] = usePropsValue(props)

    return (
      <CheckboxGroupContext.Provider
        // TODO: 性能优化
        value={{
          value: value,
          disabled: props.disabled,
          check: v => {
            setValue([...value, v])
          },
          uncheck: v => {
            setValue(value.filter(item => item !== v))
          },
        }}
      >
        {props.children}
      </CheckboxGroupContext.Provider>
    )
  }
)
