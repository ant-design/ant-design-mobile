import React, { useState } from 'react'
import { render, testA11y, fireEvent, waitFor, actSleep } from 'testing'
import CascadePickerView from '..'
import { options } from '../demos/options-data'

const classPrefix = `adm-picker-view`

describe('CascadePickerView', () => {
  test('a11y', async () => {
    await waitFor(() => testA11y(<CascadePickerView options={options} />))
  })

  test('controlled mode', async () => {
    const App = () => {
      const [value, setValue] = useState<(string | null)[]>(['浙江', '杭州'])
      return (
        <>
          <CascadePickerView
            options={options}
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
    expect(getByTestId('res')).toHaveTextContent(
      JSON.stringify(['江苏', '南京'])
    )
  })
})
