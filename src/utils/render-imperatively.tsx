import React, {
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { renderToBody } from './render-to-body'

type ImperativeProps = {
  visible?: boolean
  onClose?: () => void
  afterClose?: () => void
}

type WrapperHandler = {
  close: () => void
}

export function renderImperatively(element: ReactElement<ImperativeProps>) {
  const Wrapper = React.forwardRef<WrapperHandler>((_, ref) => {
    const [visible, setVisible] = useState(false)
    const closedRef = useRef(false)
    useEffect(() => {
      if (!closedRef.current) {
        setVisible(true)
      } else {
        afterClose()
      }
    }, [])
    function onClose() {
      closedRef.current = true
      setVisible(false)
      element.props.onClose?.()
    }
    function afterClose() {
      unmount()
      element.props.afterClose?.()
    }
    useImperativeHandle(ref, () => ({
      close: onClose,
    }))
    return React.cloneElement(element, {
      ...element.props,
      visible,
      onClose,
      afterClose,
    })
  })
  const wrapperRef = React.createRef<WrapperHandler>()
  const unmount = renderToBody(<Wrapper ref={wrapperRef} />)
  function close() {
    wrapperRef.current?.close()
  }
  return {
    close,
  }
}
