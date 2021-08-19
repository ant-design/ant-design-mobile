import { Cascader, CascaderProps } from './cascader'
import React, { FC, useEffect, useState } from 'react'
import { renderToBody } from '../../utils/render-to-body'
import { PickerValue } from './picker'

export function promptCascader(
  props: Omit<CascaderProps, 'value' | 'visible' | 'children'>
) {
  return new Promise<PickerValue[] | null>(resolve => {
    const Wrapper: FC = () => {
      const [visible, setVisible] = useState(false)
      useEffect(() => {
        setVisible(true)
      }, [])
      return (
        <Cascader
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
