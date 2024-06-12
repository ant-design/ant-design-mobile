import React, { createRef } from 'react'
import {
  act,
  fireEvent,
  render,
  screen,
  testA11y,
  userEvent,
  waitForElementToBeRemoved,
} from 'testing'
import SearchBar, { SearchBarRef } from '..'
import ConfigProvider from '../../config-provider'

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
    await act(async () => {
      await userEvent.type(input, '12')
    })
    fireEvent.click(screen.getByText('取消'))
    expect(input).toHaveValue('')
  })

  test('onSearch should be called', async () => {
    const onSearch = jest.fn()
    render(<SearchBar onSearch={onSearch} />)
    const input = screen.getByRole('searchbox')
    await act(async () => {
      await userEvent.type(input, '12{enter}')
    })
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

    await act(async () => {
      await userEvent.type(input, '12')
    })

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

  describe('searchIcon', () => {
    it('default', () => {
      const { baseElement } = render(<SearchBar />)
      expect(baseElement.querySelector('.antd-mobile-icon')).toBeTruthy()
    })

    it('legacy', () => {
      render(<SearchBar icon='little' />)
      expect(screen.getByText('little')).toBeVisible()
    })

    it('props', () => {
      render(<SearchBar searchIcon='bamboo' />)
      expect(screen.getByText('bamboo')).toBeVisible()
    })

    it('props override legacy props', () => {
      render(<SearchBar icon='little' searchIcon='bamboo' />)
      expect(screen.getByText('bamboo')).toBeVisible()
    })

    it('context', () => {
      render(
        <ConfigProvider searchBar={{ searchIcon: 'little' }}>
          <SearchBar />
        </ConfigProvider>
      )

      expect(screen.getByText('little')).toBeVisible()
    })

    it('props override context', () => {
      render(
        <ConfigProvider searchBar={{ searchIcon: 'little' }}>
          <SearchBar searchIcon='bamboo' />
        </ConfigProvider>
      )

      expect(screen.getByText('bamboo')).toBeVisible()
    })
  })
})
