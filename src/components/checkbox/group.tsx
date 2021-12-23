import React, { FC } from 'react'
import { mergeProps } from '../../utils/with-default-props'
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

export const Group: FC<CheckboxGroupProps> = p => {
  const props = mergeProps(defaultProps, p)
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
