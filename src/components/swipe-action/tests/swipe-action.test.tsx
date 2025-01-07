import { Dialog } from 'antd-mobile'
import React, { useRef } from 'react'
import {
  fireEvent,
  mockDrag,
  render,
  testA11y,
  userEvent,
  waitFor,
} from 'testing'
import SwipeAction, { Action, SwipeActionProps, SwipeActionRef } from '..'

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

function swipe(el: Element, moveOptions: { clientX: number }[]) {
  mockDrag(el, [
    {
      clientX: 100,
    },
    ...moveOptions,
  ])
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

  test('a11y', async () => {
    await testA11y(<App />)
  })

  // Seems `react-spring` will block event handler. Just move this test case to the top
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
    swipe(getByTestId('swipe'), [
      {
        clientX: 50,
      },
    ])

    const track = document.querySelectorAll(`.${classPrefix}-track`)[0]
    await waitFor(() =>
      expect(track).toHaveStyle(`transform: translate3d(-${width}px,0,0);`)
    )

    fireEvent.click(getByText('delete'))
    fireEvent.click(getByText('确定'))
    await waitFor(() => expect(track).toHaveStyle(`transform: none`))
  })

  test('swipe from left to right', async () => {
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

    await userEvent.click(getByText('pin'))
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

    await userEvent.click(
      document.querySelectorAll(`.${classPrefix}-content`)[0]
    )
    await waitFor(() => expect(track).toHaveStyle(`transform: none`))
  })

  test('outside touch should return to the position', async () => {
    const { getByTestId } = render(<App />)

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

  test('onActionsReveal should be called when the ref.show is called', async () => {
    const onActionsReveal = jest.fn()
    const App = () => {
      const ref = useRef<SwipeActionRef>(null)
      return (
        <>
          <SwipeAction
            ref={ref}
            leftActions={leftActions}
            onActionsReveal={onActionsReveal}
          >
            A
          </SwipeAction>
          <button onClick={() => ref.current?.show('left')}>left</button>
        </>
      )
    }
    const { getByText } = render(<App />)

    fireEvent.click(getByText('left'))
    await waitFor(() => {
      expect(onActionsReveal).toBeCalledTimes(1)
      expect(onActionsReveal).toBeCalledWith('left')
    })
  })

  test('onActionsReveal should be called when the operation button is revealed', async () => {
    const onActionsReveal = jest.fn()
    const App = () => {
      return (
        <SwipeAction
          rightActions={rightActions}
          leftActions={leftActions}
          onActionsReveal={onActionsReveal}
          data-testid='swipe'
        >
          A
        </SwipeAction>
      )
    }

    const { getByTestId } = render(<App />)

    swipe(getByTestId('swipe'), [
      {
        clientX: 150,
      },
    ])

    await waitFor(() => {
      expect(onActionsReveal).toBeCalledTimes(1)
      expect(onActionsReveal).toBeCalledWith('left')
    })
  })

  test('onClose should be called when the swipe action is closed', async () => {
    const onClose = jest.fn()
    const { getByTestId, getByText } = render(<App onClose={onClose} />)

    swipe(getByTestId('swipe'), [
      {
        clientX: 150,
      },
    ])

    await userEvent.click(getByText('pin'))
    await waitFor(() => expect(onClose).toBeCalledTimes(1))
  })
})
