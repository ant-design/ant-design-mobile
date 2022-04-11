import React from 'react'
import { fireEvent, render, testA11y } from 'testing'
import CheckList from '../'

const classPrefix = `adm-check-list`

describe('CheckList', () => {
  test('a11y', async () => {
    await testA11y(
      <CheckList defaultValue={['B']}>
        <CheckList.Item value='A'>A</CheckList.Item>
        <CheckList.Item value='B'>B</CheckList.Item>
      </CheckList>
    )
  })

  test('renders with multiple', async () => {
    const onChange = jest.fn()
    const { getByTestId } = await render(
      <CheckList multiple onChange={onChange}>
        <CheckList.Item value='A' data-testid='A'>
          A
        </CheckList.Item>
        <CheckList.Item value='B' data-testid='B'>
          B
        </CheckList.Item>
      </CheckList>
    )

    fireEvent.click(getByTestId('A'))
    fireEvent.click(getByTestId('B'))

    expect(getByTestId('A')).toHaveClass(`${classPrefix}-item-active`)
    expect(getByTestId('B')).toHaveClass(`${classPrefix}-item-active`)

    expect(onChange.mock.calls[1][0]).toEqual(['A', 'B'])
  })

  test('renders with readonly', async () => {
    const onClick = jest.fn()
    const { container } = await render(
      <CheckList defaultValue={['B']}>
        <CheckList.Item value='A' onClick={onClick}>
          A
        </CheckList.Item>
        <CheckList.Item value='B'>B</CheckList.Item>
      </CheckList>
    )

    expect(container).toMatchSnapshot()
  })

  test('renders with disabled', async () => {
    const onClick = jest.fn()
    const { container } = await render(
      <CheckList>
        <CheckList.Item value='A' onClick={onClick}>
          A
        </CheckList.Item>
        <CheckList.Item value='B'>B</CheckList.Item>
      </CheckList>
    )

    expect(container).toMatchSnapshot()
  })
})
