import type { FC, ReactNode } from 'react'
import React from 'react'
import { RadioValue } from '.'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { RadioGroupContext } from './group-context'

export interface RadioGroupProps {
  value?: RadioValue | null
  onChange?: (val: RadioValue) => void
  defaultValue?: RadioValue | null
  disabled?: boolean
  children?: ReactNode
}

const defaultProps = {
  disabled: false,
  defaultValue: null,
}

export const Group: FC<RadioGroupProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const [value, setValue] = usePropsValue({
    value: mergedProps.value,
    defaultValue: mergedProps.defaultValue,
    onChange: v => {
      if (v === null) return
      mergedProps.onChange?.(v)
    },
  })
  return (
    <RadioGroupContext.Provider
      // TODO: 性能优化
      value={{
        value: value === null ? [] : [value],
        check: v => {
          setValue(v)
        },
        uncheck: () => {},
        disabled: mergedProps.disabled,
      }}
    >
      {mergedProps.children}
    </RadioGroupContext.Provider>
  )
}
