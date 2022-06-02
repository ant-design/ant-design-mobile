import React, { createRef } from 'react'
import { render, sleep } from 'testing'
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

  test('should works useImperativeHandle', async () => {
    const ref = createRef<InputRef>()
    const onFocus = jest.fn()
    const onBlur = jest.fn()
    render(
      <Input
        defaultValue={'testValue'}
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
    ref.current?.focus()
    expect(onFocus).toBeCalledTimes(1)
    ref.current?.blur()
    expect(onBlur).toBeCalledTimes(1)
    ref.current?.clear()
    await sleep(100)
    expect(ref.current?.nativeElement?.value).toEqual('')
  })
})
