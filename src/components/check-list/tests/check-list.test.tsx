import React from 'react'
import { fireEvent, render, screen, testA11y } from 'testing'
import CheckList from '../'
import ConfigProvider from '../../config-provider'

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
    const { getByTestId } = render(
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
    const { container } = render(
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
    const { container } = render(
      <CheckList>
        <CheckList.Item value='A' onClick={onClick}>
          A
        </CheckList.Item>
        <CheckList.Item value='B'>B</CheckList.Item>
      </CheckList>
    )

    expect(container).toMatchSnapshot()
  })

  test('`extra` props', () => {
    const { getByText } = render(
      <CheckList extra={active => (active ? 'YES' : 'NO')} defaultValue={['A']}>
        <CheckList.Item value='A'>A</CheckList.Item>
        <CheckList.Item value='B'>B</CheckList.Item>
      </CheckList>
    )
    expect(getByText('YES')).toBeVisible()
    expect(getByText('NO')).toBeVisible()
  })

  describe('closeIcon', () => {
    it('default', () => {
      const { baseElement } = render(
        <CheckList defaultValue={['B']}>
          <CheckList.Item value='A'>A</CheckList.Item>
          <CheckList.Item value='B'>B</CheckList.Item>
        </CheckList>
      )
      expect(baseElement.querySelector('.antd-mobile-icon')).toBeTruthy()
    })

    it('props', () => {
      render(
        <CheckList defaultValue={['B']} activeIcon='bamboo'>
          <CheckList.Item value='A'>A</CheckList.Item>
          <CheckList.Item value='B'>B</CheckList.Item>
        </CheckList>
      )
      expect(screen.getByText('bamboo')).toBeVisible()
    })

    it('context', () => {
      render(
        <ConfigProvider checkList={{ activeIcon: 'little' }}>
          <CheckList defaultValue={['B']}>
            <CheckList.Item value='A'>A</CheckList.Item>
            <CheckList.Item value='B'>B</CheckList.Item>
          </CheckList>
        </ConfigProvider>
      )

      expect(screen.getByText('little')).toBeVisible()
    })

    it('props override context', () => {
      render(
        <ConfigProvider checkList={{ activeIcon: 'little' }}>
          <CheckList defaultValue={['B']} activeIcon='bamboo'>
            <CheckList.Item value='A'>A</CheckList.Item>
            <CheckList.Item value='B'>B</CheckList.Item>
          </CheckList>
        </ConfigProvider>
      )

      expect(screen.getByText('bamboo')).toBeVisible()
    })
  })
})
