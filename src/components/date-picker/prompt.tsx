import React, { FC, useEffect, useState } from 'react'
import { renderToBody } from '../../utils/render-to-body'
import { DatePicker, DatePickerProps } from './date-picker'

export function prompt(
  props: Omit<DatePickerProps, 'value' | 'visible' | 'children'>
) {
  return new Promise<Date | null>(resolve => {
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
