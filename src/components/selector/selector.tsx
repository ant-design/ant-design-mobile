import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import Space from '../space'
import Grid from '../grid'
import { convertPx } from '../../utils/convert-px'
import { usePropsValue } from '../../utils/use-props-value'
import { CheckMark } from './check-mark'

const classPrefix = `adm-selector`

type SelectorValue = string | number

export interface SelectorOption<V> {
  label: ReactNode
  description?: ReactNode
  value: V
  disabled?: boolean
}

export type SelectorProps<V> = {
  options: SelectorOption<V>[]
  columns?: number
  multiple?: boolean
  disabled?: boolean
  defaultValue?: V[]
  value?: V[]
  onChange?: (v: V[], extend: { items: SelectorOption<V>[] }) => void
  showCheckMark?: boolean
} & NativeProps<
  | '--color'
  | '--checked-color'
  | '--text-color'
  | '--checked-text-color'
  | '--border'
  | '--checked-border'
  | '--border-radius'
  | '--padding'
>

const defaultProps = {
  multiple: false,
  defaultValue: [],
  showCheckMark: true,
}

export const Selector = <V extends SelectorValue>(p: SelectorProps<V>) => {
  const props = mergeProps(defaultProps, p)
  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue: props.defaultValue,
    onChange: val => {
      const extend = {
        get items() {
          return props.options.filter(option => val.includes(option.value))
        },
      }
      props.onChange?.(val, extend)
    },
  })

  const items = props.options.map(option => {
    const active = (value || []).includes(option.value)
    const disabled = option.disabled || props.disabled
    const itemCls = classNames(`${classPrefix}-item`, {
      [`${classPrefix}-item-active`]: active && !props.multiple,
      [`${classPrefix}-item-multiple-active`]: active && props.multiple,
      [`${classPrefix}-item-disabled`]: disabled,
    })

    return (
      <div
        key={option.value}
        className={itemCls}
        onClick={() => {
          if (disabled) {
            return
          }
          if (props.multiple) {
            const val = active
              ? value.filter(v => v !== option.value)
              : [...value, option.value]
            setValue(val)
          } else {
            const val = active ? [] : [option.value]
            setValue(val)
          }
        }}
      >
        {option.label}
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
    <div className={classPrefix}>
      {!props.columns && <Space wrap>{items}</Space>}
      {props.columns && (
        <Grid columns={props.columns} gap={convertPx(8)}>
          {items}
        </Grid>
      )}
    </div>
  )
}
