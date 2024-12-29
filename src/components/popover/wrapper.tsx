import React, { ReactElement, useImperativeHandle, useRef } from 'react'

export interface WrapperRef {
  element: Element
}

export const Wrapper = React.forwardRef<WrapperRef, { children: ReactElement }>(
  ({ children }, ref) => {
    const childRef = useRef<any>(null)

    useImperativeHandle(ref, () => ({
      element: childRef.current,
    }))

    return (
      <>
        <span
          style={{ display: 'none' }}
          ref={el => {
            if (el) {
              childRef.current = el.nextElementSibling
            }
          }}
        />
        {React.Children.only(children)}
      </>
    )
  }
)
