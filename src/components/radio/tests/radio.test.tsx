import React from 'react'
import { fireEvent, render, testA11y, userEvent, screen } from 'testing'
import Radio from '../'
import { RadioGroupProps } from '../group'

const classPrefix = `adm-radio`

describe('Radio', () => {
  test('a11y', async () => {
    await testA11y(<Radio>Radio</Radio>)
  })

  test('basic - should check', async () => {
    render(<Radio>Radio</Radio>)

    const radio = screen.getByRole('radio')
    const label = document.getElementsByTagName('label')[0]
    expect(radio).not.toBeChecked()
    expect(label).toHaveClass(`${classPrefix}`)

    fireEvent.click(label)
    expect(radio).toBeChecked()
    expect(label).toHaveClass(`${classPrefix}-checked`)
  })

  test('onChange should be call once when the selected item is clicked multiple times', async () => {
    const onChange = jest.fn()
    render(
      <Radio value='1' onChange={onChange}>
        1
      </Radio>
    )
    await userEvent.tripleClick(screen.getByRole('radio'))
    expect(onChange).toBeCalledTimes(1)
  })
})

describe('Radio.Group', () => {
  test('renders with disabled', async () => {
    render(<Radio disabled>Radio</Radio>)
    const radio = screen.getByRole('radio')
    const label = document.getElementsByTagName('label')[0]
    expect(label).toHaveClass(`${classPrefix}-disabled`)
    expect(radio).not.toBeChecked()
    fireEvent.click(label)
    expect(radio).not.toBeChecked()
  })

  test('default values', () => {
    render(
      <Radio.Group defaultValue={'apple'}>
        <Radio value='apple'>苹果</Radio>
        <Radio value='orange'>橘子</Radio>
        <Radio value='banana'>香蕉</Radio>
      </Radio.Group>
    )
    const [apple, orange, banana] = screen.getAllByRole('radio')
    expect(apple).toBeChecked()
    expect(orange).not.toBeChecked()
    expect(banana).not.toBeChecked()

    fireEvent.click(banana)

    expect(apple).not.toBeChecked()
    expect(orange).not.toBeChecked()
    expect(banana).toBeChecked()
  })

  test('value onChange', () => {
    let checked = 'apple'
    const onChange = jest.fn(value => {
      checked = value
    })

    render(
      <Radio.Group value={checked} onChange={onChange}>
        <Radio value='apple'>苹果</Radio>
        <Radio value='orange'>橘子</Radio>
        <Radio value='banana'>香蕉</Radio>
      </Radio.Group>
    )
    const [apple, orange, banana] = screen.getAllByRole('radio')
    expect(apple).toBeChecked()
    expect(orange).not.toBeChecked()
    expect(banana).not.toBeChecked()

    fireEvent.click(banana)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(checked).toEqual('banana')
  })

  test('group disabled', () => {
    const { container, getByText } = render(
      <Radio.Group defaultValue={'orange'} disabled>
        <Radio value='apple'>苹果</Radio>
        <Radio value='orange' disabled>
          橘子
        </Radio>
        <Radio value='banana' disabled={false}>
          香蕉
        </Radio>
      </Radio.Group>
    )

    const [apple, orange, banana] = screen.getAllByRole('radio')
    expect(apple).not.toBeChecked()
    expect(orange).toBeChecked()
    expect(banana).not.toBeChecked()

    userEvent.click(screen.getByText('苹果'))
    userEvent.click(screen.getByText('橘子'))
    userEvent.click(screen.getByText('香蕉'))

    expect(apple).not.toBeChecked()
    expect(orange).toBeChecked()
    expect(banana).not.toBeChecked()
  })

  test('onChange should be call once when the selected item is clicked multiple times', async () => {
    const onChange = jest.fn()
    render(
      <Radio.Group onChange={onChange}>
        <Radio value='1'>1</Radio>
        <Radio value='2'>2</Radio>
      </Radio.Group>
    )
    await userEvent.tripleClick(screen.getByRole('radio', { name: '1' }))
    expect(onChange).toBeCalledTimes(1)
  })
})
