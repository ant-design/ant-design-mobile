import { render, testA11y, fireEvent, waitFor } from 'testing'
import * as React from 'react'
import DatePicker from '../'

it('passes a11y test', async () => {
  await testA11y(<DatePicker />)
})

test('renders basic', async () => {
  const fn = jest.fn()
  const { getByText } = render(
    <DatePicker
      visible
      defaultValue={new Date(1603248738000)}
      onConfirm={val => {
        fn(val.toDateString())
      }}
    />
  )
  await waitFor(() => {
    fireEvent.click(getByText('确定'))
  })
  expect(fn).toBeCalled()
  expect(fn.mock.calls[0][0]).toContain('Wed Oct 21 2020')
})
