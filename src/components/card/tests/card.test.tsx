import * as React from 'react'
import { fireEvent, render, testA11y, waitFor } from 'testing'
import { AntDesignOutlined, RightOutlined } from '@ant-design/icons'
import Card from '../'

const classPrefix = `am-card`

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
          <AntDesignOutlined style={{ marginRight: '4px', color: '#1677ff' }} />
          卡片标题
        </div>
      }
      extra={<RightOutlined />}
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
