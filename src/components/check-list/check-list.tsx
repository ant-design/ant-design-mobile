import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import List, { ListProps } from '../list'
import { mergeProps } from '../../utils/with-default-props'
import { CheckListContext } from './context'
import { useNewControllableValue } from '../../utils/use-controllable-value'

export type CheckListProps = Pick<ListProps, 'mode'> & {
  defaultValue?: string[]
  value?: string[]
  onChange?: (val: string[]) => void
  multiple?: boolean
} & NativeProps<'--prefix-width' | '--align-items'>

const defaultProps = {
  multiple: false,
  defaultValue: [],
}

export const CheckList: FC<CheckListProps> = p => {
  const props = mergeProps(defaultProps, p)

  const [value, setValue] = useNewControllableValue(props)

  function check(val: string) {
    if (props.multiple) {
      setValue([...value, val])
    } else {
      setValue([val])
    }
  }

  function uncheck(val: string) {
    setValue(value.filter(item => item !== val))
  }

  return withNativeProps(
    props,
    <CheckListContext.Provider
      value={{
        value,
        check,
        uncheck,
      }}
    >
      <List mode={props.mode}>{props.children}</List>
    </CheckListContext.Provider>
  )
}
