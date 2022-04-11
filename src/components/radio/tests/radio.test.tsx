import React from 'react'
import { fireEvent, render, testA11y, userEvent } from 'testing'
import Radio from '../'
import { RadioGroupProps } from '../group'

const classPrefix = `adm-radio`

describe('Radio', () => {
  test('a11y', async () => {
    await testA11y(<Radio>Radio</Radio>)
  })

  test('basic - should check', async () => {
    const { container } = render(<Radio>Radio</Radio>)

    const input = container.querySelectorAll('input')[0]
    const radio = container.getElementsByTagName('label')[0]
    expect(input).not.toBeChecked()
    expect(radio).toHaveClass(`${classPrefix}`)

    fireEvent.click(radio)
    expect(input).toBeChecked()
    expect(radio).toHaveClass(`${classPrefix}-checked`)
  })
})

describe('Radio.Group', () => {
  test('renders with disabled', async () => {
    const { container } = render(<Radio disabled>Radio</Radio>)
    const input = container.querySelectorAll('input')[0]
    const radio = container.getElementsByTagName('label')[0]
    expect(radio).toHaveClass(`${classPrefix}-disabled`)
    expect(input).not.toBeChecked()
    fireEvent.click(radio)
    expect(input).not.toBeChecked()
  })

  test('default values', async () => {
    const Component = () => (
      <Radio.Group defaultValue={'apple'}>
        <Radio value='apple'>苹果</Radio>
        <Radio value='orange'>橘子</Radio>
        <Radio value='banana'>香蕉</Radio>
      </Radio.Group>
    )
    const { container } = render(<Component />)
    const [apple, orange, banana] = Array.from(
      container.querySelectorAll('input')
    )
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

    const Component = (props: RadioGroupProps) => (
      <Radio.Group {...props}>
        <Radio value='apple'>苹果</Radio>
        <Radio value='orange'>橘子</Radio>
        <Radio value='banana'>香蕉</Radio>
      </Radio.Group>
    )
    const { container } = render(
      <Component value={checked} onChange={onChange} />
    )
    const [apple, orange, banana] = Array.from(
      container.querySelectorAll('input')
    )
    expect(apple).toBeChecked()
    expect(orange).not.toBeChecked()
    expect(banana).not.toBeChecked()

    fireEvent.click(banana)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(checked).toEqual('banana')
  })

  test('group disabled', () => {
    const Component = () => (
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

    const { container, getByText } = render(<Component />)

    let inputs = container.querySelectorAll('input')
    expect(inputs.item(0)).not.toBeChecked()
    expect(inputs.item(1)).toBeChecked()
    expect(inputs.item(2)).not.toBeChecked()

    userEvent.click(getByText('苹果'))
    userEvent.click(getByText('橘子'))
    userEvent.click(getByText('香蕉'))

    inputs = container.querySelectorAll('input')
    expect(inputs.item(0)).not.toBeChecked()
    expect(inputs.item(1)).toBeChecked()
    expect(inputs.item(2)).not.toBeChecked()
  })
})
