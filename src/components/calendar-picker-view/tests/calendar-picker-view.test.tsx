import dayjs from 'dayjs'
import MockDate from 'mockdate'
import React, { useRef } from 'react'
import { fireEvent, render, testA11y } from 'testing'
import CalendarPickerView, { CalendarPickerViewRef } from '..'

const classPrefix = `adm-calendar-picker-view`

// mock today
MockDate.set(new Date('2023-05-22'))

const mixDate: Date = new Date('2023-05-01')
const maxDate: Date = new Date('2023-05-31')
const singleDate: Date = new Date('2023-05-03')
const rangeDate: [Date, Date] = [new Date('2023-05-04'), new Date('2023-05-07')]

describe('Calendar', () => {
  test('a11y', async () => {
    await testA11y(<CalendarPickerView />)
  })

  test('single mode', async () => {
    const fn = jest.fn()
    const { container, getAllByText } = render(
      <CalendarPickerView
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

  test('range mode', async () => {
    const fn = jest.fn()
    const { container, getByText } = render(
      <CalendarPickerView
        selectionMode='range'
        min={mixDate}
        max={maxDate}
        defaultValue={rangeDate}
        onChange={fn}
      />
    )

    expect(container).toMatchSnapshot()
    const [startEl, endEl] = [getByText(20), getByText(26)]
    fireEvent.click(startEl)
    fireEvent.click(endEl)
    expect(
      document.querySelectorAll(`.${classPrefix}-cell-selected`).length
    ).toBe(7)
    expect(fn.mock.calls[1][0].map((d: Date) => d.toDateString())).toEqual([
      'Sat May 20 2023',
      'Fri May 26 2023',
    ])
  })

  test('jump to a day', async () => {
    const App = () => {
      const ref = useRef<CalendarPickerViewRef>(null)
      return (
        <>
          <button
            onClick={() => {
              ref.current?.jumpTo({ year: 2021, month: 1 })
            }}
          >
            jumpTo
          </button>
          <button
            onClick={() => {
              ref.current?.jumpToToday()
            }}
          >
            jumpToToday
          </button>
          <CalendarPickerView
            selectionMode='single'
            min={new Date(2020, 11)}
            max={new Date(2021, 2)}
            ref={ref}
          />
        </>
      )
    }
    const { container, getByText } = render(<App />)

    fireEvent.click(getByText('jumpTo'))
    expect(container).toMatchSnapshot()

    fireEvent.click(getByText('jumpToToday'))
    expect(container).toMatchSnapshot()
  })

  test('week start on Monday', async () => {
    const { container } = render(
      <CalendarPickerView min={mixDate} max={maxDate} weekStartsOn='Monday' />
    )
    expect(container).toMatchSnapshot()
  })

  test(`can't allow to clear`, async () => {
    const { getByText } = render(
      <CalendarPickerView
        selectionMode='single'
        min={mixDate}
        max={maxDate}
        allowClear={false}
      />
    )

    const dateEl = getByText(16)
    fireEvent.click(dateEl)
    fireEvent.click(dateEl)
    expect(dateEl.parentElement).toHaveClass(`${classPrefix}-cell-selected`)
  })

  test('custom top', async () => {
    const today = dayjs()
    const { container } = render(
      <CalendarPickerView
        min={mixDate}
        max={maxDate}
        renderTop={date => {
          if (dayjs(date).isSame(today, 'day')) return '今天'
          if (date.getDay() === 0 || date.getDay() === 6) {
            return '周末'
          }
        }}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('custom date', () => {
    render(
      <CalendarPickerView
        min={mixDate}
        max={maxDate}
        renderDate={date => {
          return <div className='custom-cell'>{dayjs(date).date()}</div>
        }}
      />
    )
    expect(document.getElementsByClassName('custom-cell').length).toBe(31)
  })

  test('custom bottom', () => {
    render(
      <CalendarPickerView
        min={mixDate}
        max={maxDate}
        renderDate={date => {
          return <div className='custom-cell'>{dayjs(date).date()}</div>
        }}
      />
    )
    expect(document.getElementsByClassName('custom-cell').length).toBe(31)
  })

  test('title hidden', () => {
    render(<CalendarPickerView title={false} />)

    expect(document.querySelector(`.${classPrefix}-header`)).toBeNull()
  })

  test('renderTop hidden', () => {
    render(<CalendarPickerView renderTop={false} />)

    expect(document.querySelector(`.${classPrefix}-cell-top`)).toBeNull()
  })

  test('renderBottom hidden', () => {
    render(<CalendarPickerView renderBottom={false} />)

    expect(document.querySelector(`.${classPrefix}-cell-bottom`)).toBeNull()
  })

  test('not fill empty cells if unnecessary', () => {
    const { container } = render(
      <CalendarPickerView
        min={new Date('2024-09-01')}
        max={new Date('2024-09-30')}
      />
    )

    expect(container.querySelectorAll(`.${classPrefix}-cell`)).toHaveLength(30)
  })

  test('auto expand month list', () => {
    const { container, rerender } = render(
      <CalendarPickerView value={new Date(2024, 9, 1)} selectionMode='single' />
    )

    const body = container.querySelector(`.${classPrefix}-body`)
    // 默认渲染 2024-10 到 2025-4 七个月
    expect(body?.childNodes.length).toBe(7)

    rerender(
      <CalendarPickerView value={new Date(2024, 8, 1)} selectionMode='single' />
    )

    expect(
      container.querySelector('[data-year-month="2024-9"]')
    ).toBeInTheDocument()

    rerender(
      <CalendarPickerView value={new Date(2025, 7, 1)} selectionMode='single' />
    )

    expect(
      container.querySelector('[data-year-month="2025-8"]')
    ).toBeInTheDocument()
  })
})
