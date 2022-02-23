import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { renderToBody } from '../../utils/render-to-body'
import { Dialog, DialogProps } from './dialog'
import { closeFns } from './dialog'

export type DialogShowProps = Omit<DialogProps, 'visible'>

export type DialogShowRef = {
  close: () => void
}

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

      for (let i = 0; i < closeFns.length; i++) {
        const fn = closeFns[i]

        if (fn === close) {
          closeFns.splice(i, 1)
          break
        }
      }
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
  closeFns.push(close)

  return {
    close,
  }
}
