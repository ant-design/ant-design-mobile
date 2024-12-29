import type { ReactElement, ReactNode } from 'react'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

interface WrapperProps {
  children?: ReactNode
}

export interface WrapperRef {
  element: Element | null
}

export const Wrapper = forwardRef<WrapperRef, WrapperProps>(
  ({ children }, ref) => {
    const elementRef = useRef<HTMLElement>(null)

    useImperativeHandle(ref, () => ({
      element: elementRef.current,
    }))

    const child = React.Children.only(children) as ReactElement<any, any>
    return React.cloneElement(child, {
      ref: elementRef,
    })
  }
)
