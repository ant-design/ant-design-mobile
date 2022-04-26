import React, { FC } from 'react'
import classNames from 'classnames'
import Button from '../button'
import { NativeProps, withNativeProps } from '../../utils/native-props'

export type Action = {
  key: string | number
  text: string
  disabled?: boolean
  danger?: boolean
  primary?: boolean
  onClick?: () => void | Promise<void>
} & NativeProps

export const ModalActionButton: FC<{
  action: Action
  onAction: () => void | Promise<void>
}> = props => {
  const { action } = props

  return withNativeProps(
    props.action,
    <Button
      key={action.key}
      onClick={props.onAction}
      className={classNames('adm-modal-button', {
        'adm-modal-button-primary': props.action.primary,
      })}
      fill={props.action.primary ? 'solid' : 'none'}
      size={props.action.primary ? 'large' : 'middle'}
      block
      color={action.danger ? 'danger' : 'primary'}
      loading='auto'
      disabled={action.disabled}
    >
      {action.text}
    </Button>
  )
}
