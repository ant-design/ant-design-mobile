import React, { FC } from 'react'
import classNames from 'classnames'
import Button from '../button'
import { NativeProps, withNativeProps } from '../../utils/native-props'

export type Action = {
  key: string | number
  text: string
  disabled?: boolean
  danger?: boolean
  bold?: boolean
  onClick?: () => void | Promise<void>
} & NativeProps

export const DialogActionButton: FC<{
  action: Action
  onAction: () => void | Promise<void>
}> = props => {
  const { action } = props

  return withNativeProps(
    props.action,
    <Button
      key={action.key}
      onClick={props.onAction}
      className={classNames('adm-dialog-button', {
        'adm-dialog-button-bold': action.bold,
      })}
      fill='none'
      shape='rectangular'
      block
      color={action.danger ? 'danger' : 'primary'}
      loading='auto'
      disabled={action.disabled}
    >
      {action.text}
    </Button>
  )
}
