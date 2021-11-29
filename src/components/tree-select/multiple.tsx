import classNames from 'classnames'
import React, { FC, useEffect, useMemo } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { getTreeDeep } from '../../utils/tree'
import { mergeProps } from '../../utils/with-default-props'
import Checkbox from '../checkbox'
import { TreeSelectOption } from '.'
import { usePropsValue } from '../../utils/use-props-value'
import { devWarning } from '../../utils/dev-log'

const classPrefix = `adm-tree-select-multiple`

export type MultipleProps = {
  options: TreeSelectOption[]

  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[], nodes: TreeSelectOption[]) => void

  selectAllText?: string[]
  fieldNames?: { label: string; value: string; children: string }

  expandKeys?: string[]
  defaultExpandKeys?: string[]
  onExpand?: (expandedKeys: string[], nodes: TreeSelectOption[]) => void
} & NativeProps

export const Multiple: FC<MultipleProps> = p => {
  const props = mergeProps(
    {
      options: [],
      fieldNames: {},
      allSelectText: [],
      defaultExpandKeys: [],
      defaultValue: [],
    },
    p
  )
  useEffect(() => {
    devWarning('TreeSelect', 'TreeSelect.Multiple has been deprecated.')
  }, [])
  const labelName = props.fieldNames.label || 'label'
  const valueName = props.fieldNames.value || 'value'
  const childrenName = props.fieldNames.children || 'children'

  // 打开的 keys
  const [expandKeys, setExpandKeys] = usePropsValue({
    value: props.expandKeys,
    defaultValue: props.defaultExpandKeys,
  })

  // 选中的 value（聚合后）
  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
  })

  // 获取目标所有叶子节点 key 集合
  const getLeafKeys = (option?: TreeSelectOption) => {
    const keys: string[] = []
    const walker = (op?: TreeSelectOption) => {
      if (!op) {
        return
      }
      if (op[childrenName]?.length) {
        op[childrenName].forEach((i: TreeSelectOption) => walker(i))
      } else {
        keys.push(op[valueName])
      }
    }
    walker(option)
    return keys
  }

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

  // 将聚合的 value 拆分开，获得叶子节点的 value 集合
  const allSelectedLeafKeys = useMemo(() => {
    let leafKeys: string[] = []
    value.forEach(v => {
      const option = optionsMap.get(v)
      leafKeys = leafKeys.concat(getLeafKeys(option))
    })
    return leafKeys
  }, [value, optionsMap])

  // 子级有被选中的节点集合
  const dotMap = useMemo(() => {
    const map = new Map<string, boolean>()
    // 遍历 allChildrenValues, 向上递归
    const walker = (key: string) => {
      const parentOption = optionsParentMap.get(key)
      if (!parentOption) {
        return
      }
      map.set(parentOption[valueName], true)
      walker(parentOption[valueName])
    }
    allSelectedLeafKeys.forEach(key => {
      map.set(key, true)
      walker(key)
    })
    return map
  }, [optionsParentMap, value])

  const onChange = (targetKeys: string[]) => {
    let groupKeys: string[] = [...targetKeys]
    let unusedKeys: string[] = []

    const walker = (keys: string[]) => {
      keys.forEach(key => {
        if (unusedKeys.includes(key)) {
          return
        }
        const parent = optionsParentMap.get(key)
        if (!parent) {
          return
        }
        const childrenKeys: string[] =
          parent[childrenName]?.map((i: TreeSelectOption) => i[valueName]) || []
        if (childrenKeys.every(i => groupKeys.includes(i))) {
          groupKeys.push(parent[valueName])
          unusedKeys = unusedKeys.concat(childrenKeys)
        }
      })
    }

    // 遍历 deep 次 groupKeys，每次往上聚合一层
    for (let i = 0; i < deep; i++) {
      walker(groupKeys)
    }

    groupKeys = groupKeys.filter(i => !unusedKeys.includes(i))

    const groupOptions = groupKeys.map(i => optionsMap.get(i)!)

    setValue(groupKeys)
    props.onChange?.(groupKeys, groupOptions)
  }

  const onItemSelect = (option: TreeSelectOption) => {
    const parentNodes: TreeSelectOption[] = []
    let current: TreeSelectOption | undefined = option
    while (current) {
      parentNodes.unshift(current)
      const next = optionsParentMap.get(current[valueName])
      current = next
    }

    const keys = parentNodes.map(i => i[valueName])
    setExpandKeys(keys)
    props.onExpand?.(keys, parentNodes)
  }

  // 渲染全选节点
  const renderSelectAllItem = (
    columnOptions: TreeSelectOption[],
    index: number
  ) => {
    const text = props.selectAllText?.[index]
    if (!text) {
      return
    }

    let currentLeafKeys: string[] = []
    columnOptions.forEach(option => {
      currentLeafKeys = currentLeafKeys.concat(getLeafKeys(option))
    })
    const allSelected = currentLeafKeys.every(i =>
      allSelectedLeafKeys.includes(i)
    )
    return (
      <div
        onClick={() => {
          if (allSelected) {
            onChange(
              allSelectedLeafKeys.filter(i => !currentLeafKeys.includes(i))
            )
          } else {
            onChange(allSelectedLeafKeys.concat(currentLeafKeys))
          }
        }}
        className={`${classPrefix}-item`}
      >
        {text}
      </div>
    )
  }

  // 渲染
  const renderSelectAllLeafItem = (
    columnOptions: TreeSelectOption[],
    index: number
  ) => {
    const text = props.selectAllText?.[index]
    if (!text) {
      return
    }
    const currentLeafKeys: string[] = columnOptions.map(i => i[valueName])

    const allSelected = currentLeafKeys.every(i =>
      allSelectedLeafKeys.includes(i)
    )
    const halfSelected = allSelected
      ? false
      : currentLeafKeys.some(i => allSelectedLeafKeys.includes(i))

    return (
      <div
        onClick={() => {
          if (allSelected) {
            onChange(
              allSelectedLeafKeys.filter(i => !currentLeafKeys.includes(i))
            )
          } else {
            onChange(allSelectedLeafKeys.concat(currentLeafKeys))
          }
        }}
        className={classNames(
          `${classPrefix}-item`,
          `${classPrefix}-item-leaf`
        )}
      >
        <Checkbox
          className={`${classPrefix}-item-checkbox`}
          checked={allSelected}
          indeterminate={halfSelected}
        />
        {text}
      </div>
    )
  }

  // 渲染节点
  const renderItem = (option: TreeSelectOption) => {
    const isExpand = expandKeys.includes(option[valueName])

    return (
      <div
        key={option[valueName]}
        onClick={() => {
          if (!isExpand) {
            onItemSelect(option)
          }
        }}
        className={classNames(`${classPrefix}-item`, {
          [`${classPrefix}-item-expand`]: isExpand,
        })}
      >
        {option[labelName]}
        {!!dotMap.get(option[valueName]) && (
          <div className={`${classPrefix}-dot`} />
        )}
      </div>
    )
  }

  // 渲染叶子节点
  const renderLeafItem = (option: TreeSelectOption) => {
    const isSelected = allSelectedLeafKeys.includes(option[valueName])

    return (
      <div
        key={option[valueName]}
        onClick={() => {
          if (isSelected) {
            onChange(
              allSelectedLeafKeys.filter(val => val !== option[valueName])
            )
          } else {
            onChange([...allSelectedLeafKeys, option[valueName]])
          }
        }}
        className={classNames(
          `${classPrefix}-item`,
          `${classPrefix}-item-leaf`
        )}
      >
        <Checkbox
          className={`${classPrefix}-item-checkbox`}
          checked={isSelected}
        />
        {option[labelName]}
      </div>
    )
  }

  const renderItems = (
    columnOptions: TreeSelectOption[] = [],
    index: number
  ) => {
    if (columnOptions.length === 0) {
      return
    }

    const isLeaf = deep === index + 1
    if (isLeaf) {
      return (
        <>
          {renderSelectAllLeafItem(columnOptions, index)}
          {columnOptions.map(option => {
            return renderLeafItem(option)
          })}
        </>
      )
    }
    return (
      <>
        {renderSelectAllItem(columnOptions, index)}
        {columnOptions.map(option => {
          return renderItem(option)
        })}
      </>
    )
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
              : optionsMap.get(expandKeys[i - 1])?.[childrenName],
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
