import React, { createRef } from 'react'
import { render, fireEvent, act } from 'testing'
import TextArea, { TextAreaRef } from '..'

const classPrefix = 'adm-text-area'
const lineHeight = 25

describe('TextArea', () => {
  const originGetComputedStyle = window.getComputedStyle

  beforeAll(() => {
    window.getComputedStyle = el => {
      const style = originGetComputedStyle(el)
      style.lineHeight = `${lineHeight}px`
      return style
    }
  })

  afterAll(() => {
    window.getComputedStyle = originGetComputedStyle
  })

  test('should works with `value={null}`', async () => {
    console.error = jest.fn()
    const renderer = render(<TextArea value={null as any} />)
    expect(renderer.container).toMatchSnapshot()
    expect(renderer.container.getElementsByTagName('textarea').length).toBe(1)
    expect(console.error).toBeCalled()
  })

  test('auto size', () => {
    const minRows = 3
    const maxRows = 5
    const { getByRole } = render(<TextArea autoSize={{ minRows, maxRows }} />)
    const textarea = getByRole('textbox')
    // mock
    Object.defineProperty(textarea, 'scrollHeight', {
      value: lineHeight * 2,
      configurable: true,
    })
    fireEvent.change(textarea, { target: { value: '1' } })
    expect(textarea.style.height).toBe(`${lineHeight * minRows}px`)

    Object.defineProperty(textarea, 'scrollHeight', {
      value: lineHeight * 6,
    })
    fireEvent.change(textarea, { target: { value: '2' } })
    expect(textarea.style.height).toBe(`${lineHeight * maxRows}px`)
  })

  test('show count', () => {
    render(<TextArea defaultValue='abc' showCount />)
    const count = document.querySelectorAll(`.${classPrefix}-count`)[0]
    expect(count).toBeInTheDocument()
    expect(count).toHaveTextContent('3')
  })

  test('limit count', () => {
    const { getByRole } = render(
      <TextArea defaultValue='abc' maxLength={5} showCount />
    )
    const textarea = getByRole('textbox') as HTMLTextAreaElement
    const count = document.querySelectorAll(`.${classPrefix}-count`)[0]
    fireEvent.change(textarea, { target: { value: 'abcdef' } })
    expect(textarea.value).toBe('abcde')
    expect(count).toHaveTextContent('5/5')
  })

  test('should exceed maxLength when use IME', () => {
    const onChange = jest.fn()
    const { getByRole } = render(<TextArea maxLength={1} onChange={onChange} />)
    const textarea = getByRole('textbox')
    fireEvent.compositionStart(textarea)
    fireEvent.change(textarea, { target: { value: 'chuan' } })
    fireEvent.compositionEnd(textarea, { target: { value: '川' } })
    expect(onChange).toHaveBeenLastCalledWith('川')
  })

  test('imperative way', () => {
    const ref = createRef<TextAreaRef>()
    const { getByRole } = render(<TextArea ref={ref} />)
    const textarea = getByRole('textbox') as HTMLTextAreaElement
    ref.current?.focus()
    expect(textarea).toHaveFocus()
    ref.current?.blur()
    expect(textarea).not.toHaveFocus()

    fireEvent.change(textarea, { target: { value: 'abc' } })
    expect(textarea.value).toBe('abc')
    act(() => ref.current?.clear())
    expect(textarea.value).toBe('')
    expect(ref.current?.nativeElement).toBeDefined()
  })

  test('render custom count', () => {
    const { getByText } = render(
      <TextArea
        value='abc'
        maxLength={5}
        showCount={(valueLength, maxLength) => (
          <div>
            ({valueLength},{maxLength})
          </div>
        )}
      />
    )
    expect(getByText('(3,5)')).toBeInTheDocument()
  })
})
