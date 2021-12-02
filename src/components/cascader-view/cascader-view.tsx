import React, { FC, useState, useEffect, useMemo } from 'react'
import classNames from 'classnames'
import Tabs from '../tabs'
import CheckList from '../check-list'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { usePropsValue } from '../../utils/use-props-value'
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
      if (!target || !target.children || target.children.length === 0) {
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

  return withNativeProps(
    props,
    <Tabs
      activeKey={tabActiveKey.toString()}
      onChange={key => setTabActiveKey(parseInt(key))}
      stretch={false}
      style={{ '--title-font-size': '14px', '--content-padding': 'none' }}
      className={classPrefix}
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
            <CheckList
              value={[value[index]]}
              onChange={selectValue => {
                const v = selectValue[0]
                const next = value.slice(0, index)
                next[index] = v
                setValue(next)
              }}
              className={`${classPrefix}-content`}
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
          </Tabs.Tab>
        )
      })}
    </Tabs>
  )
}
