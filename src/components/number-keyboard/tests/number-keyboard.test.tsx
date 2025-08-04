import React, { useState } from 'react'
import { fireEvent, render, screen, testA11y, waitFor } from 'testing'
import NumberKeyboard from '..'
import { getDefaultConfig } from '../../config-provider'

const classPrefix = 'adm-number-keyboard'
const { locale } = getDefaultConfig()

function mockClick(el: HTMLElement) {
  fireEvent.click(el)
}

describe('NumberKeyboard', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.clearAllTimers()
    jest.useRealTimers()
  })

  test('a11y', async () => {
    jest.useRealTimers()
    await testA11y(<NumberKeyboard visible />)
  })

  test('renders with title', () => {
    render(<NumberKeyboard visible title='title' />)
    const title = screen.getByText('title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass(`${classPrefix}-title`)
    expect(document.querySelector(`.${classPrefix}-header`)).toHaveClass(
      `${classPrefix}-header-with-title`
    )
  })

  test('onClose should be called by close button', () => {
    const onClose = jest.fn()
    render(<NumberKeyboard visible onClose={onClose} />)

    fireEvent.click(screen.getByTitle('关闭'))
    expect(onClose).toBeCalledTimes(1)
  })

  test('onInput should be work', () => {
    const onInput = jest.fn()
    render(<NumberKeyboard visible onInput={onInput} />)
    const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    keys.forEach(key => {
      const el = screen.getByTitle(key)
      mockClick(el)
    })
    expect(onInput).toBeCalledTimes(10)
  })

  test('renders with customKey', () => {
    const onDelete = jest.fn()
    const onInput = jest.fn()
    render(
      <NumberKeyboard
        customKey='-'
        visible
        onInput={onInput}
        onDelete={onDelete}
      />
    )

    mockClick(screen.getByTitle(locale.Input.clear))
    expect(onDelete).toBeCalled()

    mockClick(screen.getByText('-'))
    expect(onInput).toBeCalledWith('-')
  })

  test('renders with confirmText', async () => {
    const onConfirm = jest.fn()
    const onClose = jest.fn()
    const onDelete = jest.fn()
    render(
      <NumberKeyboard
        visible
        confirmText='confirm'
        onConfirm={onConfirm}
        onClose={onClose}
        onDelete={onDelete}
      />
    )
    const confirm = screen.getByText('confirm')
    const del = screen.getByTitle(locale.Input.clear)
    expect(confirm).toBeInTheDocument()
    expect(confirm).toHaveClass(
      `${classPrefix}-key-extra ${classPrefix}-key-ok`
    )
    expect(del).toHaveClass(`${classPrefix}-key-extra ${classPrefix}-key-bs`)
    expect(screen.getByTitle('0')).toHaveClass(`${classPrefix}-key-mid`)

    mockClick(confirm)
    expect(onConfirm).toBeCalled()
    expect(onClose).toBeCalled()
    mockClick(del)
    expect(onDelete).toBeCalled()
  })

  test('renders witout close button', () => {
    render(<NumberKeyboard visible showCloseButton={false} />)
    expect(
      document.querySelector(`.${classPrefix}-header`)
    ).not.toBeInTheDocument()
  })

  test('renders with random order', async () => {
    const App = () => {
      const [visible, setVisible] = useState(false)
      return (
        <>
          <NumberKeyboard
            visible={visible}
            randomOrder
            onClose={() => {
              setVisible(false)
            }}
          />
          <button onClick={() => setVisible(true)}>open</button>
        </>
      )
    }
    render(<App />)
    fireEvent.click(screen.getByText('open'))
    const popup = document.querySelector(`.${classPrefix}-popup`)
    const main = document.querySelector(`.${classPrefix}-main`)
    expect(main).not.toHaveTextContent('1234567890')
    fireEvent.click(screen.getByTitle('关闭'))
    await waitFor(() => expect(popup).not.toBeVisible())
  })

  test('onDelete will be called when backspace press long time', () => {
    jest.useFakeTimers()
    const onDelete = jest.fn()
    render(<NumberKeyboard visible onDelete={onDelete} />)
    const del = screen.getByTitle(locale.Input.clear)
    fireEvent.touchStart(del, { touches: [{}] })
    jest.runOnlyPendingTimers()
    expect(onDelete).toBeCalledTimes(1)
    jest.runOnlyPendingTimers()
    expect(onDelete).toBeCalledTimes(2)
    jest.useRealTimers()
  })

  test('render with multiple customKeys', () => {
    const onInput = jest.fn()
    render(<NumberKeyboard customKey={['-', '.']} visible onInput={onInput} />)
    const left = screen.getByText('-')
    const right = screen.getByText('.')
    expect(left).toBeInTheDocument()
    expect(right).toBeInTheDocument()

    mockClick(left)
    expect(onInput).toBeCalledWith('-')
    mockClick(right)
    expect(onInput).toBeCalledWith('.')
  })

  test('render with multiple customKeys and confirmText', () => {
    render(
      <NumberKeyboard customKey={['-', '.']} visible confirmText='confirm' />
    )
    const left = screen.getByTitle('-')
    const right = screen.getByTitle('.')
    expect(left).toBeInTheDocument()
    expect(right).toBeInTheDocument()
    expect(screen.getByTitle('0')).not.toHaveClass(`${classPrefix}-key-mid`)
  })

  test('long press backspace and release', () => {
    const onDelete = jest.fn()
    const { container } = render(<NumberKeyboard visible onDelete={onDelete} />)

    // Fire touchstart event
    fireEvent.touchStart(screen.getByTitle(locale.Input.clear), {
      touches: [{}],
    })
    onDelete.mockReset()

    jest.advanceTimersByTime(10000)
    expect(onDelete).toHaveBeenCalled()

    // release
    fireEvent.touchEnd(screen.getByTitle(locale.Input.clear), { touches: [{}] })
    const callTimes = onDelete.mock.calls.length
    jest.advanceTimersByTime(10000)
    expect(onDelete.mock.calls.length).toBe(callTimes)

    onDelete.mockReset()

    // We do not fire touchend event to mock ISO missing touchend event
    // Press other key
    mockClick(
      document.body.querySelector(
        '.adm-number-keyboard-key-number'
      ) as HTMLDivElement
    )

    jest.advanceTimersByTime(10000)
    expect(onDelete).not.toHaveBeenCalled()
  })

  test('long press backspace and release with confirmText', () => {
    const onDelete = jest.fn()
    const { container } = render(
      <NumberKeyboard visible confirmText='确定' onDelete={onDelete} />
    )

    // Fire touchstart event
    fireEvent.touchStart(screen.getByTitle(locale.Input.clear), {
      touches: [{}],
    })
    onDelete.mockReset()

    jest.advanceTimersByTime(10000)
    expect(onDelete).toHaveBeenCalled()

    // release
    fireEvent.touchEnd(screen.getByTitle(locale.Input.clear), { touches: [{}] })
    const callTimes = onDelete.mock.calls.length
    jest.advanceTimersByTime(10000)
    expect(onDelete.mock.calls.length).toBe(callTimes)

    onDelete.mockReset()

    // We do not fire touchend event to mock ISO missing touchend event
    // Press other key
    mockClick(
      document.body.querySelector(
        '.adm-number-keyboard-key-number'
      ) as HTMLDivElement
    )

    jest.advanceTimersByTime(10000)
    expect(onDelete).not.toHaveBeenCalled()
  })
})
