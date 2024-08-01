import React from 'react'
import { fireEvent, render, screen, testA11y } from 'testing'
import Alert from '..'

describe('Avatar', () => {
  test('a11y', async () => {
    await testA11y(<Alert />)
  })

  test('show content', () => {
    render(<Alert>foobar</Alert>)
    expect(screen.getByText('foobar')).toBeVisible()
  })

  test('info alert icon', () => {
    render(
      <Alert showIcon type='info'>
        foobar
      </Alert>
    )
    expect(
      document.querySelector('.adm-alert-info .antd-mobile-icon')
    ).toBeVisible()
  })

  test('success alert icon', () => {
    render(
      <Alert showIcon type='success'>
        foobar
      </Alert>
    )
    expect(
      document.querySelector('.adm-alert-success .antd-mobile-icon')
    ).toBeVisible()
  })

  test('warning alert icon', () => {
    render(
      <Alert showIcon type='warning'>
        foobar
      </Alert>
    )
    expect(
      document.querySelector('.adm-alert-warning .antd-mobile-icon')
    ).toBeVisible()
  })

  test('error alert icon', () => {
    render(
      <Alert showIcon type='error'>
        foobar
      </Alert>
    )
    expect(
      document.querySelector('.adm-alert-error .antd-mobile-icon')
    ).toBeVisible()
  })

  test('show custom icon', () => {
    render(
      <Alert showIcon icon='my-icon'>
        foobar
      </Alert>
    )
    expect(screen.getByText('my-icon')).toBeVisible()
  })

  test('show extra content', () => {
    render(<Alert extra='my-extra'>foobar</Alert>)
    expect(screen.getByText('my-extra')).toBeVisible()
  })

  test('show close button', () => {
    const callback = jest.fn()
    render(
      <Alert closeable onClose={callback}>
        foobar
      </Alert>
    )
    fireEvent.click(document.querySelector('.adm-alert-close')!)
    expect(callback).toBeCalledTimes(1)
  })
})
