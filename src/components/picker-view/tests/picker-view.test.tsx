import React, { useState } from 'react'
import { render, testA11y, fireEvent, waitFor } from 'testing'
import PickerView from '../'
import { basicColumns } from '../demos/columns-data'

const classPrefix = `adm-picker-view`

const mockStyleHtml = `
<style>
  .adm-picker-view-column {
    --item-height: 34px;
  }
</style>
`

describe('PickerView', () => {
  beforeAll(() => {
    document.head.innerHTML += mockStyleHtml
  })

  test('a11y', async () => {
    await waitFor(() => testA11y(<PickerView columns={basicColumns} />))
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

    const wheelEl = document.body.querySelectorAll(`.${classPrefix}-column`)[0]
    fireEvent.mouseDown(wheelEl, {
      buttons: 1,
    })
    fireEvent.mouseMove(wheelEl, {
      clientY: -100,
      buttons: 1,
    })
    fireEvent.mouseUp(wheelEl)

    await waitFor(() => {
      expect(getByTestId('res')).toHaveTextContent(
        JSON.stringify(['Thur', 'am'])
      )
    })
  })
})
