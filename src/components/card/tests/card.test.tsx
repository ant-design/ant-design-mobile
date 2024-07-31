import { RightOutline } from 'antd-mobile-icons'
import * as React from 'react'
import { fireEvent, render, testA11y, waitFor } from 'testing'
import Card from '../'

const classPrefix = `adm-card`

it('passes a11y test', async () => {
  await testA11y(<Card>test</Card>)
})

test('renders with title', () => {
  const { getByText } = render(<Card title='title'>body</Card>)
  expect(getByText('title')).toHaveClass(`${classPrefix}-header-title`)
  expect(getByText('body')).toHaveClass(`${classPrefix}-body`)
})

test('renders with event', async () => {
  const onBodyClick = jest.fn()
  const onHeaderClick = jest.fn()

  const { getByText } = render(
    <Card
      icon='icon'
      title='title'
      extra={<RightOutline />}
      onBodyClick={onBodyClick}
      onHeaderClick={onHeaderClick}
    >
      body
    </Card>
  )
  fireEvent.click(getByText('title'))
  fireEvent.click(getByText('icon'))
  await waitFor(() => {
    expect(onHeaderClick).toBeCalledTimes(2)
  })
  fireEvent.click(getByText('body'))
  await waitFor(() => {
    expect(onBodyClick).toBeCalledTimes(1)
  })
})

test('renders without children', async () => {
  const { getByTestId } = render(
    <Card title='title' data-testid='test-card-id' />
  )
  expect(getByTestId('test-card-id')).not.toHaveClass(`${classPrefix}-body`)
})
