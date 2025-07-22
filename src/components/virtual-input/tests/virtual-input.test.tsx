import React, { createRef } from 'react'
import { act, fireEvent, render, screen, waitFor } from 'testing'
import NumberKeyboard from '../../number-keyboard'
import { VirtualInput, VirtualInputRef } from '../virtual-input'

const classPrefix = 'adm-virtual-input'
const TWO_DIGIT_NUMBER_REGEX = /^(([1-9]\d{0,11})|0)(\.\d{0,2}?)?$/

function getSiblingElements(element: Element | null) {
  const prevElements = [],
    nextElements = []
  let current = element?.nextElementSibling
  while (current) {
    nextElements.push(current)
    current = current?.nextElementSibling
  }
  current = element?.previousElementSibling
  while (current) {
    prevElements.push(current)
    current = current?.previousElementSibling
  }
  prevElements.reverse()
  return {
    prevElements,
    nextElements,
  }
}

function clickSiblingElements(
  element: Element | null,
  index: number,
  isLeft: boolean
) {
  const { prevElements, nextElements } = getSiblingElements(element)
  const targetElement =
    prevElements[index] || nextElements[index - prevElements.length]
  if (targetElement) {
    const e = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperties(e, {
      clientX: { value: isLeft ? 102 : 112 },
    })

    const rect = {
      top: 0,
      right: 200,
      bottom: 20,
      left: 100,
      x: 100,
      y: 0,
      width: 20,
      height: 20,
      toJSON: () => {},
    }
    jest.spyOn(targetElement, 'getBoundingClientRect').mockReturnValue(rect)

    targetElement.dispatchEvent(e)
  }
}

