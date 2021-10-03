import React, { FC, useEffect, useState } from 'react'
import { renderToBody } from '../../utils/render-to-body'
import { Picker } from './picker'
import type { PickerProps, PickerValue } from './index'

export function prompt(
  props: Omit<PickerProps, 'value' | 'visible' | 'children'>
) {
  return new Promise<PickerValue[] | null>(resolve => {
    const Wrapper: FC = () => {
      const [visible, setVisible] = useState(false)
      useEffect(() => {
        setVisible(true)
      }, [])
      return (
        <Picker
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
