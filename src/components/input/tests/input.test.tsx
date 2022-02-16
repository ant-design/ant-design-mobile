import React from 'react'
import { fireEvent, render, testA11y, userEvent } from 'testing'
import Input from '..'

describe('Input', () => {
  test('should works with `value={null}`', async () => {
    console.error = jest.fn()
    const renderer = render(<Input value={null as any} />)
    expect(renderer.container).toMatchSnapshot()
    expect(renderer.container.getElementsByTagName('input').length).toBe(1)
    expect(console.error).toBeCalled()
  })
})
