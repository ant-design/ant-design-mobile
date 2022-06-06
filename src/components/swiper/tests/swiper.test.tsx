import React, { useRef } from 'react'
import { render, testA11y, fireEvent, sleep } from 'testing'
import Swiper, { SwiperRef } from '..'
import { act } from '@testing-library/react'

const classPrefix = `adm-swiper`

function $$(className: string) {
  return document.querySelectorAll(className)
}

async function drag(
  element: Element,
  moveOptions: { clientX: number; clientY: number }[]
) {
  fireEvent.mouseDown(element, {
    buttons: 1,
  })

  for (const option of moveOptions) {
    fireEvent.mouseMove(element, {
      ...option,
      buttons: 1,
    })
    // trigger onRest
    await sleep(0)
  }

  fireEvent.mouseUp(element)
}

const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})

describe('Swiper', () => {
  const items = [1, 2, 3].map(item => (
    <Swiper.Item key={item}>
      <div style={{ height: 120 }}>{item}</div>
    </Swiper.Item>
  ))

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      value: 375,
    })
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      value: 200,
    })
  })

  afterAll(() => {
    warnSpy.mockRestore()
  })

  test('a11y', async () => {
    await testA11y(<Swiper>{items}</Swiper>)
  })

  test('basic usage', async () => {
    render(<Swiper>{items}</Swiper>)

    const el = $$(`.${classPrefix}-track`)[0]

    // swipe to item 2
    await drag(el, [
      {
        clientX: 200,
        clientY: 25,
      },
      {
        clientX: 100,
        clientY: 30,
      },
    ])

    expect($$(`.${classPrefix}-track-inner`)[0]).toHaveStyle(
      'transform: translate3d(-100%,0,0)'
    )
    expect($$('.adm-page-indicator-dot')[1]).toHaveClass(
      'adm-page-indicator-dot-active'
    )
  })

  test('auto play', () => {
    jest.useFakeTimers()
    render(<Swiper autoplay>{items}</Swiper>)

    // trigger once
    act(() => {
      jest.runOnlyPendingTimers()
    })

    expect($$(`.${classPrefix}-track-inner`)[0]).toHaveStyle(
      'transform: translate3d(-100%,0,0)'
    )
    jest.useRealTimers()
  })

  test('loop', async () => {
    const { container } = render(
      <Swiper loop defaultIndex={3}>
        {items}
      </Swiper>
    )

    expect(container).toMatchSnapshot()

    const el = $$(`.${classPrefix}-track`)[0]
    await drag(el, [
      {
        clientX: 200,
        clientY: 25,
      },
      {
        clientX: 100,
        clientY: 30,
      },
    ])

    expect(container).toMatchSnapshot()
  })

  test('auto play and loop', () => {
    jest.useFakeTimers()
    const { debug } = render(
      <Swiper autoplay loop>
        {items}
      </Swiper>
    )

    act(() => {
      jest.runOnlyPendingTimers()
    })
    expect($$(`.${classPrefix}-slide`)[0]).toHaveStyle(
      'transform: translate3d(-100%,0,0)'
    )

    act(() => {
      jest.runOnlyPendingTimers()
    })
    expect($$(`.${classPrefix}-slide`)[1]).toHaveStyle(
      'left: -100%; transform: translate3d(-100%,0,0)'
    )
    jest.useRealTimers()
  })

  test('`swipePrev` & `swipeNext`', () => {
    const App = () => {
      const ref = useRef<SwiperRef>(null)
      return (
        <>
          <Swiper ref={ref}>{items}</Swiper>
          <button
            onClick={() => {
              ref.current?.swipePrev()
            }}
          >
            prev
          </button>
          <button
            onClick={() => {
              ref.current?.swipeNext()
            }}
          >
            next
          </button>
        </>
      )
    }
    const { getByText } = render(<App />)

    fireEvent.click(getByText('next'))
    expect($$(`.${classPrefix}-track-inner`)[0]).toHaveStyle(
      'transform: translate3d(-100%,0,0)'
    )

    fireEvent.click(getByText('prev'))
    expect($$(`.${classPrefix}-track-inner`)[0]).toHaveStyle('transform: none')
  })

  test('`onIndexChange` should be called when use `swipeTo`', () => {
    const onIndexChange = jest.fn()
    const App = () => {
      const ref = useRef<SwiperRef>(null)
      return (
        <>
          <Swiper ref={ref} onIndexChange={onIndexChange}>
            {items}
          </Swiper>
          <button
            onClick={() => {
              ref.current?.swipeTo(3)
            }}
          >
            to
          </button>
        </>
      )
    }
    const { getByText } = render(<App />)

    fireEvent.click(getByText('to'))
    expect(onIndexChange).toBeCalledWith(2)
  })

  test(`dont't allow touch move`, () => {
    render(<Swiper allowTouchMove={false}>{items}</Swiper>)

    expect($$(`.${classPrefix}-track`)[0]).not.toHaveClass(
      `${classPrefix}-track-allow-touch-move`
    )
  })

  test('custom indicator', () => {
    const { container } = render(
      <Swiper
        indicator={(total, current) => <div>{`${current + 1} / ${total}`}</div>}
      >
        {items}
      </Swiper>
    )

    expect(container).toHaveTextContent('1 / 3')
  })

  test('direction vertical', async () => {
    render(
      <Swiper direction='vertical' style={{ '--height': '200px' }}>
        {items}
      </Swiper>
    )

    const el = $$(`.${classPrefix}-track`)[0]
    await drag(el, [
      {
        clientX: 50,
        clientY: 200,
      },
      {
        clientX: 60,
        clientY: 50,
      },
    ])

    expect($$(`.${classPrefix}-track-inner`)[0]).toHaveStyle(
      'transform: translate3d(0,-100%,0)'
    )
  })

  test('warning when the children is not `Swiper.Item` components`', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})
    render(
      <Swiper>
        <div />
      </Swiper>
    )
    expect(warnSpy).toHaveBeenCalledWith(
      '[antd-mobile: Swiper] The children of `Swiper` must be `Swiper.Item` components.'
    )
  })

  test('warning when the children is empty', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})

    render(<Swiper></Swiper>)
    expect(warnSpy).toHaveBeenCalledWith(
      '[antd-mobile: Swiper] `Swiper` needs at least one child.'
    )
  })
})
