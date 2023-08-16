import React, { useRef } from 'react'
import { render, fireEvent, createEvent, screen } from 'testing'
import { useLockScroll } from '../use-lock-scroll'

describe('useLockScroll', () => {
  let TestComponent: React.FC<{
    scrollParams: boolean | 'strict'
    handleTouch?: () => void
  }>

  beforeEach(() => {
    TestComponent = (props: {
      scrollParams: boolean | 'strict'
      handleTouch?: () => void
    }) => {
      const divRef = useRef<HTMLDivElement>(null)

      useLockScroll(divRef, props.scrollParams)

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
          onTouchMove={() => props.handleTouch && props.handleTouch()}
        >
          {new Array(10).fill({}).map((_, i) => (
            <h1 key={i} style={{ height: 25 }}>
              Test component {i}
            </h1>
          ))}
        </div>
      )
    }
  })

  afterEach(() => {
    TestComponent = null as any
  })

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

  test('Scroll To Bottom', async () => {
    const { getByTestId } = render(<TestComponent scrollParams={true} />)

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

    // 滚动高度到 180
    scrollTop.mockImplementationOnce(() => 180)

    const triggerFalsy = fireEvent.touchMove(testEl, {
      touches: [{ clientX: 0, clientY: 10 }],
    })

    // 滚动事件被取消
    expect(triggerFalsy).toBeFalsy()
  })

  test('Scroll To Top', async () => {
    const { getByTestId } = render(<TestComponent scrollParams={true} />)

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
      touches: [{ clientX: 0, clientY: 120 }],
    })
    // 滚动事件正常触发
    expect(triggerTruthy).toBeTruthy()

    // 滚动高度到顶部
    scrollTop.mockImplementationOnce(() => 0)

    const triggerFalsy = fireEvent.touchMove(testEl, {
      touches: [{ clientX: 0, clientY: 200 }],
    })

    // 滚动事件被取消
    expect(triggerFalsy).toBeFalsy()
  })

  test('Scroll With Strict Params', async () => {
    const { getByTestId } = render(<TestComponent scrollParams='strict' />)

    const testEl = getByTestId('lock')

    jest
      .spyOn(document.body, 'clientHeight', 'get')
      .mockImplementation(() => 20)
    jest
      .spyOn(document.body, 'scrollHeight', 'get')
      .mockImplementation(() => 30)

    fireEvent.touchStart(testEl, {
      touches: [{ clientX: 0, clientY: 100 }],
    })

    const cancelTrigger = fireEvent.touchMove(testEl, {
      touches: [{ clientX: 0, clientY: 200 }],
    })

    // 事件被取消
    expect(cancelTrigger).toBeFalsy()
  })
})
