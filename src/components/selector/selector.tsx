import classNames from 'classnames'
import type { ReactNode } from 'react'
import React from 'react'
import type { BaseOptionType, FieldNamesType } from '../../hooks'
import { useFieldNames } from '../../hooks'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { usePropsValue } from '../../utils/use-props-value'
import { mergeProps } from '../../utils/with-default-props'
import { useConfig } from '../config-provider'
import Grid, { GridProps } from '../grid'
import Space from '../space'
import { CheckMark } from './check-mark'

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

export const Selector = <V extends SelectorValue>(props: SelectorProps<V>) => {
  const mergedProps = mergeProps(defaultProps, props)
  const [labelName, valueName, , disabledName] = useFieldNames(
    mergedProps.fieldNames
  )
  const [value, setValue] = usePropsValue({
    value: mergedProps.value,
    defaultValue: mergedProps.defaultValue,
    onChange: val => {
      const extend = {
        get items() {
          return mergedProps.options.filter(option =>
            val.includes(option[valueName])
          )
        },
      }
      mergedProps.onChange?.(val, extend)
    },
  })

  const { locale } = useConfig()

  const items = mergedProps.options.map(option => {
    const active = (value || []).includes(option[valueName])
    const disabled = option[disabledName] || mergedProps.disabled
    const itemCls = classNames(`${classPrefix}-item`, {
      [`${classPrefix}-item-active`]: active && !mergedProps.multiple,
      [`${classPrefix}-item-multiple-active`]: active && mergedProps.multiple,
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
          if (mergedProps.multiple) {
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
          (active && !mergedProps.multiple) || (active && mergedProps.multiple)
        }
      >
        {option[labelName]}
        {option.description && (
          <div className={`${classPrefix}-item-description`}>
            {option.description}
          </div>
        )}
        {active && mergedProps.showCheckMark && (
          <div className={`${classPrefix}-check-mark-wrapper`}>
            <CheckMark />
          </div>
        )}
      </div>
    )
  })

  return withNativeProps(
    mergedProps,
    <div
      className={classPrefix}
      role='listbox'
      aria-label={locale.Selector.name}
    >
      {mergedProps.columns ? (
        <Grid columns={mergedProps.columns}>{items}</Grid>
      ) : (
        <Space wrap>{items}</Space>
      )}
    </div>
  )
}