function getCaretPosition(element: Element | null) {
  const { prevElements } = getSiblingElements(element)
  return prevElements.length
}

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
    expect(screen.getByTitle('关闭')).toBeInTheDocument()
    fireEvent.click(screen.getByTitle('关闭'))
    fireEvent.blur(screen.getByTestId('virtualInput'))
    await waitFor(() => {
      expect(
        document.querySelector(`.${KeyBoardClassPrefix}-popup`)
      ).not.toBeVisible()
    })
  })

  test('placeholder should not be shown when value is `0`', () => {
    render(<VirtualInput value={0 as any} placeholder='placeholder' />)
    expect(screen.queryByText('placeholder')).toBeNull()
  })

  test('Controlled VirtualInput caret position should changed by click', async () => {
    const KeyBoardClassPrefix = 'adm-number-keyboard'
    const Wrapper = () => {
      const [value, setValue] = React.useState('1234')
      return (
        <VirtualInput
          data-testid='virtualInput'
          clearable
          value={value}
          onChange={setValue}
          keyboard={<NumberKeyboard confirmText='确定' />}
        />
      )
    }
    render(<Wrapper />)
    const input = screen.getByTestId('virtualInput')
    fireEvent.focus(input)

    await waitFor(() => {
      expect(
        document.querySelector(`.${KeyBoardClassPrefix}-popup`)
      ).toBeVisible()
    })

    // click '5' by keyboard，content should be '12345'
    fireEvent.touchEnd(screen.getByText('5'))
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '12345'
    )
    const caretContainer = input.querySelector(
      `.${classPrefix}-caret-container`
    )

    if (caretContainer != null) {
      expect(getCaretPosition(caretContainer)).toBe(5)

      // click '3' right side in inputbox, caret position should be 3
      clickSiblingElements(caretContainer, 2, false)
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(getCaretPosition(caretContainer)).toBe(3)

      // click '9' by keyboard, content should be '123945', caret position should be 4
      fireEvent.touchEnd(screen.getByText('9'))
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('123945')
      expect(getCaretPosition(caretContainer)).toBe(4)

      // click delete by keyboard, content should be '12345', caret position should be 3
      fireEvent.touchEnd(screen.getByTitle('清除'))
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('12345')
      expect(getCaretPosition(caretContainer)).toBe(3)
    }
  })

  test('caret position should changed by click', async () => {
    const KeyBoardClassPrefix = 'adm-number-keyboard'
    const Wrapper = () => {
      return (
        <VirtualInput
          data-testid='virtualInput'
          clearable
          keyboard={<NumberKeyboard confirmText='确定' />}
        />
      )
    }
    render(<Wrapper />)
    const input = screen.getByTestId('virtualInput')
    fireEvent.focus(input)

    await waitFor(() => {
      expect(
        document.querySelector(`.${KeyBoardClassPrefix}-popup`)
      ).toBeVisible()
    })

    // click '1', '2', '3' by keyboard，content should be '123'
    fireEvent.touchEnd(screen.getByText('1'))
    fireEvent.touchEnd(screen.getByText('2'))
    fireEvent.touchEnd(screen.getByText('3'))
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '123'
    )
    const caretContainer = input.querySelector(
      `.${classPrefix}-caret-container`
    )

    if (caretContainer != null) {
      expect(getCaretPosition(caretContainer)).toBe(3)

      // click '1' left side in inputbox, caret position should move to end
      clickSiblingElements(caretContainer, 0, true)
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(getCaretPosition(caretContainer)).toBe(3)

      // click '9' by keyboard, content should be '1239', caret position should be ended
      fireEvent.touchEnd(screen.getByText('9'))
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('1239')
      expect(getCaretPosition(caretContainer)).toBe(4)

      // click delete by keyboard, content should be '123', caret position should be 1
      fireEvent.touchEnd(screen.getByTitle('清除'))
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('123')
      expect(getCaretPosition(caretContainer)).toBe(3)

      // click input box, caret position should be 3
      fireEvent.click(document.querySelector(`.${classPrefix}-content`) as any)
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(getCaretPosition(caretContainer)).toBe(3)
    }
  })

  test('controlled component with 2-digit decimal amount should handle cursor correctly', async () => {
    const KeyBoardClassPrefix = 'adm-number-keyboard'
    const Wrapper = () => {
      const [value, setValue] = React.useState('0')
      return (
        <VirtualInput
          data-testid='virtualInput'
          clearable
          value={value || '0'}
          onChange={v => {
            if (v.startsWith('.')) {
              v = '0' + v
            }
            v = v.replace(/^0+(\d)/, '$1')
            if (TWO_DIGIT_NUMBER_REGEX.test(v) || !v) {
              setValue(v)
            }
          }}
          placeholder='请输入内容'
          keyboard={<NumberKeyboard confirmText='确定' customKey={'.'} />}
        />
      )
    }
    render(<Wrapper />)
    const input = screen.getByTestId('virtualInput')
    fireEvent.focus(input)

    await waitFor(() => {
      expect(
        document.querySelector(`.${KeyBoardClassPrefix}-popup`)
      ).toBeVisible()
    })

    // click '1', '2', '3' by keyboard，content should be '123'
    fireEvent.touchEnd(screen.getByTitle('1'))
    fireEvent.touchEnd(screen.getByTitle('0'))
    fireEvent.touchEnd(screen.getByTitle('3'))
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '103'
    )
    const caretContainer = input.querySelector(
      `.${classPrefix}-caret-container`
    )

    if (caretContainer != null) {
      expect(getCaretPosition(caretContainer)).toBe(3)

      // Input decimal part
      fireEvent.touchEnd(screen.getByTitle('.'))
      fireEvent.touchEnd(screen.getByTitle('4'))
      fireEvent.touchEnd(screen.getByTitle('5'))

      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('103.45')
      expect(getCaretPosition(caretContainer)).toBe(6)

      // Move cursor to between 10 and 3.45, decimal input should be invalid
      clickSiblingElements(caretContainer, 2, true)
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(getCaretPosition(caretContainer)).toBe(2)
      fireEvent.touchEnd(screen.getByTitle('.'))
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('103.45')
      expect(getCaretPosition(caretContainer)).toBe(2)

      // Move cursor between 1 and 03.45, then delete 1
      clickSiblingElements(caretContainer, 1, true)
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(getCaretPosition(caretContainer)).toBe(1)

      fireEvent.touchEnd(screen.getByTitle('清除')) // Click delete
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('3.45')
      expect(getCaretPosition(caretContainer)).toBe(4) // Value becomes 3.45 with cursor at end

      // Move cursor between 3 and .45, then delete 3
      clickSiblingElements(caretContainer, 1, true)
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(getCaretPosition(caretContainer)).toBe(1)

      fireEvent.touchEnd(screen.getByTitle('清除')) // Click delete
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('0.45')
      expect(getCaretPosition(caretContainer)).toBe(4) // Value becomes 0.45 with cursor at end

      // Delete all, value becomes 0
      fireEvent.click(document.querySelector(`.${classPrefix}-clear`) as any)
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('0')

      fireEvent.touchEnd(screen.getByTitle('9')) // When value is 0, input 9 becomes 9
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('9')
      expect(getCaretPosition(caretContainer)).toBe(1)

      fireEvent.touchEnd(screen.getByTitle('清除')) // 点删除
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('0')
    }
  })
})
