import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { renderToBody } from '../../utils/render-to-body'
import { DatePicker, DatePickerProps } from './date-picker'
import type { PickerDate } from './util'

export function prompt(
  props: Omit<DatePickerProps, 'value' | 'visible' | 'children'>
) {
  return new Promise<PickerDate | null>(resolve => {
    const Wrapper: FC = () => {
      const [visible, setVisible] = useState(false)
      useEffect(() => {
        setVisible(true)
      }, [])
      return (
        <DatePicker
          {...props}
          visible={visible}
          onConfirm={val => {
            props.onConfirm?.(val)
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
