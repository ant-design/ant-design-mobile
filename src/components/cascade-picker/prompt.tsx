import { CascadePicker, CascadePickerProps } from './cascade-picker'
import React, { FC, useEffect, useState } from 'react'
import { renderToBody } from '../../utils/render-to-body'
import type { PickerValue } from '../picker'

export function prompt(
  props: Omit<CascadePickerProps, 'value' | 'visible' | 'children'>
) {
  return new Promise<PickerValue[] | null>(resolve => {
    const Wrapper: FC = () => {
      const [visible, setVisible] = useState(false)
      useEffect(() => {
        setVisible(true)
      }, [])
      return (
        <CascadePicker
          {...props}
          visible={visible}
          onConfirm={val => {
            resolve(val)
          }}
          onClose={() => {
            props.onClose?.()
            setVisible(false)
            resolve(null)
          }}
          afterClose={() => {
            props.afterClose?.()
            unmount()
          }}
        />
      )
    }
    const unmount = renderToBody(<Wrapper />)
  })
}
