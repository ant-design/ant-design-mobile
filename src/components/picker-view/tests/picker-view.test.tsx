import React, { useState } from 'react'
import {
  act,
  actSleep,
  fireEvent,
  render,
  screen,
  testA11y,
  waitFor,
} from 'testing'
import type { PickerValue } from '../'
import PickerView from '../'
import { basicColumns } from '../demos/columns-data'

const classPrefix = `adm-picker-view`

describe('PickerView', () => {
  test('a11y', async () => {
    await act(async () => {
      await testA11y(<PickerView columns={basicColumns} />)
    })
  })

  test('controlled mode', async () => {
    const App = () => {
      const [value, setValue] = useState<(string | number | null)[]>([
        'Mon',
        'am',
      ])
      return (
        <>
          <PickerView
            columns={basicColumns}
            value={value}
            onChange={val => {
              setValue(val)
            }}
          />
          <div data-testid='res'>{JSON.stringify(value)}</div>
        </>
      )
    }

    const { getByTestId } = render(<App />)
    const wheelEl = document.body.querySelectorAll(
      `.${classPrefix}-column-wheel`
    )[0]
    fireEvent.mouseDown(wheelEl, {
      buttons: 1,
    })
    fireEvent.mouseMove(wheelEl, {
      clientY: -100,
      buttons: 1,
    })
    fireEvent.mouseUp(wheelEl)
    await actSleep(100)
    expect(getByTestId('res')).toHaveTextContent(JSON.stringify(['Thur', 'am']))
  })

  // https://github.com/ant-design/ant-design-mobile/issues/5426
  test('wheel should scroll to the correct position', async () => {
    const App = () => {
      const [bool, setBool] = useState(true)
      return (
        <>
          <button onClick={() => setBool(!bool)}>change</button>
          <PickerView
            columns={
              bool
                ? [
                    [
                      { label: '1', value: '' },
                      { label: '2', value: '2' },
                      { label: '3', value: '3' },
                    ],
                  ]
                : [
                    [
                      { label: '1', value: '' },
                      { label: '2', value: '2' },
                    ],
                  ]
            }
          />
        </>
      )
    }

    render(<App />)
    const wheelEl = document.body.querySelectorAll(
      `.${classPrefix}-column-wheel`
    )[0]

    const itemList = document.body.querySelectorAll(
      `.${classPrefix}-column-item`
    )

    fireEvent.mouseDown(wheelEl, {
      clientY: 0,
      buttons: 1,
    })
    fireEvent.mouseMove(wheelEl, {
      clientY: -200,
      buttons: 1,
    })
    fireEvent.mouseUp(wheelEl)
    expect(wheelEl).toHaveStyle('transform: translateY(-68px)')
    // 滚到了第3个item
    expect(itemList[2]).toHaveClass(`${classPrefix}-column-item-active`)
    fireEvent.click(screen.getByText('change'))
    await waitFor(() => expect(wheelEl).toHaveStyle('transform: none'))
  })

  test('should handle string/number type mismatch in value', async () => {
    const numericColumns = [
      [
        { label: '2022', value: 2022 },
        { label: '2023', value: 2023 },
        { label: '2024', value: 2024 },
      ],
    ]

    const onChange = jest.fn()

    function App() {
      const [value, setValue] = useState<PickerValue[]>(['2024'])
      return (
        <>
          <PickerView
            columns={numericColumns}
            value={value}
            onChange={(val, extend) => {
              onChange(val, extend)
              setValue(val)
            }}
          />
          <div data-testid='res'>{JSON.stringify(value)}</div>
        </>
      )
    }

    render(<App />)

    await actSleep(50)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith([2022], expect.anything())
  })

  test('should not loop when controlled value is not in columns', async () => {
    const onChange = jest.fn()

    function App() {
      const [value] = useState<PickerValue[]>(['Invalid'])
      return (
        <PickerView columns={basicColumns} value={value} onChange={onChange} />
      )
    }

    render(<App />)
    await actSleep(1200)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(['Mon', 'am'], expect.anything())
  })
})
