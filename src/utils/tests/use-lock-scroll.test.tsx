import React, { useRef } from 'react'
import { render, fireEvent, renderHook, createEvent } from 'testing'
import { useLockScroll } from '../use-lock-scroll'

describe('useLockScroll', () => {
  let TestComponent: React.FC<{ handleTouch?: () => void }>

  beforeEach(() => {
    TestComponent = (props: { handleTouch?: () => void }) => {
      const divRef = useRef<HTMLDivElement>(null)

      useLockScroll(divRef, true)

      return (
        <div
          ref={divRef}
          data-testid='lock'
          style={{
            height: '200px',
            overflow: 'scroll',
            cursor: 'grab',
            touchAction: 'none',
          }}
          onTouchMove={() => props.handleTouch && props.handleTouch()}
        >
          {new Array(10).fill({}).map((_, i) => (
            <h1 key={i} style={{ height: '25px' }}>
              {' '}
              Test component {i}
            </h1>
          ))}
        </div>
      )
    }
  })

  test('onTouchMove', async () => {
    const handleTouch = jest.fn()

    const { getByTestId } = render(<TestComponent handleTouch={handleTouch} />)

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

  test('Scroll To Bottom', async () => {
    const { getByTestId } = render(<TestComponent />)

    const testEl = getByTestId('lock')

    jest.spyOn(testEl, 'scrollHeight', 'get').mockImplementation(() => 200)

    const scrollTop = jest.spyOn(testEl, 'scrollTop', 'get')
    scrollTop.mockImplementationOnce(() => 150)

    jest.spyOn(testEl, 'getBoundingClientRect').mockImplementation(() => ({
      height: 20,
      top: 0,
      left: 0,
      x: 0,
      y: 0,
      bottom: 0,
      right: 0,
      width: 0,
      toJSON: () => {},
    }))

    fireEvent.touchStart(testEl, {
      touches: [{ clientX: 0, clientY: 100 }],
    })

    const triggerTruthy = fireEvent.touchMove(testEl, {
      touches: [{ clientX: 0, clientY: 20 }],
    })
    // 滚动事件正常触发
    expect(triggerTruthy).toBeTruthy()

    // 滚动事件被取消
    scrollTop.mockImplementationOnce(() => 180)

    const triggerFalsy = fireEvent.touchMove(testEl, {
      touches: [{ clientX: 0, clientY: 10 }],
    })

    expect(triggerFalsy).toBeFalsy()
  })
})
