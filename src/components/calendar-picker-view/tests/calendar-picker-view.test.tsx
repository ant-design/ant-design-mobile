import dayjs from 'dayjs'
import MockDate from 'mockdate'
import React, { useRef } from 'react'
import { fireEvent, render, testA11y } from 'testing'
import CalendarPickerView, { CalendarPickerViewRef } from '..'
import { convertPageToDayjs } from '../convert'

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

  test('jumpTo expands rendering range', () => {
    const App = () => {
      const ref = useRef<CalendarPickerViewRef>(null)
      return (
        <>
          <button
            onClick={() => {
              ref.current?.jumpTo({ year: 2021, month: 1 })
            }}
          >
            jumpToPast
          </button>
          <button
            onClick={() => {
              ref.current?.jumpTo({ year: 2026, month: 12 })
            }}
          >
            jumpToFuture
          </button>
          <CalendarPickerView ref={ref} selectionMode='single' />
        </>
      )
    }
    const { container, getByText } = render(<App />)

    // defaultMin starts at today (2023-05), jumpTo 2021-01 resets window around target
    fireEvent.click(getByText('jumpToPast'))
    expect(
      container.querySelector('[data-year-month="2021-1"]')
    ).toBeInTheDocument()

    // jumpToFuture 2026-12 resets window, 2021-1 should no longer be rendered
    fireEvent.click(getByText('jumpToFuture'))
    expect(
      container.querySelector('[data-year-month="2026-12"]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[data-year-month="2021-1"]')
    ).not.toBeInTheDocument()
  })

  test('jumpTo keeps selected date in rendering range', () => {
    const App = () => {
      const ref = useRef<CalendarPickerViewRef>(null)
      return (
        <>
          <button
            onClick={() => {
              ref.current?.jumpTo({ year: 2021, month: 1 })
            }}
          >
            jumpToPast
          </button>
          <CalendarPickerView
            ref={ref}
            selectionMode='single'
            defaultValue={new Date(2023, 4, 15)}
          />
        </>
      )
    }
    const { container, getByText } = render(<App />)

    // Selected date is 2023-05, jumpTo 2021-01 should NOT keep 2023-05 rendered
    fireEvent.click(getByText('jumpToPast'))
    expect(
      container.querySelector('[data-year-month="2021-1"]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[data-year-month="2023-5"]')
    ).not.toBeInTheDocument()
  })

  test('jumpTo clamps to min/max when bounds are set', () => {
    const App = () => {
      const ref = useRef<CalendarPickerViewRef>(null)
      return (
        <>
          <button
            onClick={() => {
              ref.current?.jumpTo({ year: 2020, month: 1 })
            }}
          >
            jumpBeforeMin
          </button>
          <button
            onClick={() => {
              ref.current?.jumpTo({ year: 2025, month: 6 })
            }}
          >
            jumpAfterMax
          </button>
          <CalendarPickerView
            ref={ref}
            selectionMode='single'
            min={new Date(2023, 0)}
            max={new Date(2023, 11, 31)}
          />
        </>
      )
    }
    const { container, getByText } = render(<App />)

    // jumpTo before min should clamp to min month (2023-01)
    fireEvent.click(getByText('jumpBeforeMin'))
    expect(
      container.querySelector('[data-year-month="2023-1"]')
    ).toBeInTheDocument()

    // jumpTo after max should clamp to max month (2023-12)
    fireEvent.click(getByText('jumpAfterMax'))
    expect(
      container.querySelector('[data-year-month="2023-12"]')
    ).toBeInTheDocument()
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

  test('convertPageToDayjs does not roll over to the next month on the 31st', () => {
    // Regression: building the dayjs with year/month before pinning the day
    // could turn Feb 1 into Mar 1 when today falls on the 31st.
    MockDate.set(new Date('2023-01-31'))
    expect(
      convertPageToDayjs({ year: 2023, month: 2 }).format('YYYY-MM-DD')
    ).toBe('2023-02-01')
    MockDate.set(new Date('2023-03-31'))
    expect(
      convertPageToDayjs({ year: 2023, month: 2 }).format('YYYY-MM-DD')
    ).toBe('2023-02-01')
    // restore the shared "today" mock for the rest of the suite
    MockDate.set(new Date('2023-05-22'))
  })
})
