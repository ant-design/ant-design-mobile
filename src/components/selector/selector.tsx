import classNames from 'classnames'
import React from 'react'
import type { ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import Space from '../space'
import Grid, { GridProps } from '../grid'
import { usePropsValue } from '../../utils/use-props-value'
import { CheckMark } from './check-mark'
import { useConfig } from '../config-provider'
import { useFieldNames } from '../../hooks'
import type { FieldNamesType, BaseOptionType } from '../../hooks'

const classPrefix = `adm-selector`

type SelectorValue = string | number

export type SelectorOption<V> = {
  label?: ReactNode
  description?: ReactNode
  value?: V
  disabled?: boolean
} & BaseOptionType

export type SelectorProps<V> = {
  options: SelectorOption<V>[]
  columns?: GridProps['columns']
  multiple?: boolean
  disabled?: boolean
  defaultValue?: V[]
  value?: V[]
  onChange?: (v: V[], extend: { items: SelectorOption<V>[] }) => void
  showCheckMark?: boolean
  fieldNames?: FieldNamesType
} & NativeProps<
  | '--color'
  | '--checked-color'
  | '--text-color'
  | '--checked-text-color'
  | '--border'
  | '--checked-border'
  | '--border-radius'
  | '--padding'
  | '--gap'
  | '--gap-vertical'
  | '--gap-horizontal'
>

const defaultProps = {
  multiple: false,
  defaultValue: [],
  showCheckMark: true,
}

export const Selector = <V extends SelectorValue>(p: SelectorProps<V>) => {
  const props = mergeProps(defaultProps, p)
  const [labelName, valueName, , disabledName] = useFieldNames(props.fieldNames)
  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: val => {
      const extend = {
        get items() {
          return props.options.filter(option => val.includes(option[valueName]))
        },
      }
      props.onChange?.(val, extend)
    },
  })

  const { locale } = useConfig()

  const items = props.options.map(option => {
    const active = (value || []).includes(option[valueName])
    const disabled = option[disabledName] || props.disabled
    const itemCls = classNames(`${classPrefix}-item`, {
      [`${classPrefix}-item-active`]: active && !props.multiple,
      [`${classPrefix}-item-multiple-active`]: active && props.multiple,
      [`${classPrefix}-item-disabled`]: disabled,
    })

    return (
      <div
        key={option[valueName]}
        className={itemCls}
        onClick={() => {
          if (disabled) {
            return
          }
          if (props.multiple) {
            const val = active
              ? value.filter(v => v !== option[valueName])
              : [...value, option[valueName]]
            setValue(val)
          } else {
            const val = active ? [] : [option[valueName]]
            setValue(val)
          }
        }}
        role='option'
        aria-selected={
          (active && !props.multiple) || (active && props.multiple)
        }
      >
        {option[labelName]}
        {option.description && (
          <div className={`${classPrefix}-item-description`}>
            {option.description}
          </div>
        )}
        {active && props.showCheckMark && (
          <div className={`${classPrefix}-check-mark-wrapper`}>
            <CheckMark />
          </div>
        )}
      </div>
    )
  })

  return withNativeProps(
    props,
    <div
      className={classPrefix}
      role='listbox'
      aria-label={locale.Selector.name}
    >
      {props.columns ? (
        <Grid columns={props.columns}>{items}</Grid>
      ) : (
        <Space wrap>{items}</Space>
      )}
    </div>
  )
}
