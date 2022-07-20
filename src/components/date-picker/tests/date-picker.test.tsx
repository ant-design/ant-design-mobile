import {
  render,
  testA11y,
  fireEvent,
  waitFor,
  screen,
  sleep,
  act,
  waitForElementToBeRemoved,
} from 'testing'
import * as React from 'react'
import DatePicker from '../'
import dayjs from 'dayjs'
import Button from '../../button'

const classPrefix = `adm-picker`

const now = new Date()

describe('DatePicker', () => {
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

  test('precision week', async () => {
    const today = new Date()
    const fn = jest.fn()
    const { getByText } = render(
      <DatePicker
        visible
        precision='week-day'
        value={now}
        onConfirm={val => {
          fn(val.toDateString())
        }}
      />
    )

    expect(
      document.body.querySelectorAll(`.${classPrefix}-view-column`).length
    ).toBe(3)
    await waitFor(() => {
      fireEvent.click(getByText('确定'))
    })
    expect(fn.mock.calls[0][0]).toEqual(today.toDateString())
  })

  test('test imperative call', async () => {
    const today = new Date()
    const fn = jest.fn()
    const onConfirm = jest.fn()
    const onClick = async () => {
      const value = await DatePicker.prompt({
        defaultValue: now,
        onConfirm,
      })
      fn(value ? value.toDateString() : null)
    }

    render(<Button onClick={onClick}>DatePicker</Button>)
    const button = screen.getByText('DatePicker')
    fireEvent.click(button)
    const cancel = await screen.findByText('取消')
    const popup = document.querySelectorAll('.adm-popup')[0]
    await act(() => sleep(0))
    fireEvent.click(cancel)
    await waitForElementToBeRemoved(popup)
    expect(fn.mock.calls[0][0]).toBeNull()

    fireEvent.click(button)
    const confirm = await screen.findByText('确定')
    const popup2 = document.querySelectorAll('.adm-popup')[0]
    await act(() => sleep(0))
    fireEvent.click(confirm)
    await waitForElementToBeRemoved(popup2)
    expect(fn.mock.calls[1][0]).toEqual(today.toDateString())
    expect(onConfirm).toBeCalled()
  })
})
