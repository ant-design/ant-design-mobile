import * as React from 'react'
import { fireEvent, render, testA11y, waitFor } from 'testing'
import NumberKeyboard from '..'

const classPrefix = 'adm-number-keyboard'

it('passes a11y test', async () => {
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

  // 点击数字
  fireEvent.click(getByText('0'))
  await waitFor(() => {
    expect(onInput).toBeCalledTimes(1)
    expect(inputValue).toEqual('0')
  })
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
  fireEvent.click(getByTitle('BACKSPACE'))
  await waitFor(() => {
    expect(onDelete).toBeCalledTimes(1)
  })

  // 点击自定义按钮
  fireEvent.click(getByText('-'))
  await waitFor(() => {
    expect(onInput).toBeCalledTimes(1)
    expect(inputValue).toEqual('-')
  })
})
