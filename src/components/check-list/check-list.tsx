import React, { FC, ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import List, { ListProps } from '../list'
import { mergeProps } from '../../utils/with-default-props'
import { CheckListContext } from './context'
import { usePropsValue } from '../../utils/use-props-value'
import { CheckOutline } from 'antd-mobile-icons'

const classPrefix = 'adm-check-list'

export type CheckListProps = Pick<ListProps, 'mode' | 'style'> & {
  defaultValue?: string[]
  value?: string[]
  onChange?: (val: string[]) => void
  multiple?: boolean
  activeIcon?: ReactNode
  disabled?: boolean
  readOnly?: boolean
  children?: React.ReactNode
} & NativeProps

const defaultProps = {
  multiple: false,
  defaultValue: [],
  activeIcon: <CheckOutline />,
}

export const CheckList: FC<CheckListProps> = p => {
  const props = mergeProps(defaultProps, p)

  const [value, setValue] = usePropsValue(props)

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

  const { activeIcon, disabled, readOnly } = props

  return (
    <CheckListContext.Provider
      value={{
        value,
        check,
        uncheck,
        activeIcon,
        disabled,
        readOnly,
      }}
    >
      {withNativeProps(
        props,
        <List mode={props.mode} className={classPrefix}>
          {props.children}
        </List>
      )}
    </CheckListContext.Provider>
  )
}
