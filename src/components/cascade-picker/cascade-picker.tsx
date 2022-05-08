import React, { forwardRef, useImperativeHandle } from 'react'
import Picker from '../picker'
import type { PickerProps } from '../picker'
import { useColumnsFn } from './cascade-picker-utils'
import {
  Actions,
  useControllableVisible,
} from '../../utils/use-controllable-visible'
import { useMemoizedFn } from 'ahooks'

export type CascadePickerOption = {
  label: string
  value: string
  children?: CascadePickerOption[]
}

export type CascadePickerProps = Omit<PickerProps, 'columns'> & {
  options: CascadePickerOption[]
}

export const CascadePicker = forwardRef<Actions, CascadePickerProps>(
  (props, ref) => {
    const { options, ...pickerProps } = props
    const columnsFn = useColumnsFn(options)

    const [visible, actions] = useControllableVisible(props.visible)
    useImperativeHandle(ref, () => actions)

    const onClose = useMemoizedFn(() => {
      props.onClose?.()
      if (typeof props.visible !== 'boolean') {
        actions.close()
      }
    })

    return (
      <Picker
        {...pickerProps}
        visible={visible}
        onClose={onClose}
        columns={columnsFn}
      />
    )
  }
)
