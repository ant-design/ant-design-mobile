import React from 'react'
import { render, screen } from 'testing'
import ConfigProvider from '../../config-provider'
import { useResultIcon } from '../use-result-icon'

const ResultIcon = (props: any) => {
  const icon = useResultIcon(props.status)
  return <div>{icon}</div>
}

describe('useResultIcon', () => {
  test('renders with success status', () => {
    render(<ResultIcon status='success' />)
    expect(document.querySelector('.antd-mobile-icon')).toBeTruthy()
  })
  test('renders with error status', () => {
    render(<ResultIcon status='error' />)
    expect(document.querySelector('.antd-mobile-icon')).toBeTruthy()
  })
  test('renders with info status', () => {
    render(<ResultIcon status='info' />)
    expect(document.querySelector('.antd-mobile-icon')).toBeTruthy()
  })
  test('renders with waiting status', () => {
    render(<ResultIcon status='waiting' />)
    expect(document.querySelector('.antd-mobile-icon')).toBeTruthy()
  })
  test('renders with warning status', () => {
    render(<ResultIcon status='warning' />)
    expect(document.querySelector('.antd-mobile-icon')).toBeTruthy()
  })
  test('renders with none status', () => {
    render(<ResultIcon />)
    expect(document.querySelector('.antd-mobile-icon')).toBeFalsy()
  })
  test('renders with context', () => {
    render(
      <ConfigProvider result={{ successIcon: 'foobar' }}>
        <ResultIcon status='success' />
      </ConfigProvider>
    )
    expect(screen.getByText('foobar')).toBeTruthy()
  })
})
