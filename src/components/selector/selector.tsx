import classNames from 'classnames'
import React, { FC } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import Space from '../space'
import Grid from '../grid'
import { convertPx } from '../../utils/convert-px'
import selectorCheckMarkImg from '../../assets/selector-check-mark.svg'
import { useNewControllableValue } from '../../utils/use-controllable-value'

const classPrefix = `adm-selector`

export interface SelectorOption {
  label: string
  value: string
  disabled?: boolean
}

export type SelectorProps = {
  options: SelectorOption[]
  columns?: number
  multiple?: boolean
  disabled?: boolean
  defaultValue?: string[]
  value?: string[]
  onChange?: (v: string[]) => void
} & NativeProps

const defaultProps = {
  multiple: false,
  defaultValue: [],
}

export const Selector: FC<SelectorProps> = p => {
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
