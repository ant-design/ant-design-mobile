import React, { useRef } from 'react'
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  actClick,
  act,
  actSleep,
} from 'testing'
import Toast, { ToastHandler } from '..'

const classPrefix = `adm-toast`

describe('Toast', () => {
  afterEach(async () => {
    await act(async () => {
      Toast.clear()
    })
  })

  test('string props', () => {
    const { getByText } = render(
      <button
        onClick={() => {
          Toast.show('content')
        }}
      >
        btn
      </button>
    )
    fireEvent.click(getByText('btn'))
    expect(getByText('content')).toBeInTheDocument()
  })

  test('icon', async () => {
    const icons = ['success', 'fail', 'loading']
    const items = icons.map(icon => (
      <button
        key={icon}
        onClick={() => {
          Toast.show({
            icon,
          })
        }}
      >
        {icon}
      </button>
    ))

    const { getByText } = render(<>{items}</>)
    await actClick(getByText('success'), 1)
    expect(
      document.querySelectorAll(`.${classPrefix}-icon-success`)[0]
    ).toBeInTheDocument()

    await actClick(getByText('fail'))
    expect(
      document.querySelectorAll(`.${classPrefix}-icon-fail`)[0]
    ).toBeInTheDocument()

    await actClick(getByText('loading'), 0)
    expect(
      document.querySelectorAll(`.${classPrefix}-loading`)[0]
    ).toBeInTheDocument()
  })

  test('custom icon', () => {
    const { getByText } = render(
      <button
        onClick={() => {
          Toast.show({
            icon: <div>icon</div>,
          })
        }}
      >
        btn
      </button>
    )
    fireEvent.click(getByText('btn'))
    expect(getByText('icon')).toBeInTheDocument()
  })

  test('position', async () => {
    const positions = ['top', 'bottom', 'center'] as const
    const obj = {
      'top': '20%',
      'bottom': '80%',
      'center': '50%',
    }
    const items = positions.map(position => (
      <button
        key={position}
        onClick={() => {
          Toast.show({
            content: `hello`,
            position,
          })
        }}
      >
        {position}
      </button>
    ))

    const { getByText } = render(<>{items}</>)
    for (const p of positions) {
      await actClick(getByText(p), 0)
      const main = document.querySelectorAll(`.${classPrefix}-main`)[0]
      expect(main).toHaveStyle(`top: ${obj[p]}`)
    }
  })

  test(`don't allow mask click`, () => {
    const { getByText } = render(
      <button
        onClick={() => {
          Toast.show({
            content: 'Please be patient',
            maskClickable: false,
          })
        }}
      >
        btn
      </button>
    )
    fireEvent.click(getByText('btn'))
    const mask = document.querySelectorAll('.adm-mask')[0]
    expect(mask).toHaveStyle('pointer-events: auto')
  })

  test('close automatically when timeout', async () => {
    jest.useFakeTimers()
    const { getByText } = render(
      <button
        onClick={() => {
          Toast.show({
            content: 'toast',
            duration: 5000,
          })
        }}
      >
        btn
      </button>
    )
    fireEvent.click(getByText('btn'))
    const mask = document.querySelectorAll('.adm-mask')[0]
    act(() => {
      jest.runAllTimers()
    })
    jest.useRealTimers()
    await waitForElementToBeRemoved(mask)
  })

  test('manual clear', async () => {
    const App = () => {
      const handler = useRef<ToastHandler>()
      return (
        <>
          <button
            onClick={() => {
              handler.current = Toast.show({
                content: 'toast',
                duration: 0,
              })
            }}
          >
            show
          </button>
          <button
            onClick={() => {
              handler.current?.close()
            }}
          >
            close
          </button>
          <button
            onClick={() => {
              Toast.clear()
            }}
          >
            clear
          </button>
        </>
      )
    }
    const { getByText } = render(<App />)
    fireEvent.click(getByText('show'))
    const mask = document.querySelectorAll('.adm-mask')[0]
    fireEvent.click(getByText('close'))
    await waitForElementToBeRemoved(mask)

    fireEvent.click(getByText('show'))
    const mask2 = document.querySelectorAll('.adm-mask')[0]
    fireEvent.click(getByText('clear'))
    await waitForElementToBeRemoved(mask2)
  })

  test('global config', async () => {
    Toast.config({ duration: 10, position: 'top', maskClickable: false })
    const { getByText } = render(
      <button
        onClick={() => {
          Toast.show({
            content: 'toast',
          })
        }}
      >
        btn
      </button>
    )
    fireEvent.click(getByText('btn'))
    const main = document.querySelectorAll(`.${classPrefix}-main`)[0]
    const mask = document.querySelectorAll('.adm-mask')[0]
    expect(main).toHaveStyle('top: 20%')
    expect(mask).toHaveStyle('pointer-events: auto')
    await actSleep(15)
    waitForElementToBeRemoved(mask)
  })
})
