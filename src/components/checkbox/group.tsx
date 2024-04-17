import type { FC, ReactNode } from 'react'
import React from 'react'
import { CheckboxValue } from '.'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { CheckboxGroupContext } from './group-context'

export interface CheckboxGroupProps {
  value?: CheckboxValue[]
  onChange?: (val: CheckboxValue[]) => void
  defaultValue?: CheckboxValue[]
  disabled?: boolean
  children?: ReactNode
}

const defaultProps = {
  disabled: false,
  defaultValue: [],
}

export const Group: FC<CheckboxGroupProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const [value, setValue] = usePropsValue(mergedProps)

  return (
    <CheckboxGroupContext.Provider
      // TODO: 性能优化
      value={{
        value: value,
        disabled: mergedProps.disabled,
        check: v => {
          setValue([...value, v])
        },
        uncheck: v => {
          setValue(value.filter(item => item !== v))
        },
      }}
    >
      {mergedProps.children}
    </CheckboxGroupContext.Provider>
  )
}
