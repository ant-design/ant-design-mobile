import * as React from 'react'
import { render, testA11y } from 'testing'
import Badge from '../'

describe('Badge', () => {
  test('passes a11y test', async () => {
    await testA11y(<Badge>test</Badge>)
  })

  test('render without content', () => {
    const renderer = render(<Badge content={123} data-testid='test-badge' />)
    const element = renderer.getByTestId('test-badge')
    expect(element).toHaveClass('adm-badge')
    expect(element).toMatchSnapshot()
  })

  test('render with content', () => {
    const { container } = render(<Badge content='新'>text</Badge>)
    expect(container).toMatchSnapshot()
  })

  test('renders with color', () => {
    const { container } = render(
      <Badge color='#108ee9' content='新'>
        text
      </Badge>
    )
    expect(container).toMatchSnapshot()
  })
})
