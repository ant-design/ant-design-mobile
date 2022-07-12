import React, { createRef } from 'react'
import { render, fireEvent, act, userEvent, waitFor, screen } from 'testing'
import Input from '..'
import { InputRef } from '../input'

jest.mock('../../../utils/validate', () => ({
  isIOS: function () {
    return true
  },
}))
const classPrefix = `adm-input`

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

  test('the clear button should works', async () => {
    const { container } = render(<Input clearable defaultValue={'testValue'} />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(
      container.querySelector(`.${classPrefix}-clear`)
    ).not.toBeInTheDocument()
    fireEvent.focus(input)
    const clearBtn = container.querySelector(`.${classPrefix}-clear`)
    expect(clearBtn).toBeInTheDocument()
    fireEvent.click(clearBtn as HTMLElement)
    expect(input.value).toBe('')
  })

  test('should works with `onlyShowClearWhenFocus`', async () => {
    const { unmount } = render(
      <Input
        clearable
        onlyShowClearWhenFocus={false}
        defaultValue={'testValue'}
      />
    )
    expect(document.querySelector(`.${classPrefix}-clear`)).toBeInTheDocument()
    unmount()
    render(
      <Input clearable onlyShowClearWhenFocus defaultValue={'testValue'} />
    )
    expect(
      document.querySelector(`.${classPrefix}-clear`)
    ).not.toBeInTheDocument()
  })

  test('should works with composition', async () => {
    const onCompositionStart = jest.fn()
    const onCompositionEnd = jest.fn()
    render(
      <Input
        clearable
        defaultValue={'testValue'}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
      />
    )
    const input = screen.getByRole('textbox') as HTMLInputElement
    act(() => {
      input.focus()
    })
    expect(input).toHaveFocus()
    fireEvent.compositionStart(input)
    expect(onCompositionStart).toBeCalledTimes(1)
    fireEvent.compositionEnd(input)
    expect(onCompositionEnd).toBeCalledTimes(1)
    fireEvent.compositionStart(input)
    expect(onCompositionStart).toBeCalledTimes(2)

    const clearBtn = document.querySelector(
      `.${classPrefix}-clear`
    ) as HTMLElement
    expect(clearBtn).toBeInTheDocument()
    fireEvent.click(clearBtn)
    expect(input).not.toHaveFocus()
  })

  test('should work with `type="number"`', async () => {
    const ref = React.createRef<InputRef>()
    render(
      <Input
        ref={ref}
        clearable
        type='number'
        defaultValue=''
        min={3}
        max={100}
      />
    )
    const input = ref.current?.nativeElement as HTMLInputElement
    expect(ref.current).toBeDefined()
    expect(ref.current?.nativeElement).toBeInTheDocument()

    userEvent.type(input, '12')
    await waitFor(() => {
      expect(input.value).toBe('12')
    })
    fireEvent.blur(input)
    await waitFor(() => {
      expect(input.value).toBe('12')
    })

    act(() => {
      ref.current?.clear()
    })
    userEvent.type(input, '123')
    await waitFor(() => {
      expect(input.value).toBe('123')
    })
    act(() => {
      ref.current?.blur()
    })
    await waitFor(() => {
      expect(input.value).toBe('100')
    })

    act(() => {
      ref.current?.clear()
    })
    userEvent.type(input, '1')
    await waitFor(() => {
      expect(input.value).toBe('1')
    })
    act(() => {
      ref.current?.blur()
    })
    await waitFor(() => {
      expect(input.value).toBe('3')
    })
  })

  test('should works with `onEnterPress`', async () => {
    const onEnterPress = jest.fn()
    render(<Input defaultValue={'testValue'} onEnterPress={onEnterPress} />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input).toBeInTheDocument()
    act(() => {
      input.focus()
    })
    fireEvent.keyDown(input, { code: 'Enter' })
    expect(onEnterPress).toBeCalledTimes(1)
    fireEvent.keyUp(input, { code: 'Enter' })

    fireEvent.keyDown(input, { keyCode: 13 })
    expect(onEnterPress).toBeCalledTimes(2)
    fireEvent.keyUp(input, { keyCode: 13 })

    fireEvent.keyDown(input, { keyCode: 14 })
    expect(onEnterPress).toBeCalledTimes(2)
    fireEvent.keyUp(input, { keyCode: 14 })
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
    act(() => {
      ref.current?.clear()
    })
    expect(ref.current?.nativeElement?.value).toBe('')
  })
})
