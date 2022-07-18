import React, { createRef } from 'react'
import {
  render,
  testA11y,
  fireEvent,
  screen,
  waitForElementToBeRemoved,
  userEvent,
  act,
} from 'testing'
import SearchBar, { SearchBarRef } from '..'

const classPrefix = `adm-search-bar`

describe('adm-search-bar', () => {
  test('a11y', async () => {
    await testA11y(<SearchBar />)
  })

  test('basic usage', () => {
    const placeholder = 'search bar placeholder'
    render(<SearchBar placeholder={placeholder} />)
    const input = screen.getByPlaceholderText(placeholder)
    expect(input).toBeInTheDocument()

    fireEvent.focus(input)
    expect(document.querySelector(`.${classPrefix}`)).toHaveClass(
      `${classPrefix}-active`
    )
  })

  test('show cancel button when `showCancelButton` is true and focused', () => {
    const onCancel = jest.fn()
    render(<SearchBar showCancelButton onCancel={onCancel} />)
    const input = screen.getByRole('searchbox')
    fireEvent.focus(input)
    const cancel = screen.getByText('取消')
    expect(cancel).toBeInTheDocument()
    fireEvent.click(cancel)
    waitForElementToBeRemoved(cancel)
    expect(onCancel).toBeCalled()
  })

  test('show cancel button when `showCancelButton` is function', () => {
    render(<SearchBar showCancelButton={() => true} />)
    const cancel = screen.getByText('取消')
    expect(cancel).toBeInTheDocument()
    fireEvent.click(cancel)
    expect(cancel).toBeInTheDocument()
  })

  test('not clear on cancel', async () => {
    render(<SearchBar showCancelButton />)
    const input = screen.getByRole('searchbox')
    fireEvent.focus(input)
    await userEvent.type(input, '12')
    fireEvent.click(screen.getByText('取消'))
    expect(input).toHaveValue('')
  })

  test('onSearch should be called', async () => {
    const onSearch = jest.fn()
    render(<SearchBar onSearch={onSearch} />)
    const input = screen.getByRole('searchbox')
    await userEvent.type(input, '12{enter}')
    expect(onSearch).toBeCalledWith('12')
  })

  test('ref', async () => {
    const ref = createRef<SearchBarRef>()
    const onFocus = jest.fn()
    const onBlur = jest.fn()
    render(<SearchBar ref={ref} onFocus={onFocus} onBlur={onBlur} />)
    const input = screen.getByRole('searchbox')
    expect(ref.current?.nativeElement).toBeDefined()

    act(() => {
      ref.current?.focus()
    })
    expect(input).toHaveFocus()
    expect(onFocus).toBeCalled()

    await userEvent.type(input, '12')
    act(() => {
      ref.current?.clear()
    })
    expect(input).toHaveValue('')

    act(() => {
      ref.current?.blur()
    })
    expect(input).not.toHaveFocus()
    expect(onBlur).toBeCalled()
  })
})
