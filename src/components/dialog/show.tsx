import React from 'react'
import { Dialog, DialogProps } from './dialog'
import { renderImperatively } from '../../utils/render-imperatively'

export type DialogShowProps = Omit<DialogProps, 'visible'>

export type DialogShowHandler = {
  close: () => void
}

export const closeFnSet = new Set<() => void>()

export function show(props: DialogShowProps) {
  const handler: DialogShowHandler = renderImperatively(
    <Dialog
      {...props}
      afterClose={() => {
        closeFnSet.delete(handler.close)
        props.afterClose?.()
      }}
    />
  )
  closeFnSet.add(handler.close)
  return handler
}
