import React, { useState } from 'react'
import { render, testA11y, fireEvent, waitFor, createEvent } from 'testing'
import PickerView from '../'
import { basicColumns } from '../demos/columns-data'
import { patchCreateEvent } from '../../../tests/gesture/utils'

const classPrefix = `adm-picker-view`

const mockStyleHtml = `
<style>
  .adm-picker-view-column {
    --item-height: 34px;
  }
</style>
`

patchCreateEvent(createEvent)

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

    const { getByTestId } = await render(<App />)

    const wheelEl = document.body.querySelectorAll(`.${classPrefix}-column`)[0]

    fireEvent.pointerDown(wheelEl, {
      pointerId: 1,
      clientX: 0,
      clientY: 0,
      buttons: 1,
    })
    fireEvent.pointerMove(wheelEl, {
      pointerId: 1,
      clientX: 10,
      clientY: -100,
      buttons: 1,
    })
    fireEvent.pointerUp(wheelEl, { pointerId: 1 })

    await waitFor(() => {
      expect(getByTestId('res')).toHaveTextContent(
        JSON.stringify(['Thur', 'am'])
      )
    })
  })
})
