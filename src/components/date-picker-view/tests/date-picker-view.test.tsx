import { render, testA11y, fireEvent, screen, act } from 'testing'
import React from 'react'
import DatePickerView from '../'

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
})
