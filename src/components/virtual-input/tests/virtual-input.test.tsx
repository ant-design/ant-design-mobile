import React, { createRef } from 'react'
import { render, fireEvent, act, screen, waitFor } from 'testing'
import NumberKeyboard from '../../number-keyboard'
import { VirtualInput, VirtualInputRef } from '../virtual-input'

const classPrefix = 'adm-virtual-input'

describe('VirtualInput', () => {
  test('ref should be defined', async () => {
    const ref = createRef<VirtualInputRef>()
    render(<VirtualInput ref={ref} />)
    expect(ref.current).toBeDefined()
    expect(ref.current?.focus).toBeDefined()
    expect(ref.current?.blur).toBeDefined()
  })

  test('focus and blur', async () => {
    render(<VirtualInput data-testid='virtualInput' clearable value='abc' />)
    fireEvent.focus(screen.getByTestId('virtualInput'))
    expect(document.querySelector(`.${classPrefix}-caret`)).toBeInTheDocument()
    fireEvent.blur(screen.getByTestId('virtualInput'))
    expect(
      document.querySelector(`.${classPrefix}-caret`)
    ).not.toBeInTheDocument()
  })

  test('ref should works', async () => {
    const ref = React.createRef<VirtualInputRef>()
    render(<VirtualInput ref={ref} clearable value='abc' />)
    act(() => {
      ref.current?.focus()
    })
    expect(document.querySelector(`.${classPrefix}-caret`)).toBeInTheDocument()
    act(() => {
      ref.current?.blur()
    })
    expect(
      document.querySelector(`.${classPrefix}-caret`)
    ).not.toBeInTheDocument()
  })

  test('placeholder', async () => {
    render(<VirtualInput placeholder='Placeholder' />)
    expect(screen.getByText('Placeholder')).toBeInTheDocument()
  })

  test('clear', async () => {
    const Wrapper = () => {
      const [value, setValue] = React.useState('Value')
      return (
        <VirtualInput
          data-testid='virtualInput'
          clearable
          value={value}
          onChange={setValue}
        />
      )
    }
    render(<Wrapper />)
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      'Value'
    )
    fireEvent.focus(screen.getByTestId('virtualInput'))
    expect(document.querySelector(`.${classPrefix}-clear`)).toBeInTheDocument()
    fireEvent.click(document.querySelector(`.${classPrefix}-clear`) as any)
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      ''
    )
  })

  test('keyboard', async () => {
    const KeyBoardClassPrefix = 'adm-number-keyboard'
    render(
      <VirtualInput
        data-testid='virtualInput'
        clearable
        keyboard={<NumberKeyboard title='title' />}
      />
    )
    fireEvent.focus(screen.getByTestId('virtualInput'))

    await waitFor(() => {
      expect(
        document.querySelector(`.${KeyBoardClassPrefix}-popup`)
      ).toBeVisible()
    })
    fireEvent.touchEnd(screen.getByText('0'))
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '0'
    )
    fireEvent.touchEnd(screen.getByText('1'))
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '01'
    )
    fireEvent.touchEnd(screen.getByTitle('BACKSPACE'))
    expect(
      document.querySelector(`.${classPrefix}-content`)
    ).not.toHaveTextContent('01')
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '0'
    )
    expect(screen.getByTitle('CLOSE')).toBeInTheDocument()
    fireEvent.click(screen.getByTitle('CLOSE'))
    fireEvent.blur(screen.getByTestId('virtualInput'))
    await waitFor(() => {
      expect(
        document.querySelector(`.${KeyBoardClassPrefix}-popup`)
      ).not.toBeVisible()
    })
  })
})
