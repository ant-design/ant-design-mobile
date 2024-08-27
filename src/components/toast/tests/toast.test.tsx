import React, { useRef } from 'react'
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from 'testing'
import Toast, { ToastHandler } from '..'

const classPrefix = `adm-toast`

const waitForContentShow = async (content: string) => {
  await waitFor(() => {
    screen.getByText(content)
  })
}

describe('Toast', () => {
  afterEach(async () => {
    await act(async () => {
      Toast.clear()
    })
  })

  test('string props', async () => {
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
    await waitForContentShow('content')
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
            content: `content ${icon}`,
          })
        }}
      >
        {icon}
      </button>
    ))

    const { getByText } = render(<>{items}</>)
    fireEvent.click(getByText('success'))
    await waitForContentShow('content success')
    expect(
      document.getElementById('CheckOutline-CheckOutline')
    ).toBeInTheDocument()

    fireEvent.click(getByText('fail'))
    await waitForContentShow('content fail')
    expect(
      document.getElementById('CloseOutline-CloseOutline')
    ).toBeInTheDocument()

    fireEvent.click(getByText('loading'))
    await waitForContentShow('content loading')
    expect(document.querySelector('.adm-spin-loading')).toBeInTheDocument()
  })

  test('custom icon', async () => {
    const { getByText } = render(
      <button
        onClick={() => {
          Toast.show({
            icon: <div>icon</div>,
            content: 'content',
          })
        }}
      >
        btn
      </button>
    )
    fireEvent.click(getByText('btn'))
    await waitForContentShow('content')
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
            content: `content ${position}`,
            position,
          })
        }}
      >
        {position}
      </button>
    ))

    const { getByText } = render(<>{items}</>)
    for (const p of positions) {
      fireEvent.click(getByText(p))
      await waitForContentShow(`content ${p}`)
      const main = document.querySelectorAll(`.${classPrefix}-main`)[0]
      expect(main).toHaveStyle(`top: ${obj[p]}`)
    }
  })

  test(`don't allow mask click`, async () => {
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
    await waitForContentShow('Please be patient')
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
    await waitForContentShow('toast')
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
    await waitForContentShow('toast')
    const mask = document.querySelectorAll('.adm-mask')[0]
    fireEvent.click(getByText('close'))
    await waitForElementToBeRemoved(mask)

    fireEvent.click(getByText('show'))
    await waitForContentShow('toast')
    const mask2 = document.querySelectorAll('.adm-mask')[0]
    fireEvent.click(getByText('clear'))
    await waitForElementToBeRemoved(mask2)
  })

  test('global config', async () => {
    Toast.config({ duration: 100, position: 'top', maskClickable: false })
    const { getByText } = render(
      <button
        onClick={() => {
          Toast.show({
            content: 'content',
          })
        }}
      >
        btn
      </button>
    )
    fireEvent.click(getByText('btn'))
    await waitForContentShow('content')
    const main = document.querySelectorAll(`.${classPrefix}-main`)[0]
    const mask = document.querySelectorAll('.adm-mask')[0]
    expect(main).toHaveStyle('top: 20%')
    expect(mask).toHaveStyle('pointer-events: auto')
    await waitForElementToBeRemoved(mask)
  })

  test('close should be work when the toast is not mounted', async () => {
    const { getByText } = render(
      <button
        onClick={() => {
          Toast.show({
            content: 'content',
            duration: 0,
          })
          Toast.clear()
          Toast.show({
            content: 'content2',
            duration: 0,
          })
        }}
      >
        btn
      </button>
    )
    fireEvent.click(getByText('btn'))
    await waitForContentShow('content2')
    expect(document.querySelectorAll(`.${classPrefix}-main`).length)
  })

  test('multiple toasts should show last one', async () => {
    const { getByText } = render(
      <button
        onClick={() => {
          Toast.show({
            content: 'content',
            duration: 0,
          })
          Toast.show({
            content: 'content2',
            duration: 0,
          })
        }}
      >
        btn
      </button>
    )
    fireEvent.click(getByText('btn'))
    await waitForContentShow('content2')
    expect(document.querySelectorAll(`.${classPrefix}-main`).length)
  })
})
