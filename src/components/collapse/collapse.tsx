import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import List from '../list'
import { usePropsValue } from '../../utils/use-props-value'
import CollapseContextProvider from './collapse-context'
import toArray from '../../utils/toArray'

export const classPrefix = `adm-collapse`

type ValueProps<T> = {
  activeKey?: T
  defaultActiveKey?: T
  onChange?: (activeKey: T) => void
  arrow?: React.ReactNode | ((active: boolean) => React.ReactNode)
}

export type CollapseProps = (
  | ({
      accordion?: false
    } & ValueProps<string[]>)
  | ({
      accordion: true
    } & ValueProps<string | null>)
) &
  NativeProps

export const Collapse: FC<CollapseProps> = props => {
  const [activeKey, setActiveKey] = usePropsValue<string[]>(
    props.accordion
      ? {
          value:
            props.activeKey === undefined
              ? undefined
              : props.activeKey === null
              ? []
              : [props.activeKey],
          defaultValue:
            props.defaultActiveKey === undefined ||
            props.defaultActiveKey === null
              ? []
              : [props.defaultActiveKey],
          onChange: v => {
            props.onChange?.(v[0] ?? null)
          },
        }
      : {
          value: props.activeKey,
          defaultValue: props.defaultActiveKey ?? [],
          onChange: props.onChange,
        }
  )

  const activeKeyList =
    activeKey === null ? [] : Array.isArray(activeKey) ? activeKey : [activeKey]

  const onCollapse = (key: string) => {
    const active = activeKeyList.includes(key)

    if (props.accordion) {
      setActiveKey(active ? [] : [key])
    } else {
      const newActiveKeysList = active
        ? activeKeyList.filter(v => v !== key)
        : [...activeKeyList, key]
      setActiveKey(newActiveKeysList)
    }
  }

  const children = toArray(props.children).map((child, index) => {
    if (!React.isValidElement(child)) {
      return child
    }

    const childProps = {
      ...(child.props as any),
      panelKey: child.key || String(index),
      active: activeKeyList.includes(child.key as string),
    }

    return React.cloneElement(child, childProps)
  })

  return withNativeProps(
    props,
    <CollapseContextProvider
      value={{
        ...props,
        onCollapse,
      }}
    >
      <div className={classPrefix}>
        <List>{children}</List>
      </div>
    </CollapseContextProvider>
  )
}
