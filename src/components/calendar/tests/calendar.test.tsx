import dayjs from 'dayjs'
import MockDate from 'mockdate'
import React, { useRef, useState } from 'react'
import { fireEvent, render, testA11y } from 'testing'
import Calendar, { CalendarRef } from '..'

const classPrefix = `adm-calendar`

// mock today
MockDate.set(new Date('2022-03-22'))

const singleDate: Date = new Date('2022-03-09')
const rangeDate: [Date, Date] = [new Date('2022-03-09'), new Date('2022-03-21')]

describe('Calendar', () => {
  test('a11y', async () => {
    await testA11y(<Calendar />)
  })

  test('single mode', async () => {
    const fn = jest.fn()
    const { container, getByText } = render(
      <Calendar
        selectionMode='single'
        defaultValue={singleDate}
        onChange={fn}
      />
    )

    expect(container).toMatchSnapshot()
    const dateEl = getByText(15)
    fireEvent.click(dateEl)
    expect(dateEl.parentElement).toHaveClass(`${classPrefix}-cell-selected`)
    expect(fn).toBeCalled()
  })

  test('range mode', async () => {
    const fn = jest.fn()
    const { container, getByText } = render(
      <Calendar selectionMode='range' defaultValue={rangeDate} onChange={fn} />
    )

    expect(container).toMatchSnapshot()
    const [startEl, endEl] = [getByText(20), getByText(26)]
    fireEvent.click(startEl)
    fireEvent.click(endEl)
    expect(
      document.querySelectorAll(`.${classPrefix}-cell-selected`).length
    ).toBe(7)
    expect(fn.mock.calls[1][0].map((d: Date) => d.toDateString())).toEqual([
      'Sun Mar 20 2022',
      'Sat Mar 26 2022',
    ])
  })

  test('controlled mode', async () => {
    const today = dayjs('2022-05-01')

    const App = () => {
      const [val, setVal] = useState<[Date, Date] | null>(() => [
        today.subtract(2, 'day').toDate(),
        today.add(2, 'day').toDate(),
      ])

      return (
        <Calendar
          selectionMode='range'
          value={val}
          onChange={val => {
            setVal(val)
          }}
        />
      )
    }

    const { container, getByText } = render(<App />)
    const [startEl, endEl] = [getByText(8), getByText(15)]
    fireEvent.click(startEl)
    fireEvent.click(endEl)
    expect(container).toMatchSnapshot()
  })

  test('page change', async () => {
    const fn = jest.fn()
    render(<Calendar selectionMode='single' onPageChange={fn} />)

    const btns = document.querySelectorAll(`.${classPrefix}-arrow-button-right`)
    const titleEl = document.querySelector(`.${classPrefix}-title`)
    // month
    fireEvent.click(btns[0])
    expect(titleEl?.innerHTML).toContain('4月')
    expect(fn.mock.calls[0]).toEqual([2022, 4])

    // year
    fireEvent.click(btns[1])
    expect(titleEl?.innerHTML).toContain('2023')
    expect(fn.mock.calls[1]).toEqual([2023, 4])
  })

  test('jump to a day', async () => {
    const App = () => {
      const ref = useRef<CalendarRef>(null)
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
          <Calendar selectionMode='single' ref={ref} />
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
    const { container } = render(<Calendar weekStartsOn='Monday' />)
    expect(container).toMatchSnapshot()
  })

  test(`can't allow to clear`, async () => {
    const { getByText } = render(
      <Calendar selectionMode='single' allowClear={false} />
    )

    const dateEl = getByText(16)
    fireEvent.click(dateEl)
    fireEvent.click(dateEl)
    expect(dateEl.parentElement).toHaveClass(`${classPrefix}-cell-selected`)
  })

  test('custom label', async () => {
    const today = dayjs()
    const { container } = render(
      <Calendar
        renderLabel={date => {
          if (dayjs(date).isSame(today, 'day')) return '今天'
          if (date.getDay() === 0 || date.getDay() === 6) {
            return '周末'
          }
        }}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('custom date render', () => {
    render(
      <Calendar
        renderDate={date => {
          return <div className='custom-cell'>{dayjs(date).date()}</div>
        }}
      />
    )
    expect(document.getElementsByClassName('custom-cell').length).toBe(42)
  })

  test('cellRender', () => {
    const { container } = render(
      <Calendar
        cellRender={(oriNode, { date }) => {
          const day = dayjs(date)
          if (day.date() === 15) {
            return React.cloneElement(oriNode, {
              className: `${oriNode.props.className} special-day`,
            })
          }
          if (day.day() === 0 || day.day() === 6) {
            return React.cloneElement(oriNode, {
              className: `${oriNode.props.className} weekend`,
            })
          }
          return oriNode
        }}
      />
    )

    // 检查特定日期是否有自定义类名
    const specialDayCell = container.querySelector('.special-day')
    expect(specialDayCell).toBeTruthy()
    expect(specialDayCell).toHaveClass('adm-calendar-cell')
    expect(specialDayCell).toHaveClass('special-day')

    // 检查周末日期是否有自定义类名
    const weekendCells = container.querySelectorAll('.weekend')
    expect(weekendCells.length).toBeGreaterThan(0)
    weekendCells.forEach(cell => {
      expect(cell).toHaveClass('adm-calendar-cell')
      expect(cell).toHaveClass('weekend')
    })
  })

  test('cellRender with custom content', () => {
    const { container } = render(
      <Calendar
        cellRender={(oriNode, { date }) => {
          const day = dayjs(date)
          if (day.date() === 1) {
            return (
              <div className='custom-first-day' data-testid='custom-cell'>
                <span>首日</span>
                {oriNode}
              </div>
            )
          }
          return oriNode
        }}
      />
    )

    // 检查自定义内容是否正确渲染
    const customCells = container.querySelectorAll(
      '[data-testid="custom-cell"]'
    )
    expect(customCells.length).toBeGreaterThan(0)
    customCells.forEach(cell => {
      expect(cell).toHaveClass('custom-first-day')
      expect(cell.textContent).toContain('首日')
    })
  })

  test('cellRender without modification', () => {
    const { container } = render(<Calendar cellRender={oriNode => oriNode} />)

    // 确保不修改时正常渲染
    const cells = container.querySelectorAll('.adm-calendar-cell')
    expect(cells.length).toBe(42)
    cells.forEach(cell => {
      expect(cell).toHaveClass('adm-calendar-cell')
    })
  })

  test.each([
    ['prevMonthButton', `.${classPrefix}-arrow-button-month`],
    ['prevYearButton', `.${classPrefix}-arrow-button-year`],
    ['nextMonthButton', `.${classPrefix}-arrow-button-right-month`],
    ['nextYearButton', `.${classPrefix}-arrow-button-right-year`],
  ])('%s disabled', (propName, selector) => {
    const onPageChange = jest.fn()
    const props = { [propName]: null, onPageChange }
    const { container } = render(<Calendar {...props} />)

    // 确保按钮元素不存在
    const button = container.querySelector(selector)
    expect(button).toBeNull()
  })
})
