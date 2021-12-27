import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { renderToBody } from '../../utils/render-to-body'
import { Modal, ModalProps } from './modal'

export type ModalShowProps = Omit<ModalProps, 'visible'>

export type ModalShowRef = {
  close: () => void
}

export function show(props: ModalShowProps) {
  const Wrapper = forwardRef<ModalShowRef>((_, ref) => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      setVisible(true)
    }, [])
    function handleClose() {
      props.onClose?.()
      setVisible(false)
    }
    useImperativeHandle(ref, () => ({
      close: handleClose,
    }))
    return (
      <Modal
        {...props}
        visible={visible}
        onClose={handleClose}
        afterClose={() => {
          props.afterClose?.()
          unmount()
        }}
      />
    )
  })
  const ref = createRef<ModalShowRef>()
  const unmount = renderToBody(<Wrapper ref={ref} />)
  return {
    close: () => {
      ref.current?.close()
    },
  }
}
