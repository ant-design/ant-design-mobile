import React, { useRef, createRef } from 'react'
import { render, fireEvent, screen, createEvent } from 'testing'
import { useLockScroll } from '../use-lock-scroll'

describe('useLockScroll', () => {
  test('use preventDefault when event listener is treated as as passive', () => {
    const handleTouch = jest.fn()
    const TestComponent = () => {
      const divRef = useRef<HTMLDivElement>(null)

      useLockScroll(divRef, true)

      return (
        <div ref={divRef} onTouchMove={handleTouch}>
          div
        </div>
      )
    }

    render(<TestComponent />)

    const el = screen.getByText('div')
    const fn = jest.fn()

    const event = createEvent.touchMove(el, {
      touches: [{ clientX: 0, clientY: 400 }],
    })
    Object.defineProperty(event, 'preventDefault', {
      value: fn,
    })
    fireEvent(el, event)

    expect(fn).toBeCalled()
  })
})
