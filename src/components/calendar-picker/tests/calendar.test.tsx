import React from 'react'
import { render, testA11y, fireEvent } from 'testing'
import Calendar from '..'
import MockDate from 'mockdate'

const classPrefix = `adm-calendar-view`

// mock today
MockDate.set(new Date('2023-05-22'))

const mixDate: Date = new Date('2023-05-01')
const maxDate: Date = new Date('2023-05-31')
const singleDate: Date = new Date('2023-05-03')

describe('Calendar', () => {
  test('a11y', async () => {
    await testA11y(<Calendar />)
  })

  test('single mode', async () => {
    const fn = jest.fn()
    const { container, getAllByText } = render(
      <Calendar
        visible={true}
        selectionMode='single'
        defaultValue={singleDate}
        min={mixDate}
        max={maxDate}
        onChange={fn}
      />
    )

    expect(container).toMatchSnapshot()
    const dateEl = getAllByText(15)[0]
    fireEvent.click(dateEl)
    expect(dateEl.parentElement).toHaveClass(`${classPrefix}-cell-selected`)
    expect(fn).toBeCalled()
  })
})
