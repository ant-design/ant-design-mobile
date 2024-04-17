import classNames from 'classnames'
import type { FC } from 'react'
import React, { useMemo } from 'react'
import type { FieldNamesType } from '../../hooks'
import { useFieldNames } from '../../hooks'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { getTreeDeep } from '../../utils/tree'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'

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

export const TreeSelect: FC<TreeSelectProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)
  const [labelName, valueName, childrenName] = useFieldNames(
    mergedProps.fieldNames
  )
  const [value, setValue] = usePropsValue({
    value: mergedProps.value,
    defaultValue: mergedProps.defaultValue,
  })

  const [deep, optionsMap, optionsParentMap] = useMemo(() => {
    const deep = getTreeDeep(mergedProps.options, childrenName)

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
    traverse(undefined, mergedProps.options)

    return [deep, optionsMap, optionsParentMap]
  }, [mergedProps.options])

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
    mergedProps.onChange?.(values, {
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
              ? mergedProps.options
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
    mergedProps,
    <div className={classPrefix}>{renderColumns()}</div>
  )
}
