import MockDate from 'mockdate'
import { spyElementPrototype } from 'rc-util/lib/test/domHook'
import React from 'react'
import { act, fireEvent, render, testA11y } from 'testing'
import CalendarPicker, { CalendarPickerRef } from '..'

const classPrefix = `adm-calendar-picker-view`

// mock today
MockDate.set(new Date('2023-05-22'))

const mixDate: Date = new Date('2023-05-01')
const maxDate: Date = new Date('2023-06-31')
const singleDate: Date = new Date('2023-05-03')

describe('Calendar', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('a11y', async () => {
    jest.useRealTimers()
    await testA11y(<CalendarPicker />)
  })

  test('single mode', async () => {
    const fn = jest.fn()
    const { container, getAllByText } = render(
      <CalendarPicker
        visible={true}
        selectionMode='single'
        defaultValue={singleDate}
        min={mixDate}
        max={maxDate}
        onChange={fn}
      />
    )

    const spyScrollIntoView = jest.fn()
    const spyHTMLElement = spyElementPrototype(
      HTMLElement,
      'scrollIntoView',
      spyScrollIntoView
    )

    act(() => {
      jest.runAllTimers()
    })

    expect(spyScrollIntoView.mock.instances[0]).toHaveAttribute(
      'data-year-month',
      '2023-5'
    )

    expect(container).toMatchSnapshot()
    const dateEl = getAllByText(15)[1]
    fireEvent.click(dateEl)
    expect(dateEl.parentElement).toHaveClass(`${classPrefix}-cell-selected`)
    expect(fn).toBeCalled()

    act(() => {
      jest.runAllTimers()
    })

    /* 选择后 current 更新，滚动到 2023-6 */
    expect(spyScrollIntoView.mock.instances[1]).toHaveAttribute(
      'data-year-month',
      '2023-6'
    )

    spyHTMLElement.mockRestore()
  })

  test('jumpTo should trigger scroll', () => {
    const ref = React.createRef<CalendarPickerRef>()
    render(<CalendarPicker visible ref={ref} />)

    const spyScrollIntoView = jest.fn()
    const spyHTMLElement = spyElementPrototype(
      HTMLElement,
      'scrollIntoView',
      spyScrollIntoView
    )

    // Trigger scroll
    ref.current!.jumpToToday()
    act(() => {
      jest.runAllTimers()
    })
    expect(spyScrollIntoView).toBeCalled()

    spyHTMLElement.mockRestore()
  })
})
