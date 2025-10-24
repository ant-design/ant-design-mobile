import React from 'react'
import { act, fireEvent, render, screen, testA11y } from 'testing'
import DatePickerView from '../'
import ConfigProvider from '../../config-provider'

const now = new Date()

describe('DatePickerView', () => {
  test('passes a11y test', async () => {
    await act(async () => {
      await testA11y(<DatePickerView />)
    })
  })

  test('till now should be work', async () => {
    const fn = jest.fn()
    render(
      <DatePickerView defaultValue={now} max={now} tillNow onChange={fn} />
    )

    const nowEl = await screen.findByText('至今')
    fireEvent.click(nowEl)
    await act(async () => {
      await Promise.resolve()
    })
    const res = fn.mock.calls[0][0]
    expect(res.toDateString()).toEqual(now.toDateString())
    expect(res.tillNow).toBeTruthy()
  })

  test('should apply custom prefixCls(ConfigProvider)', () => {
    render(
      <ConfigProvider prefixCls='config-prefix'>
        <DatePickerView defaultValue={now} />
      </ConfigProvider>
    )
    expect(document.querySelector('.config-prefix-picker-view')).toBeTruthy()
  })

  test('should apply custom prefixCls(component)', () => {
    render(
      <ConfigProvider prefixCls='config-prefix'>
        <DatePickerView defaultValue={now} prefixCls='component-prefix' />
      </ConfigProvider>
    )
    expect(document.querySelector('.component-prefix')).toBeTruthy()
  })
})
