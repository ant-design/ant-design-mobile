import React, { FC, useContext } from 'react'
import List, { ListItemProps } from '../list'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { CheckListContext } from './context'
import { devWarning } from '../../utils/dev-log'
import { CheckOutlined } from '@ant-design/icons'

export type CheckListItemProps = Pick<
  ListItemProps,
  'title' | 'children' | 'description' | 'prefix' | 'onClick'
> & {
  value: string
  // TODO: support `readonly` and `disabled` props
} & NativeProps<'--prefix-width' | '--align-items'>

export const CheckListItem: FC<CheckListItemProps> = props => {
  const context = useContext(CheckListContext)
  if (context === null) {
    devWarning(
      'CheckList.Item',
      'CheckList.Item can only be used inside CheckList.'
    )
    return null
  }
  const active = context.value.includes(props.value)

  const extra = (
    <div className='adm-check-list-item-extra'>
      {active ? <CheckOutlined /> : null}
    </div>
  )

  return withNativeProps(
    props,
    <List.Item
      title={props.title}
      description={props.description}
      prefix={props.prefix}
      onClick={() => {
        if (active) {
          context.uncheck(props.value)
        } else {
          context.check(props.value)
        }
        props.onClick?.()
      }}
      arrow={false}
      clickable
      extra={extra}
    >
      {props.children}
    </List.Item>
  )
}
