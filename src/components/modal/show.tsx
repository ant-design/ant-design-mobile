import React from 'react'
import { Modal, ModalProps } from './modal'
import { renderImperatively } from '../../utils/render-imperatively'

export type ModalShowProps = Omit<ModalProps, 'visible'>

export type ModalShowHandler = {
  close: () => void
}

export const closeFnSet = new Set<() => void>()

export function show(props: ModalShowProps) {
  const handler: ModalShowHandler = renderImperatively(
    <Modal
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
