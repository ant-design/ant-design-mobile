import findDOMNode, { getDOM } from 'rc-util/lib/Dom/findDOMNode'
import { composeRef, getNodeRef, supportRef } from 'rc-util/lib/ref'
import * as React from 'react'

export interface WrapperRef {
  element: HTMLElement
}

export const Wrapper = React.forwardRef<WrapperRef, React.PropsWithChildren>(
  ({ children }, ref) => {
    const elementRef = React.useRef<Element>(null)
    const legacyWrapperRef = React.createRef<LegacyWrapper>()

    const child = React.Children.only(children) as React.ReactElement
    const canUseRef = supportRef(children)

    const getElement = () => {
      if (canUseRef) {
        return getDOM(elementRef.current)
      }
      return legacyWrapperRef.current?.element
    }

    React.useImperativeHandle(ref, () => ({
      element: getElement() as HTMLElement,
    }))

    const composedRef = composeRef(elementRef, getNodeRef(child))

    return canUseRef ? (
      React.cloneElement(child, { ref: composedRef })
    ) : (
      <LegacyWrapper ref={legacyWrapperRef}>{child}</LegacyWrapper>
    )
  }
)

class LegacyWrapper extends React.Component<React.PropsWithChildren, {}> {
  element: Element | null = null
  componentDidMount() {
    this.componentDidUpdate()
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    const node = findDOMNode(this)
    if (node instanceof Element) {
      this.element = node
    } else {
      this.element = null
    }
  }

  render() {
    return this.props.children
  }
}
