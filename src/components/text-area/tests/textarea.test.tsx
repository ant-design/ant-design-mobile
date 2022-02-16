import React from 'react'
import { render } from 'testing'
import TextArea from '..'

describe('TextArea', () => {
  test('should works with `value={null}`', async () => {
    console.error = jest.fn()
    const renderer = render(<TextArea value={null as any} />)
    expect(renderer.container).toMatchSnapshot()
    expect(renderer.container.getElementsByTagName('textarea').length).toBe(1)
    expect(console.error).toBeCalled()
  })
})
