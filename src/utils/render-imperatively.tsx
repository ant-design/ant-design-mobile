import React, { FC, ReactElement, useEffect, useRef, useState } from 'react'
import { renderToBody } from './render-to-body'

type ImperativeProps = {
  visible?: boolean
  onClose?: () => void
  afterClose?: () => void
}

export function renderImperatively(element: ReactElement<ImperativeProps>) {
  let close: () => void = () => {}
  const Wrapper: FC = () => {
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
    close = onClose
    function afterClose() {
      unmount()
      element.props.afterClose?.()
    }
    return React.cloneElement(element, {
      ...element.props,
      visible,
      onClose,
      afterClose,
    })
  }
  const unmount = renderToBody(<Wrapper />)
  return {
    close,
  }
}
