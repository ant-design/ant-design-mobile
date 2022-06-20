import * as React from 'react'
import { fireEvent, render, sleep, testA11y, waitFor } from 'testing'
import NumberKeyboard from '..'

const classPrefix = 'adm-number-keyboard'

describe('NumberKeyboard', () => {
  test('a11y', async () => {
    await testA11y(<NumberKeyboard visible />)
  })

  test('renders with title & close button', async () => {
    let inputValue = ''
    const onClose = jest.fn()
    const onInput = jest.fn(value => {
      inputValue = value
    })

    const { getByTitle, getByText } = render(
      <NumberKeyboard
        visible
        showCloseButton
        onClose={onClose}
        onInput={onInput}
        title='title'
      />
    )

    expect(getByText('title')).toHaveClass(`${classPrefix}-title`)

    // 点击关闭箭头
    fireEvent.click(getByTitle('CLOSE'))
    await waitFor(() => {
      expect(onClose).toBeCalledTimes(1)
    })

    // touch every key button
    document.querySelectorAll(`.${classPrefix}-key`).forEach(element => {
      fireEvent.touchEnd(element)
    })

    await sleep(100)
    expect(onInput).toBeCalledTimes(10)
    expect(inputValue).toEqual('0')
  })

  test('renders with customKey', async () => {
    let inputValue = ''
    const onDelete = jest.fn()
    const onInput = jest.fn(value => {
      inputValue = value
    })

    const { getByText, getByTitle } = render(
      <NumberKeyboard
        customKey='-'
        visible
        onInput={onInput}
        onDelete={onDelete}
      />
    )

    // 点击删除
    fireEvent.touchEnd(getByTitle('BACKSPACE'))
    await waitFor(() => {
      expect(onDelete).toBeCalledTimes(1)
    })

    // 点击自定义按钮
    fireEvent.touchEnd(getByText('-'))
    await waitFor(() => {
      expect(onInput).toBeCalledTimes(1)
      expect(inputValue).toEqual('-')
    })
  })
})
