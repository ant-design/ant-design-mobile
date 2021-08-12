import React from 'react'
import { render, testA11y } from 'testing'
import Space from '../'

const classPrefix = `am-space`

it('passes a11y test', async () => {
  await testA11y(<Space>test</Space>)
})

test('renders basic', () => {
  const { getByTestId, container } = render(
    <Space>
      <div data-testid='block'>block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const amSpace = container.getElementsByClassName('am-space')[0]
  expect(amSpace).toHaveClass(`${classPrefix}-horizontal`)
  expect(amSpace.firstChild).toHaveStyle('margin-right: var(--horizontal-size)')
  expect(getByTestId('block').parentElement).toHaveClass(`${classPrefix}-item`)
})

test('renders with wrap', () => {
  const { container } = render(
    <Space wrap>
      <div>block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const amSpace = container.getElementsByClassName('am-space')[0]
  expect(amSpace).toHaveClass(`${classPrefix}-wrap`)
})

test('renders with direction', () => {
  const { container } = render(
    <Space direction='vertical'>
      <div>block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const amSpace = container.getElementsByClassName('am-space')[0]
  expect(amSpace).toHaveClass(`${classPrefix}-vertical`)
})

test('renders with size', () => {
  const { container } = render(
    <Space size='24px'>
      <div>block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const amSpace = container.getElementsByClassName('am-space')[0]
  expect(amSpace).toHaveStyle({
    '--vertical-size': '24px',
    '--horizontal-size': '24px',
  })
})

test('renders with align', () => {
  const align = 'end'
  const { container } = render(
    <Space align={align}>
      <div>block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const amSpace = container.getElementsByClassName('am-space')[0]
  expect(amSpace).toHaveClass(`${classPrefix}-align-${align}`)
})

test('renders with block', () => {
  const { container } = render(
    <Space block>
      <div>block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const amSpace = container.getElementsByClassName('am-space')[0]
  expect(amSpace).toHaveClass(`${classPrefix}-block`)
})
