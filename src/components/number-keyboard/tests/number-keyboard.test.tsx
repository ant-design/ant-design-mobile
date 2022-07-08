import React, { useState } from 'react'
import { fireEvent, render, testA11y, screen, waitFor } from 'testing'
import NumberKeyboard from '..'

const classPrefix = 'adm-number-keyboard'

function mockClick(el: HTMLElement) {
  fireEvent.touchStart(el, { touches: [{}] })
  fireEvent.touchEnd(el, { touches: [{}] })
}

describe('NumberKeyboard', () => {
  test('a11y', async () => {
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
    fireEvent.click(screen.getByTitle('CLOSE'))
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

    mockClick(screen.getByTitle('BACKSPACE'))
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
    const del = screen.getByTitle('BACKSPACE')
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
    fireEvent.click(screen.getByTitle('CLOSE'))
    await waitFor(() => expect(popup).not.toBeVisible())
  })

  test('onDelete will be called when backspace press long time', () => {
    jest.useFakeTimers()
    const onDelete = jest.fn()
    render(<NumberKeyboard visible onDelete={onDelete} />)
    const del = screen.getByTitle('BACKSPACE')
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
})
