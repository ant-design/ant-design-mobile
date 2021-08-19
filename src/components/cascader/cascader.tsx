import { useControllableValue } from 'ahooks'
import classNames from 'classnames'
import React, { useMemo } from 'react'
import { ElementProps } from '../../utils/element-props'
import { getTreeDeep } from '../../utils/tree'
import { withDefaultProps } from '../../utils/with-default-props'

const classPrefix = `am-cascader`

export interface CascaderOption {
  [key: string]: any
}

export type CascaderProps = {
  options: CascaderOption[]
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[], nodes: CascaderOption[]) => void
  fieldNames?: { label: string; value: string; children: string }
} & ElementProps

export const Cascader = withDefaultProps({
  options: [],
  fieldNames: {},
})<CascaderProps>(props => {
  const labelName = props.fieldNames.label || 'label'
  const valueName = props.fieldNames.value || 'value'
  const childrenName = props.fieldNames.children || 'children'

  const [value, setValue] = useControllableValue<string[]>(props, {
    defaultValue: [],
  }) as [string[], (value: string[], nodes: CascaderOption[]) => void]

  const [deep, optionsMap, optionsParentMap] = useMemo(() => {
    const deep = getTreeDeep(props.options, childrenName)

    const optionsMap = new Map<string, CascaderOption>()
    const optionsParentMap = new Map<string, CascaderOption | undefined>()

    function traverse(
      current: CascaderOption | undefined,
      children: CascaderOption[]
    ) {
      children.forEach(item => {
        optionsParentMap.set(item[valueName], current)
        optionsMap.set(item[valueName], item)
        if (item[childrenName]) {
          traverse(item, item[childrenName])
        }
      })
    }
    traverse(undefined, props.options)

    return [deep, optionsMap, optionsParentMap]
  }, [props.options])

  const onItemSelect = (node: CascaderOption) => {
    // 找到父级节点
    const parentNodes: CascaderOption[] = []
    let current: CascaderOption | undefined = node
    while (current) {
      parentNodes.unshift(current)
      const next = optionsParentMap.get(current[valueName])
      current = next
    }

    const values = parentNodes.map(i => i[valueName])
    setValue(values, parentNodes)
  }

  const renderItems = (columnOptions: CascaderOption[] = [], index: number) => {
    return columnOptions.map(item => {
      const isActive = item[valueName] === value[index]
      return (
        <div
          key={item[valueName]}
          className={classNames(`${classPrefix}-item`, {
            [`${classPrefix}-item-active`]: isActive,
          })}
          onClick={() => {
            if (!isActive) {
              onItemSelect(item)
            }
          }}
        >
          {item[labelName]}
        </div>
      )
    })
  }

  const renderColumns = () => {
    const columns = []
    for (let i = 0; i < deep; i++) {
      let width = `${100 / deep}%`

      // 两列的第一列宽度为 33.33，两列的第二列为 66.67%
      if (deep === 2 && i === 0) {
        width = `33.33%`
      }
      if (deep === 2 && i === 1) {
        width = `66.67%`
      }

      const column = (
        <div
          key={i}
          className={classNames(`${classPrefix}-column`)}
          style={{ width }}
        >
          {renderItems(
            i === 0
              ? props.options
              : optionsMap.get(value[i - 1])?.[childrenName],
            i
          )}
        </div>
      )
      columns.push(column)
    }
    return columns
  }

  return (
    <div
      className={classNames(classPrefix, props.className)}
      style={props.style}
    >
      {renderColumns()}
    </div>
  )
})
