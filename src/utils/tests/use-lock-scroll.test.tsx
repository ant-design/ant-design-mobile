import React, { useRef } from 'react'
import { render, fireEvent } from 'testing'
import { useLockScroll } from '../use-lock-scroll'

describe('useLockScroll', () => {
  test('onTouchMove', async () => {
    const handleTouch = jest.fn()
    const TestComponent = () => {
      const divRef = useRef<HTMLDivElement>(null)

      useLockScroll(divRef, true)

      return (
        <div
          ref={divRef}
          data-testid='lock'
          style={{
            height: 200,
            overflow: 'scroll',
            cursor: 'grab',
            touchAction: 'none',
          }}
          onTouchMove={handleTouch}
        >
          {new Array(10).fill({}).map((_, i) => (
            <h1 key={i}> Test component {i}</h1>
          ))}
        </div>
      )
    }

    const { getByTestId } = render(<TestComponent />)

    const testEl = getByTestId('lock')

    fireEvent.touchStart(testEl, {
      touches: [{ clientX: 0, clientY: 0 }],
    })
    fireEvent.touchMove(testEl, {
      touches: [{ clientX: 0, clientY: 200 }],
    })
    fireEvent.touchEnd(testEl, {
      touches: [{ clientX: 0, clientY: 400 }],
    })

    expect(handleTouch).toHaveBeenCalled()
  })
})
