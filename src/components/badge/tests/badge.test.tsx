import * as React from 'react'
import { render, testA11y } from 'testing'
import Badge from '../'
import ConfigProvider from '../../config-provider'

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

  test('test wrapperClassName & wrapperStyle', () => {
    const { getByTestId } = render(
      <Badge
        color='#108ee9'
        content='新'
        wrapperClassName='test'
        data-testid='test-badge-wrap'
        wrapperStyle={{ color: 'red' }}
      >
        text
      </Badge>
    )
    const element = getByTestId('test-badge-wrap')
    expect(element.parentNode).toHaveClass('test')
    expect(element.parentNode).toHaveStyle('color: red')
  })

  test('should apply custom prefixCls(component)', () => {
    const { container } = render(
      <ConfigProvider prefixCls='config-prefix'>
        <Badge color='#108ee9' content='新' prefixCls='component-prefix'>
          text
        </Badge>
      </ConfigProvider>
    )
    expect(container.querySelector('.component-prefix')).toBeTruthy()
    expect(container.querySelector('.config-prefix-badge')).toBeFalsy()
    expect(container).toMatchSnapshot()
  })

  test('should apply custom prefixCls(ConfigProvider)', () => {
    const { container } = render(
      <ConfigProvider prefixCls='config-prefix'>
        <Badge color='#108ee9' content='新'>
          text
        </Badge>
      </ConfigProvider>
    )
    expect(container.querySelector('.config-prefix-badge')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
