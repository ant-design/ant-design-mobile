import { useControllableValue } from 'ahooks'
import classNames from 'classnames'
import React from 'react'
import { ElementProps } from '../../utils/element-props'
import { withDefaultProps } from '../../utils/with-default-props'
import Space from '../space'
import Grid from '../grid'
import { convertPx } from '../../utils/convert-px'
import selectorCheckMarkImg from '../../assets/selector-check-mark.svg'

const classPrefix = `am-selector`

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
} & ElementProps

const Selector = withDefaultProps({
  multiple: false,
})<SelectorProps>(props => {
  const [value, setValue] = useControllableValue<string[]>(props, {
    defaultValue: [],
  }) as [string[], React.Dispatch<string[]>]

  const seletorItems = props.options.map(option => {
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

  return (
    <div
      className={classNames(classPrefix, props.className)}
      style={props.style}
    >
      {!props.columns && <Space wrap>{seletorItems}</Space>}
      {props.columns && (
        <Grid columns={props.columns} gap={convertPx(8)}>
          {seletorItems}
        </Grid>
      )}
    </div>
  )
})

export default Selector
