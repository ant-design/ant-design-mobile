import { useMemoizedFn } from 'ahooks'
import React, {
  createContext,
  createRef,
  PropsWithChildren,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import type { ImperativeHandler } from '../../utils/render-imperatively'

const PortalContext = createContext<PortalContextType | undefined>(undefined)

type ImperativeProps = {
  visible?: boolean
  onClose?: () => void
  afterClose?: () => void
}

type TargetElement = React.ReactElement<ImperativeProps>

interface PortalContextType {
  renderModalInPortal: (element: TargetElement) => ImperativeHandler
}

interface WrapperProps {
  element: TargetElement
  unmount: () => void
}

/**
 * @description refer to `src/utils/render-imperatively`
 */
const Wrapper = React.forwardRef<ImperativeHandler, WrapperProps>(
  ({ element, unmount }, ref) => {
    const [visible, setVisible] = useState(false)
    const closedRef = useRef(false)
    const [elementToRender, setElementToRender] = useState(element)
    const keyRef = useRef(0)
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
      elementToRender.props.onClose?.()
    }
    function afterClose() {
      unmount()
      elementToRender.props.afterClose?.()
    }
    useImperativeHandle(ref, () => ({
      close: onClose,
      replace: element => {
        keyRef.current++
        elementToRender.props.afterClose?.()
        setElementToRender(element)
      },
    }))
    return React.cloneElement(elementToRender, {
      ...elementToRender.props,
      key: keyRef.current,
      visible,
      onClose,
      afterClose,
    })
  }
)

export type PortalProviderProps = PropsWithChildren & {}

let wrapperId = 0

export const PortalProvider: React.FC<PortalProviderProps> = ({ children }) => {
  const [portalElements, setPortalElements] = useState<TargetElement[]>([])
  const wrapperRef = createRef<ImperativeHandler>()

  const renderModalInPortal = useMemoizedFn((element: TargetElement) => {
    const unmount = () => {
      setPortalElements(elements =>
        elements.filter(el => el.key !== wrappedElement.key)
      )
    }
    const wrappedElement = (
      <Wrapper
        key={wrapperId++}
        ref={wrapperRef}
        element={element}
        unmount={unmount}
      />
    )
    setPortalElements(elements => [...elements, wrappedElement])
    return {
      close: async () => {
        if (!wrapperRef.current) {
          // it means the wrapper is not mounted yet, call `unmount` directly
          unmount()
          // call `afterClose` to make sure the callback is called
          element.props.afterClose?.()
        } else {
          wrapperRef.current?.close()
        }
      },
      replace: element => {
        wrapperRef.current?.replace(element)
      },
      isRendered: () => !!wrapperRef.current,
    } as ImperativeHandler
  })
  return (
    <PortalContext.Provider value={{ renderModalInPortal }}>
      {children}
      {portalElements}
    </PortalContext.Provider>
  )
}

export const usePortal = () => {
  const context = useContext(PortalContext)
  if (!context) {
    throw new Error('usePortal must be used within a PortalProvider')
  }
  return context
}
