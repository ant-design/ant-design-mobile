import * as React from 'react'
import { render, testA11y } from 'testing'
import Badge from '../'

const classPrefix = `adm-badge`

it('passes a11y test', async () => {
  await testA11y(<Badge>test</Badge>)
})

test('renders with content', () => {
  const { getByText } = render(<Badge content='新'>text</Badge>)
  expect(getByText('新')).toHaveClass(`${classPrefix}-fixed`)
})

test('renders with color', () => {
  const { getByText } = render(
    <Badge color='#108ee9' content='新'>
      text
    </Badge>
  )
  expect(getByText('新')).toHaveStyle({
    backgroundColor: 'rgb(16, 142, 233)',
  })
})
