import * as React from 'react'
import Radio from './Radio'
import { getDataAttr } from '../_internal'
import List from '../List'
import { RadioItemPropsType } from './PropsType'

const prefixCls = 'amd-radio-item'

export const Item: React.FC<RadioItemPropsType> = props => {
  // 以下属性从 group cloneElement 传递而来
  // @ts-ignore
  const { name, onChange, checkedValue, brief } = props
  const checked = checkedValue === props.value

  return (
    <label className={prefixCls} {...getDataAttr(props)}>
      <List.Item
        disabled={props.disabled}
        extra={
          <Radio
            value={props.value}
            disabled={props.disabled}
            name={name}
            id={props.id}
            onChange={bingo => onChange(props.value, bingo)}
            checked={checked}
          />
        }
        brief={brief}
      >
        {props.children}
      </List.Item>
    </label>
  )
}

Item.displayName = 'Item'

export default Item
