import React, { useState } from 'react'
import {
  render,
  testA11y,
  fireEvent,
  waitFor,
  actSleep,
  screen,
  act,
} from 'testing'
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
      const [value, setValue] = useState<(string | null)[]>(['Mon', 'am'])
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
    fireEvent.click(screen.getByText('change'))
    await waitFor(() => expect(wheelEl).toHaveStyle('transform: none'))
  })
})
