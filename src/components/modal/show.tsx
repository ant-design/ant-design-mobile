import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { renderToBody } from '../../utils/render-to-body'
import { Modal, ModalProps } from './modal'
import { closeFns } from './modal'

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

    function handleAfterClose() {
      props.afterClose?.()
      unmount()

      for (let i = 0; i < closeFns.length; i++) {
        const fn = closeFns[i]

        if (fn === close) {
          closeFns.splice(i, 1)
          break
        }
      }
    }

    return (
      <Modal
        {...props}
        visible={visible}
        onClose={handleClose}
        afterClose={handleAfterClose}
      />
    )
  })
  const ref = createRef<ModalShowRef>()
  const unmount = renderToBody(<Wrapper ref={ref} />)
  const close = () => {
    ref.current?.close()
  }
  closeFns.push(close)

  return {
    close,
  }
}
