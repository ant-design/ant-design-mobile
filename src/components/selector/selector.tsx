import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { ElementProps, withElementProps } from '../../utils/element-props'
import { mergeProps } from '../../utils/with-default-props'
import Space from '../space'
import Grid from '../grid'
import { convertPx } from '../../utils/convert-px'
import selectorCheckMarkImg from '../../assets/selector-check-mark.svg'
import { useNewControllableValue } from '../../utils/use-controllable-value'

const classPrefix = `adm-selector`

type ValueType = string | number

export interface SelectorOption<VT> {
  label: ReactNode
  value: VT
  disabled?: boolean
}

export type SelectorProps<VT> = {
  options: SelectorOption<VT>[]
  columns?: number
  multiple?: boolean
  disabled?: boolean
  defaultValue?: VT[]
  value?: VT[]
  onChange?: (v: VT[]) => void
} & ElementProps

const defaultProps = {
  multiple: false,
  defaultValue: [],
}

export function Selector<VT extends ValueType>(p: SelectorProps<VT>) {
  const props = mergeProps(defaultProps, p)
  const [value, setValue] = useNewControllableValue(props)

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
            setValue(
              active
                ? value.filter(v => v !== option.value)
                : [...value, option.value]
            )
          } else {
            setValue(active ? [] : [option.value])
          }
        }}
      >
        {option.label}
        {active && props.multiple && (
          <div className={`${classPrefix}-check-mark-wrapper`}>
            <img src={selectorCheckMarkImg} />
          </div>
        )}
      </div>
    )
  })

  return withElementProps(
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
