import * as React from 'react'
import { fireEvent, render, testA11y, userEvent } from 'testing'
import Checkbox from '../'
import { CheckboxGroupProps } from '../group'

const classPrefix = `adm-checkbox`

it('passes a11y test', async () => {
  await testA11y(<Checkbox>label</Checkbox>)
})

test('basic - should check and uncheck', async () => {
  const { container } = render(<Checkbox>Checkbox</Checkbox>)

  const input = container.querySelectorAll('input')[0]
  const checkbox = container.getElementsByTagName('label')[0]
  expect(input).not.toBeChecked()
  expect(checkbox).toHaveClass(`${classPrefix}`)

  // 点击勾选
  fireEvent.click(checkbox)
  expect(input).toBeChecked()
  expect(checkbox).toHaveClass(`${classPrefix}-checked`)

  // 点击取消勾选
  fireEvent.click(checkbox)
  expect(input).not.toBeChecked()
  expect(checkbox).not.toHaveClass(`${classPrefix}-checked`)
})

test('renders with disabled', async () => {
  const { container } = render(<Checkbox disabled>Checkbox</Checkbox>)
  const input = container.querySelectorAll('input')[0]
  const checkbox = container.getElementsByTagName('label')[0]
  expect(checkbox).toHaveClass(`${classPrefix}-disabled`)
  expect(input).not.toBeChecked()
  // 点击，因为已禁用，所以没有反应
  fireEvent.click(checkbox)
  expect(input).not.toBeChecked()
})

test('renders with indeterminate', async () => {
  const { container } = render(<Checkbox indeterminate>Checkbox</Checkbox>)
  const input = container.querySelectorAll('input')[0]
  const checkbox = container.getElementsByTagName('label')[0]
  expect(checkbox).toHaveClass(`${classPrefix}-indeterminate`)
  expect(input).not.toBeChecked()
  fireEvent.click(checkbox)
  expect(input).toBeChecked()
})

test('Group - default values', async () => {
  const Component = () => (
    <Checkbox.Group defaultValue={['apple', 'orange']}>
      <Checkbox value='apple'>苹果</Checkbox>
      <Checkbox value='orange'>橘子</Checkbox>
      <Checkbox value='banana'>香蕉</Checkbox>
    </Checkbox.Group>
  )
  const { container } = render(<Component />)
  const [apple, orange, banana] = Array.from(
    container.querySelectorAll('input')
  )
  expect(apple).toBeChecked()
  expect(orange).toBeChecked()
  expect(banana).not.toBeChecked()

  fireEvent.click(banana)

  expect(apple).toBeChecked()
  expect(orange).toBeChecked()
  expect(banana).toBeChecked()
})

test('Group - value onChange', () => {
  let checked = ['apple', 'orange']
  const onChange = jest.fn(value => {
    checked = value
  })

  const Component = (props: CheckboxGroupProps) => (
    <Checkbox.Group {...props}>
      <Checkbox value='apple'>苹果</Checkbox>
      <Checkbox value='orange'>橘子</Checkbox>
      <Checkbox value='banana'>香蕉</Checkbox>
    </Checkbox.Group>
  )
  const { container } = render(
    <Component value={checked} onChange={onChange} />
  )
  const [apple, orange, banana] = Array.from(
    container.querySelectorAll('input')
  )
  expect(apple).toBeChecked()
  expect(orange).toBeChecked()
  expect(banana).not.toBeChecked()

  fireEvent.click(banana)

  expect(onChange).toHaveBeenCalledTimes(1)
  expect(checked).toEqual(['apple', 'orange', 'banana'])
})

test('Group - group disabled', () => {
  const Component = () => (
    <Checkbox.Group defaultValue={['orange', 'banana']} disabled>
      <Checkbox value='apple'>苹果</Checkbox>
      <Checkbox value='orange' disabled>
        橘子
      </Checkbox>
      <Checkbox value='banana' disabled={false}>
        香蕉
      </Checkbox>
    </Checkbox.Group>
  )
  const { container } = render(<Component />)
  const [apple, orange, banana] = Array.from(
    container.querySelectorAll('input')
  )
  expect(apple).not.toBeChecked()
  expect(orange).toBeChecked()
  expect(banana).toBeChecked()

  userEvent.click(apple)
  userEvent.click(orange)
  userEvent.click(banana)

  expect(apple).not.toBeChecked()
  expect(orange).toBeChecked()
  expect(banana).toBeChecked()
})
