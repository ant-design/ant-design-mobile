import classNames from 'classnames'
import React, { useMemo } from 'react'
import type { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { getTreeDeep } from '../../utils/tree'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import { useFieldNames } from '../../hooks'
import type { FieldNamesType } from '../../hooks'

const classPrefix = `adm-tree-select`

export type TreeSelectOption = {
  label?: string
  value?: string
  children?: TreeSelectOption[]
} & {
  [key: string]: any
}

export type TreeSelectProps = {
  options: TreeSelectOption[]
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[], extend: { options: TreeSelectOption[] }) => void
  fieldNames?: FieldNamesType
} & NativeProps

const defaultProps = {
  options: [],
  fieldNames: {},
  defaultValue: [],
}

export const TreeSelect: FC<TreeSelectProps> = p => {
  const props = mergeProps(defaultProps, p)
  const [labelName, valueName, childrenName] = useFieldNames(props.fieldNames)
  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
  })

  const [deep, optionsMap, optionsParentMap] = useMemo(() => {
    const deep = getTreeDeep(props.options, childrenName)

    const optionsMap = new Map<string, TreeSelectOption>()
    const optionsParentMap = new Map<string, TreeSelectOption | undefined>()

    function traverse(
      current: TreeSelectOption | undefined,
      children: TreeSelectOption[]
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

  const onItemSelect = (node: TreeSelectOption) => {
    // 找到父级节点
    const parentNodes: TreeSelectOption[] = []
    let current: TreeSelectOption | undefined = node
    while (current) {
      parentNodes.push(current)
      const next = optionsParentMap.get(current[valueName])
      current = next
    }
    const values = parentNodes.reverse().map(i => i[valueName])
    setValue(values)
    props.onChange?.(values, {
      options: parentNodes,
    })
  }

  const renderItems = (
    columnOptions: TreeSelectOption[] = [],
    index: number
  ) => {
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
    const columns: JSX.Element[] = []
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

  return withNativeProps(
    props,
    <div className={classPrefix}>{renderColumns()}</div>
  )
}
