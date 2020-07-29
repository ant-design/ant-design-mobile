import * as React from 'react'
import classnames from 'classnames'
import { Check } from '@ant-design/mobile-icons'
// @ts-ignore
import RcCheckbox from 'rc-checkbox'
import { getDataAttr } from '../_internal'
import List from '../List'
import { Brief } from '../List/Item'
import { RadioItemPropsType } from './PropsType'

const prefixCls = 'amd-radio-item'

export const Item: React.FC<RadioItemPropsType> = props => {
  // 以下属性从 group cloneElement 传递而来
  // @ts-ignore
  const { name, onChange, checkedValue, brief } = props
  const checked = checkedValue === props.value
  const labelCls = classnames(prefixCls, {
    [prefixCls + '-disabled']: props.disabled,
  })
  return (
    <List.Item
      extra={
        checked ? (
          <Check className={prefixCls + '-checked-icon'} size="xs" />
        ) : (
          // 必须是 undefined，不然会渲染出节点，导致点击区域减小
          undefined
        )
      }
    >
      <label className={labelCls} {...getDataAttr(props)}>
        <RcCheckbox
          prefixCls={prefixCls}
          value={props.value}
          type="radio"
          disabled={props.disabled}
          name={name}
          onChange={onChange}
          checked={checked}
        />
        {props.children}
        {/* 这个 不能直接加在 List.Item 上，会导致 label 覆盖不了，导致点击区域变小 */}
        {brief && <Brief>{brief}</Brief>}
      </label>
    </List.Item>
  )
}

Item.displayName = 'Item'

export default Item
