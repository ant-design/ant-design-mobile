import React, { createRef } from 'react'
import { fireEvent, render, testA11y, userEvent } from 'testing'
import Input from '..'
import { InputRef } from '../input'

describe('Input', () => {
  test('should works with `value={null}`', async () => {
    console.error = jest.fn()
    const renderer = render(<Input value={null as any} />)
    expect(renderer.container).toMatchSnapshot()
    expect(renderer.container.getElementsByTagName('input').length).toBe(1)
    expect(console.error).toBeCalled()
  })

  test('should works given ref', async () => {
    const ref = createRef<InputRef>()
    render(<Input ref={ref} />)
    expect(ref.current).toBeDefined()
    expect(ref.current?.nativeElement).toBeDefined()
  })
})
