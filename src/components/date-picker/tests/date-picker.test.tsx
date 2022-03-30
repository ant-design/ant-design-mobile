import { render, testA11y, fireEvent, waitFor } from 'testing'
import * as React from 'react'
import DatePicker from '../'
import dayjs from 'dayjs'

const classPrefix = `adm-picker`

const mockStyleHtml = `
<style>
  .adm-picker-view-column {
    --item-height: 34px;
  }
</style>
`

const now = new Date()

describe('DatePicker', () => {
  beforeAll(() => {
    document.head.innerHTML += mockStyleHtml
  })

  test('passes a11y test', async () => {
    await waitFor(() => testA11y(<DatePicker />))
  })

  test('renders basic', async () => {
    const fn = jest.fn()
    const { getByText } = render(
      <DatePicker
        visible
        defaultValue={new Date(1603248738000)}
        onConfirm={val => {
          fn(val.toDateString())
        }}
      />
    )
    await waitFor(() => {
      fireEvent.click(getByText('确定'))
    })
    expect(fn).toBeCalled()
    expect(fn.mock.calls[0][0]).toContain('Wed Oct 21 2020')
  })

  test('defaultValue out of bound', async () => {
    const tomorrow = dayjs(now).add(1, 'day').toDate()
    const fn = jest.fn()

    const { getByText } = render(
      <DatePicker
        visible
        defaultValue={now}
        min={tomorrow}
        onConfirm={val => {
          fn(val.toDateString())
        }}
      />
    )

    await waitFor(() => {
      fireEvent.click(getByText('确定'))
    })

    expect(fn.mock.calls[0][0]).toBe(tomorrow.toDateString())
  })

  test('should pick today without defaultValue', async () => {
    const fn = jest.fn()

    const { getByText } = render(
      <DatePicker
        visible
        onConfirm={val => {
          fn(val.toDateString())
        }}
      />
    )

    await waitFor(() => {
      fireEvent.click(getByText('确定'))
    })

    expect(fn.mock.calls[0][0]).toBe(now.toDateString())
  })

  test('precision minute', async () => {
    const fn = jest.fn()
    const { getByText } = render(
      <DatePicker
        visible
        precision='minute'
        value={now}
        onConfirm={val => {
          fn(val)
        }}
      />
    )

    expect(
      document.body.querySelectorAll(`.${classPrefix}-view-column`).length
    ).toBe(5)

    await waitFor(() => {
      fireEvent.click(getByText('确定'))
    })

    const confirmedDay = dayjs(fn.mock.calls[0][0])
    const formatTemplate = 'YYYY-MM-DD HH:mm'
    expect(confirmedDay.format(formatTemplate)).toBe(
      dayjs(now).format(formatTemplate)
    )
  })
})
