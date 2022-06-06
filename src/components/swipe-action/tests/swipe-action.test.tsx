import React, { useRef } from 'react'
import { render, testA11y, fireEvent, waitFor } from 'testing'
import SwipeAction, { Action, SwipeActionProps, SwipeActionRef } from '..'
import { Dialog } from 'antd-mobile'

const classPrefix = `adm-swipe-action`
const width = 80
const leftActions: Action[] = [
  {
    key: 'pin',
    text: 'pin',
    color: 'primary',
  },
]
const rightActions: Action[] = [
  {
    key: 'delete',
    text: 'delete',
    color: 'danger',
  },
]

function swipe(element: Element, moveOptions: { clientX: number }[]) {
  fireEvent.mouseDown(element, {
    buttons: 1,
    clientX: 100,
  })

  moveOptions.forEach(option => {
    fireEvent.mouseMove(element, {
      ...option,
      buttons: 1,
    })
  })

  fireEvent.mouseUp(element)
}

const App = (props: Partial<SwipeActionProps>) => {
  return (
    <SwipeAction
      leftActions={leftActions}
      rightActions={rightActions}
      data-testid='swipe'
      {...props}
    >
      <div>A</div>
    </SwipeAction>
  )
}

describe('SwipeAction', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      value: width,
    })
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('a11y', async () => {
    await testA11y(<App />)
  })

  test('swipe from left to right', async () => {
    const { getByTestId, getByText } = render(<App />)

    jest.useFakeTimers()
    swipe(getByTestId('swipe'), [
      {
        clientX: 150,
      },
    ])

    const track = document.querySelectorAll(`.${classPrefix}-track`)[0]
    await waitFor(() =>
      expect(track).toHaveStyle(`transform: translate3d(${width}px,0,0)`)
    )

    jest.runAllTimers()
    fireEvent.click(getByText('pin'))
    await waitFor(() => expect(track).toHaveStyle(`transform: none`))
  })

  test('swipe from right to left', async () => {
    const { getByTestId } = render(<App />)

    swipe(getByTestId('swipe'), [
      {
        clientX: 50,
      },
    ])

    const track = document.querySelectorAll(`.${classPrefix}-track`)[0]
    await waitFor(() =>
      expect(track).toHaveStyle(`transform: translate3d(-${width}px,0,0);`)
    )
  })

  test('manual return to the position', async () => {
    const App = () => {
      const ref = useRef<SwipeActionRef>(null)

      return (
        <SwipeAction
          ref={ref}
          closeOnAction={false}
          closeOnTouchOutside={false}
          rightActions={[
            {
              key: 'delete',
              text: 'delete',
              color: 'danger',
              onClick: async () => {
                await Dialog.confirm({
                  content: 'Are you sure',
                })
                ref.current?.close()
              },
            },
          ]}
          data-testid='swipe'
        >
          A
        </SwipeAction>
      )
    }
    const { getByTestId, getByText } = render(<App />)

    jest.useFakeTimers()
    swipe(getByTestId('swipe'), [
      {
        clientX: 50,
      },
    ])

    const track = document.querySelectorAll(`.${classPrefix}-track`)[0]
    await waitFor(() =>
      expect(track).toHaveStyle(`transform: translate3d(-${width}px,0,0);`)
    )

    jest.runAllTimers()
    fireEvent.click(getByText('delete'))
    fireEvent.click(getByText('确定'))
    await waitFor(() => expect(track).toHaveStyle(`transform: none`))
  })

  test('ref.show', async () => {
    const App = () => {
      const ref = useRef<SwipeActionRef>(null)
      return (
        <>
          <SwipeAction
            ref={ref}
            rightActions={rightActions}
            leftActions={leftActions}
          >
            A
          </SwipeAction>
          <button onClick={() => ref.current?.show('left')}>left</button>
          <button onClick={() => ref.current?.show('right')}>right</button>
        </>
      )
    }
    const { getByText } = render(<App />)

    const track = document.querySelectorAll(`.${classPrefix}-track`)[0]
    fireEvent.click(getByText('left'))
    await waitFor(() =>
      expect(track).toHaveStyle(`transform: translate3d(${width}px,0,0)`)
    )

    fireEvent.click(getByText('right'))
    await waitFor(() =>
      expect(track).toHaveStyle(`transform: translate3d(-${width}px,0,0);`)
    )
  })

  test('content click should return to the position', async () => {
    const { getByTestId, getByText } = render(<App />)

    swipe(getByTestId('swipe'), [
      {
        clientX: 150,
      },
    ])

    const track = document.querySelectorAll(`.${classPrefix}-track`)[0]
    await waitFor(() =>
      expect(track).toHaveStyle(`transform: translate3d(${width}px,0,0)`)
    )

    fireEvent.click(getByText('A'))
    await waitFor(() => expect(track).toHaveStyle(`transform: none`))
  })

  test('outside touch should return to the position', async () => {
    const { getByTestId, getByText } = render(<App />)

    swipe(getByTestId('swipe'), [
      {
        clientX: 150,
      },
    ])

    const track = document.querySelectorAll(`.${classPrefix}-track`)[0]
    await waitFor(() =>
      expect(track).toHaveStyle(`transform: translate3d(${width}px,0,0)`)
    )

    fireEvent.touchStart(document.body)
    await waitFor(() => expect(track).toHaveStyle(`transform: none`))
  })

  test('onAction should not be called when swiping', async () => {
    const onAction = jest.fn()
    const { getByTestId, getByText } = render(<App onAction={onAction} />)

    swipe(getByTestId('swipe'), [
      {
        clientX: 50,
      },
    ])

    fireEvent.click(getByText('delete'))
    expect(onAction).not.toBeCalled()
  })
})
