import * as React from 'react'
import { fireEvent, render, testA11y, waitFor } from 'testing'
import NumbericKeyboard from '..'

const classPrefix = `am-card`

it('passes a11y test', async () => {
  await testA11y(<NumbericKeyboard visible />)
})

test('renders with title', () => {
  const { getByText } = render(<NumbericKeyboard visible title='键盘标题' />)
  expect(getByText('title')).toHaveClass(`${classPrefix}-header-title`)
  expect(getByText('Card')).toHaveClass(`${classPrefix}-body`)
})

test('renders with hide button', () => {
  const onClose = jest.fn()

  const { getByText } = render(<NumbericKeyboard title='卡片标题' />)
  expect(getByText('title')).toHaveClass(`${classPrefix}-header-title`)
  expect(getByText('Card')).toHaveClass(`${classPrefix}-body`)
})

test('renders with customKey', async () => {
  let inputValue = ''
  const onDelete = jest.fn()
  const onInput = jest.fn(value => {
    inputValue = value
  })

  const { getByText } = render(
    <NumbericKeyboard
      customKey='-'
      visible
      onInput={onInput}
      onDelete={onDelete}
    />
  )

  // 点击数字
  fireEvent.click(getByText('0'))
  await waitFor(() => {
    expect(onInput).toBeCalledTimes(1)
    expect(inputValue).toEqual('0')
  })

  // 点击删除
  // fireEvent.click(getByText('0'))
  // await waitFor(() => {
  //   expect(onDelete).toBeCalledTimes(1)
  // })

  // 点击自定义按钮
  fireEvent.click(getByText('-'))
  await waitFor(() => {
    expect(onInput).toBeCalledTimes(1)
    expect(inputValue).toEqual('-')
  })
})
