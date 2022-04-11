import React, { FC, useState, useEffect, useMemo } from 'react'
import classNames from 'classnames'
import Tabs from '../tabs'
import CheckList from '../check-list'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
import { useCascaderValueExtend } from './use-cascader-value-extend'
import { useConfig } from '../config-provider'
import { optionSkeleton } from './option-skeleton'
import Skeleton from '../skeleton'

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
  isLeaf: boolean
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
}

export const CascaderView: FC<CascaderViewProps> = p => {
  const { locale } = useConfig()
  const props = mergeProps(
    defaultProps,
    {
      placeholder: locale.Cascader.placeholder,
    },
    p
  )
  const [value, setValue] = usePropsValue({
    ...props,
    onChange: val => {
      props.onChange?.(val, generateValueExtend(val))
    },
  })
  const [tabActiveKey, setTabActiveKey] = useState<number>(0)

  const generateValueExtend = useCascaderValueExtend(props.options)

  const levels = useMemo(() => {
    const ret: {
      selected: CascaderOption | undefined
      options: CascaderOption[]
    }[] = []
    let currentOptions = props.options
    let reachedEnd = false
    for (const v of value) {
      const target = currentOptions.find(option => option.value === v)
      ret.push({
        selected: target,
        options: currentOptions,
      })
      if (!target || !target.children) {
        reachedEnd = true
        break
      }
      currentOptions = target.children
    }
    if (!reachedEnd) {
      ret.push({
        selected: undefined,
        options: currentOptions,
      })
    }
    return ret
  }, [value, props.options])

  useEffect(() => {
    setTabActiveKey(levels.length - 1)
  }, [value])
  useEffect(() => {
    const max = levels.length - 1
    if (tabActiveKey > max) {
      setTabActiveKey(max)
    }
  }, [tabActiveKey, levels])

  const onItemSelect = (selectValue: CascaderValue, depth: number) => {
    const next = value.slice(0, depth)
    if (selectValue !== undefined) {
      next[depth] = selectValue
    }
    setValue(next)
  }

  return withNativeProps(
    props,
    <div className={classPrefix}>
      <Tabs
        activeKey={tabActiveKey.toString()}
        onChange={key => setTabActiveKey(parseInt(key))}
        stretch={false}
        className={`${classPrefix}-tabs`}
      >
        {levels.map((level, index) => {
          const selected = level.selected
          return (
            <Tabs.Tab
              key={index}
              title={
                <div className={`${classPrefix}-header-title`}>
                  {selected ? selected.label : props.placeholder}
                </div>
              }
              forceRender
            >
              <div className={`${classPrefix}-content`}>
                {level.options === optionSkeleton ? (
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
                  >
                    {level.options.map(option => {
                      const active = value[index] === option.value
                      return (
                        <CheckList.Item
                          value={option.value}
                          key={option.value}
                          disabled={option.disabled}
                          className={classNames(`${classPrefix}-item`, {
                            [`${classPrefix}-item-active`]: active,
                          })}
                        >
                          {option.label}
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
