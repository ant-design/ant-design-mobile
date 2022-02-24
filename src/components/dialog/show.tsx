import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { renderToBody } from '../../utils/render-to-body'
import { Dialog, DialogProps } from './dialog'

export type DialogShowProps = Omit<DialogProps, 'visible'>

export type DialogShowRef = {
  close: () => void
}

export const closeFnSet = new Set<() => void>()

export function show(props: DialogShowProps) {
  const Wrapper = forwardRef<DialogShowRef>((_, ref) => {
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
      closeFnSet.delete(close)
    }

    return (
      <Dialog
        {...props}
        visible={visible}
        onClose={handleClose}
        afterClose={handleAfterClose}
      />
    )
  })
  const ref = createRef<DialogShowRef>()
  const unmount = renderToBody(<Wrapper ref={ref} />)
  const close = () => {
    ref.current?.close()
  }
  closeFnSet.add(close)

  return {
    close,
  }
}
