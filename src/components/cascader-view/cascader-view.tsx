import { useUpdateEffect } from 'ahooks'
import classNames from 'classnames'
import type { FC, ReactNode } from 'react'
import React, { useEffect, useMemo, useState } from 'react'
import type { BaseOptionType, FieldNamesType } from '../../hooks'
import { useFieldNames } from '../../hooks'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import CheckList, { CheckListValue } from '../check-list'
import { useConfig } from '../config-provider'
import Skeleton from '../skeleton'
import Tabs from '../tabs'
import { optionSkeleton } from './option-skeleton'
import { useCascaderValueExtend } from './use-cascader-value-extend'

const classPrefix = `adm-cascader-view`

export type CascaderValue = CheckListValue

export type CascaderOption = {
  label?: string
  value?: string
  disabled?: boolean
  children?: CascaderOption[]
} & BaseOptionType

export type CascaderValueExtend = {
  items: (CascaderOption | null)[]
  isLeaf: boolean
}

export type CascaderViewProps = {
  options: CascaderOption[]
  value?: CascaderValue[]
  defaultValue?: CascaderValue[]
  onChange?: (value: CascaderValue[], extend: CascaderValueExtend) => void
  placeholder?: string | ((index: number) => string)
  onTabsChange?: (index: number) => void
  activeIcon?: ReactNode
  loading?: boolean
  fieldNames?: FieldNamesType
} & NativeProps<'--height'>

const defaultProps = {
  defaultValue: [],
}

export const CascaderView: FC<CascaderViewProps> = props => {
  const mergedProps = mergeProps(defaultProps, props)

  const { locale } = useConfig()
  const [labelName, valueName, childrenName, disabledName] = useFieldNames(
    mergedProps.fieldNames
  )
  const generateValueExtend = useCascaderValueExtend(mergedProps.options, {
    valueName,
    childrenName,
  })

  const [value, setValue] = usePropsValue({
    ...mergedProps,
    onChange: val => {
      mergedProps.onChange?.(val, generateValueExtend(val))
    },
  })
  const [tabActiveIndex, setTabActiveIndex] = useState(0)

  const levels = useMemo(() => {
    const ret: {
      selected: CascaderOption | undefined
      options: CascaderOption[]
    }[] = []

    let currentOptions = mergedProps.options
    let reachedEnd = false
    for (const v of value) {
      const target = currentOptions.find(option => option[valueName] === v)
      ret.push({
        selected: target,
        options: currentOptions,
      })
      if (!target || !target[childrenName]) {
        reachedEnd = true
        break
      }
      currentOptions = target[childrenName]
    }
    if (!reachedEnd) {
      ret.push({
        selected: undefined,
        options: currentOptions,
      })
    }
    return ret
  }, [value, mergedProps.options])

  useUpdateEffect(() => {
    mergedProps.onTabsChange?.(tabActiveIndex)
  }, [tabActiveIndex])
  useEffect(() => {
    setTabActiveIndex(levels.length - 1)
  }, [value])
  useEffect(() => {
    const max = levels.length - 1
    if (tabActiveIndex > max) {
      setTabActiveIndex(max)
    }
  }, [tabActiveIndex, levels])

  const onItemSelect = (selectValue: CascaderValue, depth: number) => {
    const next = value.slice(0, depth)
    if (selectValue !== undefined) {
      next[depth] = selectValue
    }
    setValue(next)
  }

  const whetherLoading = <T extends unknown[]>(options: T) =>
    mergedProps.loading || options === optionSkeleton

  const placeholder = mergedProps.placeholder || locale.Cascader.placeholder

  return withNativeProps(
    mergedProps,
    <div className={classPrefix}>
      <Tabs
        activeKey={tabActiveIndex.toString()}
        onChange={key => {
          const activeIndex = parseInt(key)
          setTabActiveIndex(activeIndex)
        }}
        stretch={false}
        className={`${classPrefix}-tabs`}
      >
        {levels.map((level, index) => {
          const selected = level.selected
          return (
            <Tabs.Tab
              key={index.toString()}
              title={
                <div className={`${classPrefix}-header-title`}>
                  {selected
                    ? selected[labelName]
                    : typeof placeholder === 'function'
                      ? placeholder(index)
                      : placeholder}
                </div>
              }
              forceRender
            >
              <div className={`${classPrefix}-content`}>
                {whetherLoading(level.options) ? (
                  <div className={`${classPrefix}-skeleton`}>
                    <Skeleton
                      className={`${classPrefix}-skeleton-line-1`}
                      animated
                    />
                    <Skeleton
                      className={`${classPrefix}-skeleton-line-2`}
                      animated
                    />
                    <Skeleton
                      className={`${classPrefix}-skeleton-line-3`}
                      animated
                    />
                    <Skeleton
                      className={`${classPrefix}-skeleton-line-4`}
                      animated
                    />
                  </div>
                ) : (
                  <CheckList
                    value={[value[index]]}
                    onChange={selectValue =>
                      onItemSelect(selectValue[0], index)
                    }
                    activeIcon={mergedProps.activeIcon}
                  >
                    {level.options.map(option => {
                      const active = value[index] === option[valueName]
                      return (
                        <CheckList.Item
                          value={option[valueName]}
                          key={option[valueName]}
                          disabled={option[disabledName]}
                          className={classNames(`${classPrefix}-item`, {
                            [`${classPrefix}-item-active`]: active,
                          })}
                        >
                          {option[labelName]}
                        </CheckList.Item>
                      )
                    })}
                  </CheckList>
                )}
              </div>
            </Tabs.Tab>
          )
        })}
      </Tabs>
    </div>
  )
}
