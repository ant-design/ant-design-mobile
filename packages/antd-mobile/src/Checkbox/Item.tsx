import * as React from 'react'
import classnames from 'classnames'
import List from '../List'
import { getDataAttr } from '../_internal'
import { CheckboxItemPropsType } from './PropsType'
import Checkbox from './Checkbox'

const prefixCls = 'amd-checkbox-item'

export const Item: React.FC<CheckboxItemPropsType> = props => {
  // 以下属性从 group cloneElement 传递而来
  // @ts-ignore
  const { name, onChange, checkedValues } = props
  const checked = checkedValues.indexOf(props.value) !== -1

  const cls = classnames(prefixCls, props.className)

  return (
    <label className={cls} {...getDataAttr(props)}>
      <List.Item
        disabled={props.disabled}
        thumb={
          <Checkbox
            value={props.value}
            disabled={props.disabled}
            name={name}
            id={props.id}
            onChange={bingo => onChange(props.value, bingo)}
            checked={checked}
            prefixCls="amd-checkbox"
          />
        }
      >
        {props.children}
      </List.Item>
    </label>
  )
}

Item.displayName = 'Item'

export default Item
