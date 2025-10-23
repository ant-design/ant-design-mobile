import React from 'react'
import { render, testA11y } from 'testing'
import Avatar from '..'
import ConfigProvider from '../../config-provider'

const demoImage =
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'

describe('Avatar', () => {
  test('a11y', async () => {
    await testA11y(<Avatar src={demoImage} />)
  })

  test('default image', () => {
    render(<Avatar src='/404' />)
    expect(document.querySelectorAll('.adm-avatar-fallback')[0]).toBeVisible()
  })

  test('empty src should show fallback', () => {
    render(<Avatar src='' />)
    const avatar = document.querySelector('.adm-avatar')
    expect(avatar).toBeVisible()
    const img = avatar?.querySelector('img')
    expect(img?.getAttribute('src')).toBeFalsy()
    expect(document.querySelectorAll('.adm-avatar-fallback')[0]).toBeVisible()
  })

  test('whitespace src should show fallback', () => {
    render(<Avatar src={'   '} />)
    expect(document.querySelectorAll('.adm-avatar-fallback')[0]).toBeVisible()
  })

  test('should apply custom prefixCls', () => {
    const { container } = render(
      <ConfigProvider prefixCls='config-prefix'>
        <Avatar src={demoImage} prefixCls='component-prefix' />
      </ConfigProvider>
    )
    expect(container.querySelector('.component-prefix')).toBeTruthy()
    expect(container.querySelector('.config-prefix-avatar')).toBeFalsy()
    expect(container).toMatchSnapshot()
  })

  test('should apply custom prefixCls', () => {
    const { container } = render(
      <ConfigProvider prefixCls='config-prefix'>
        <Avatar src={demoImage} />
      </ConfigProvider>
    )
    expect(container.querySelector('.config-prefix-avatar')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
