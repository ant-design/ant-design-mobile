import * as React from 'react'
import { fireEvent, render, testA11y, waitFor } from 'testing'
import { AppOutline, RightOutline } from 'antd-mobile-icons'
import Card from '../'

const classPrefix = `adm-card`

it('passes a11y test', async () => {
  await testA11y(<Card>test</Card>)
})

test('renders with title', () => {
  const { getByText } = render(<Card title='title'>Card</Card>)
  expect(getByText('title')).toHaveClass(`${classPrefix}-header-title`)
  expect(getByText('Card')).toHaveClass(`${classPrefix}-body`)
})

test('renders with event', async () => {
  const onBodyClick = jest.fn()
  const onHeaderClick = jest.fn()

  const { getByText } = render(
    <Card
      title={
        <div style={{ fontWeight: 'normal' }}>
          <AppOutline style={{ marginRight: '4px', color: '#1677ff' }} />
          卡片标题
        </div>
      }
      extra={<RightOutline />}
      onBodyClick={onBodyClick}
      onHeaderClick={onHeaderClick}
    >
      Card
    </Card>
  )
  fireEvent.click(getByText('卡片标题'))
  await waitFor(() => {
    expect(onHeaderClick).toBeCalledTimes(1)
  })
  fireEvent.click(getByText('Card'))
  await waitFor(() => {
    expect(onBodyClick).toBeCalledTimes(1)
  })
})
