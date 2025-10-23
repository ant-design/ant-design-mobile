import { CheckOutline } from 'antd-mobile-icons'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import List, { ListProps } from '../list'
import { CheckListContext } from './context'

export type CheckListValue = string | number

export type CheckListProps = Pick<ListProps, 'mode' | 'style' | 'prefixCls'> & {
  defaultValue?: CheckListValue[]
  value?: CheckListValue[]
  onChange?: (val: CheckListValue[]) => void
  multiple?: boolean
  activeIcon?: ReactNode
  extra?: (active: boolean) => ReactNode
  disabled?: boolean
  readOnly?: boolean
  children?: ReactNode
} & NativeProps

const defaultProps = {
  multiple: false,
  defaultValue: [],
  activeIcon: <CheckOutline />,
}

export const CheckList: FC<CheckListProps> = props => {
  const { checkList: componentConfig = {}, getPrefixCls } = useConfig()
  const mergedProps = mergeProps(defaultProps, componentConfig, props)
  const prefixCls = getPrefixCls('check-list', mergedProps.prefixCls)
  const [value, setValue] = usePropsValue(mergedProps)

  function check(val: CheckListValue) {
    if (mergedProps.multiple) {
      setValue([...value, val])
    } else {
      setValue([val])
    }
  }

  function uncheck(val: CheckListValue) {
    setValue(value.filter(item => item !== val))
  }

  const { activeIcon, extra, disabled, readOnly } = mergedProps

  return (
    <CheckListContext.Provider
      value={{
        value,
        check,
        uncheck,
        activeIcon,
        extra,
        disabled,
        readOnly,
      }}
    >
      {withNativeProps(
        mergedProps,
        <List mode={mergedProps.mode} className={prefixCls}>
          {mergedProps.children}
        </List>
      )}
    </CheckListContext.Provider>
  )
}
