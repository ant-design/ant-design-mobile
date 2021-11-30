import React, { FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import Tabs from '../tabs'
import CheckList from '../check-list'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import { useCascaderOptions } from './use-cascader-options'
import { useCascaderValueExtend } from './use-cascader-value-extend'

const classPrefix = `adm-cascader-view`

export type CascaderValue = string

export type CascaderOption = {
  label: string
  value: string
  disabled?: boolean
  children?: CascaderOption[]
}

export type CascaderValueExtend = {
  items: (CascaderOption | null)[]
}

export type CascaderViewProps = {
  options: CascaderOption[]
  value?: CascaderValue[]
  defaultValue?: CascaderValue[]
  onChange?: (value: CascaderValue[], extend: CascaderValueExtend) => void
  placeholder?: string
} & NativeProps<'--height'>

const defaultProps = {
  defaultValue: [],
  placeholder: '请选择',
}

export const CascaderView: FC<CascaderViewProps> = p => {
  const props = mergeProps(defaultProps, p)
  const [value, setValue] = usePropsValue({
    ...props,
    onChange: val => {
      props.onChange?.(val, generateValueExtend(val))
    },
  })
  const [tabActiveKey, setTabActiveKey] = useState<number>(0)

  useEffect(() => {
    if (value.length > 0) {
      setTabActiveKey(value.length - 1)
    }
  }, [])

  const generateValueExtend = useCascaderValueExtend(props.options)
  const { depth, optionsMap, optionsParentMap } = useCascaderOptions(
    props.options
  )

  const onItemSelect = (selectValue: string) => {
    if (!selectValue) return

    const parentNodes: CascaderOption[] = []
    let current: CascaderOption | undefined = optionsMap[selectValue]
    while (current) {
      parentNodes.unshift(current)
      const next: CascaderOption = optionsParentMap[current.value]
      current = next
    }

    const values = parentNodes.map(i => i.value)
    setValue(values)
    setTimeout(() => {
      if (tabActiveKey + 1 < depth) {
        setTabActiveKey(tabActiveKey + 1)
      }
    })
  }

  const renderItems = (columnOptions: CascaderOption[] = [], index: number) => {
    const checkedValue: string[] = []
    return (
      <CheckList
        value={checkedValue}
        onChange={selectValue => onItemSelect(selectValue[0])}
        className={`${classPrefix}-content`}
      >
        {columnOptions.map(item => {
          let active = false
          if (item.value === value[index]) {
            checkedValue.push(item.value)
            active = true
          }
          return (
            <CheckList.Item
              value={item.value}
              key={item.value}
              disabled={item.disabled}
              className={classNames(`${classPrefix}-item`, {
                [`${classPrefix}-item-active`]: active,
              })}
              style={{}}
            >
              {item.label}
            </CheckList.Item>
          )
        })}
      </CheckList>
    )
  }

  const renderColumns = () => {
    const columns = []
    for (let i = 0; i < depth; i++) {
      const data =
        i === 0 ? props.options : optionsMap[value[i - 1] || '']?.children
      const column = renderItems(data, i)
      columns.push(column)
    }
    return columns
  }

  return withNativeProps(
    props,
    <Tabs
      activeKey={tabActiveKey.toString()}
      onChange={key => setTabActiveKey(parseInt(key))}
      stretch={false}
      style={{ '--title-font-size': '14px', '--content-padding': 'none' }}
      className={classPrefix}
    >
      {renderColumns().map((column, index) => {
        if (!value[index] && index > 0 && !value[index - 1]) {
          return
        }
        return (
          <Tabs.Tab
            title={
              <div className={`${classPrefix}-header-title`}>
                {generateValueExtend(value).items[index]?.label ||
                  props.placeholder}
              </div>
            }
            key={index.toString()}
            forceRender
          >
            {column}
          </Tabs.Tab>
        )
      })}
    </Tabs>
  )
}
