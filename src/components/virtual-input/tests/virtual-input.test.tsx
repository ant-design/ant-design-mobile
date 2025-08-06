import React, { createRef } from 'react'
import { act, fireEvent, render, screen, waitFor } from 'testing'
import { getDefaultConfig } from '../../config-provider'
import NumberKeyboard from '../../number-keyboard'
import { VirtualInput, VirtualInputRef } from '../virtual-input'

const classPrefix = 'adm-virtual-input'
const { locale } = getDefaultConfig()
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

function makeTouchEvent(
  type: 'touchmove' | 'touchstart' | 'touchend',
  clientX: number
) {
  const e = new TouchEvent(type, {
    bubbles: true,
    cancelable: true,
  })
  Object.defineProperty(e, 'touches', {
    value: [
      {
        clientX,
      },
    ],
  })
  return e
}

describe('VirtualInput', () => {
  beforeEach(() => {
    const oldGetBoundingClientRect = Element.prototype.getBoundingClientRect
    Element.prototype.getBoundingClientRect = jest.fn(function (this: Element) {
      if (this.tagName === 'SPAN') {
        return {
          width: 10, // 单个字符宽度为 10
          height: 50,
          top: 0,
          left: 0,
          bottom: 0,
          right: 200,
          x: 0,
          y: 0,
          toJSON: () => {},
        }
      } else {
        return oldGetBoundingClientRect.call(this)
      }
    })
  })

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
    fireEvent.click(screen.getByText('0'))
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '0'
    )
    fireEvent.click(screen.getByText('1'))
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '01'
    )
    fireEvent.click(screen.getByTitle(locale.Input.clear))
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
          cursor={{ movable: true }}
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
    fireEvent.click(screen.getByText('5'))
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '12345'
    )
    const caretContainer = input.querySelector(
      `.${classPrefix}-caret-container`
    )

    if (caretContainer != null) {
      expect(getCaretPosition(caretContainer)).toBe(5)

      // click '3' right side in inputbox, caret position should be 3
      await act(() => {
        clickSiblingElements(caretContainer, 2, false)
      })
      expect(getCaretPosition(caretContainer)).toBe(3)

      // click '9' by keyboard, content should be '123945', caret position should be 4
      fireEvent.click(screen.getByText('9'))
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
      fireEvent.click(screen.getByTitle(locale.Input.clear))
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
    const onMove = jest.fn()
    const KeyBoardClassPrefix = 'adm-number-keyboard'
    const Wrapper = () => {
      return (
        <VirtualInput
          data-testid='virtualInput'
          clearable
          cursor={{ movable: true, onMove: onMove }}
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
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '123'
    )
    const caretContainer = input.querySelector(
      `.${classPrefix}-caret-container`
    )

    expect(caretContainer).toBeTruthy()

    expect(getCaretPosition(caretContainer)).toBe(3)

    // click '1' left side in inputbox, caret position should be 0
    await act(() => {
      clickSiblingElements(caretContainer, 0, true)
    })
    expect(getCaretPosition(caretContainer)).toBe(0)

    // click '9' by keyboard, content should be '9123', caret position should be 1
    fireEvent.click(screen.getByText('9'))
    await waitFor(() => {
      expect(
        document.querySelector(`.${KeyBoardClassPrefix}-popup`)
      ).toBeVisible()
    })
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '9123'
    )
    expect(getCaretPosition(caretContainer)).toBe(1)

    // click delete by keyboard, content should be '123', caret position should be 1
    fireEvent.click(screen.getByTitle(locale.Input.clear))
    await waitFor(() => {
      expect(
        document.querySelector(`.${KeyBoardClassPrefix}-popup`)
      ).toBeVisible()
    })
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '123'
    )
    expect(getCaretPosition(caretContainer)).toBe(0)

    // click input box, caret position should be 3 (at end)
    fireEvent.click(document.querySelector(`.${classPrefix}-content`) as any)
    await waitFor(() => {
      expect(
        document.querySelector(`.${KeyBoardClassPrefix}-popup`)
      ).toBeVisible()
    })
    expect(getCaretPosition(caretContainer)).toBe(3)

    expect(onMove.mock.calls.length).toBe(2)
  })

  test('只支持两位金额的受控组件，光标处理正常', async () => {
    const KeyBoardClassPrefix = 'adm-number-keyboard'
    const Wrapper = () => {
      const [value, setValue] = React.useState('0')
      return (
        <VirtualInput
          data-testid='virtualInput'
          clearable
          cursor={{ movable: true }}
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
          keyboard={<NumberKeyboard confirmText='确定' customKey='.' />}
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
    fireEvent.click(screen.getByTitle('1'))
    fireEvent.click(screen.getByTitle('0'))
    fireEvent.click(screen.getByTitle('3'))
    expect(document.querySelector(`.${classPrefix}-content`)).toHaveTextContent(
      '103'
    )
    const caretContainer = input.querySelector(
      `.${classPrefix}-caret-container`
    )

    if (caretContainer != null) {
      expect(getCaretPosition(caretContainer)).toBe(3)

      //  输入小数部分
      fireEvent.click(screen.getByTitle('.'))
      fireEvent.click(screen.getByTitle('4'))
      fireEvent.click(screen.getByTitle('5'))

      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('103.45')
      expect(getCaretPosition(caretContainer)).toBe(6)

      // 光标移动到 10x3.45, 输入小数点无效
      await act(() => {
        clickSiblingElements(caretContainer, 2, true)
      })
      expect(getCaretPosition(caretContainer)).toBe(2)
      fireEvent.click(screen.getByTitle('.'))
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('103.45')
      expect(getCaretPosition(caretContainer)).toBe(2)

      // 光标移动到 x103.45，输入 0 无效
      await act(() => {
        clickSiblingElements(caretContainer, 0, true)
      })
      expect(getCaretPosition(caretContainer)).toBe(0)
      fireEvent.click(screen.getByTitle('.'))
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('103.45')
      expect(getCaretPosition(caretContainer)).toBe(0)

      // 光标移动到 1x03.45，并删除 1
      await act(() => {
        clickSiblingElements(caretContainer, 0, false)
      })
      expect(getCaretPosition(caretContainer)).toBe(1)

      fireEvent.click(screen.getByTitle(locale.Input.clear)) // 点删除
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('3.45')
      expect(getCaretPosition(caretContainer)).toBe(4) // 变为 3.45 光标到最末尾

      // 光标移动到 3x.45，并删除 3
      await act(() => {
        clickSiblingElements(caretContainer, 0, false)
      })
      expect(getCaretPosition(caretContainer)).toBe(1)

      fireEvent.click(screen.getByTitle(locale.Input.clear)) // 点删除
      await waitFor(() => {
        expect(
          document.querySelector(`.${KeyBoardClassPrefix}-popup`)
        ).toBeVisible()
      })
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('0.45')
      expect(getCaretPosition(caretContainer)).toBe(4) // 变为 0.45 光标到最末尾

      // 全部删除，最后为 0
      fireEvent.click(document.querySelector(`.${classPrefix}-clear`) as any)
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('0')

      fireEvent.click(screen.getByTitle('9')) // 在 0 时输入 9，则为 9
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('9')
      expect(getCaretPosition(caretContainer)).toBe(1)

      fireEvent.click(screen.getByTitle(locale.Input.clear)) // 点删除
      expect(
        document.querySelector(`.${classPrefix}-content`)
      ).toHaveTextContent('0')
    }
  })

  test('caret position should changed by touchmove', async () => {
    const KeyBoardClassPrefix = 'adm-number-keyboard'
    const Wrapper = () => {
      const [value, setValue] = React.useState('0')
      return (
        <VirtualInput
          data-testid='virtualInput'
          clearable
          cursor={{ movable: true }}
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
          keyboard={<NumberKeyboard confirmText='确定' customKey='.' />}
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

    const targetElement = input.querySelector(`.${classPrefix}-content`)
    expect(targetElement).not.toBeNull()

    // click '1', '2', '3' by keyboard，content should be '123'
    fireEvent.click(screen.getByTitle('1'))
    fireEvent.click(screen.getByTitle('0'))
    fireEvent.click(screen.getByTitle('3'))
    fireEvent.click(screen.getByTitle('.'))
    fireEvent.click(screen.getByTitle('4'))
    fireEvent.click(screen.getByTitle('5'))
    expect(targetElement).toHaveTextContent('103.45')
    const caretContainer = input.querySelector(
      `.${classPrefix}-caret-container`
    )

    expect(caretContainer).toBeTruthy()
    expect(getCaretPosition(caretContainer)).toBe(6)

    if (caretContainer && targetElement) {
      const rect = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 60, // caret 的坐标
        x: 60,
        y: 0,
        width: 2,
        height: 20,
        toJSON: () => {},
      }
      jest
        .spyOn(caretContainer.children[0], 'getBoundingClientRect')
        .mockReturnValue(rect)

      // touchstart caret + touchmove 向左 32px + touchmove 向右 18px
      await act(() => {
        targetElement.dispatchEvent(makeTouchEvent('touchstart', 60))
        targetElement.dispatchEvent(makeTouchEvent('touchmove', 60 - 32))
      })
      expect(getCaretPosition(caretContainer)).toBe(3) // 五入 28/10 -> 3
      await act(() => {
        targetElement.dispatchEvent(makeTouchEvent('touchmove', 60 - 32 + 18))
      })
      expect(getCaretPosition(caretContainer)).toBe(5) // 四舍 14/10 -> 1
      // 测试光标闪烁动效，move 中不闪烁，touchend、move 停留超过 500ms 又闪烁
      expect((targetElement.parentNode as Element).classList).toContain(
        'adm-virtual-input-caret-dragging'
      )
      await act(() => {
        targetElement.dispatchEvent(makeTouchEvent('touchend', 60))
      })
      expect((targetElement.parentNode as Element).classList).not.toContain(
        'adm-virtual-input-caret-dragging'
      )
      await act(() => {
        targetElement.dispatchEvent(makeTouchEvent('touchstart', 60 - 32 + 18))
        targetElement.dispatchEvent(
          makeTouchEvent('touchmove', 60 - 32 + 18 + 1)
        )
      })
      expect((targetElement.parentNode as Element).classList).toContain(
        'adm-virtual-input-caret-dragging'
      )
      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 600))
      })
      expect((targetElement.parentNode as Element).classList).not.toContain(
        'adm-virtual-input-caret-dragging'
      )

      // 不在 caret 附近 touchstart 则 touchmove 不会改变光标位置
      expect(getCaretPosition(caretContainer)).toBe(5)
      await act(() => {
        targetElement.dispatchEvent(makeTouchEvent('touchstart', 10))
        targetElement.dispatchEvent(makeTouchEvent('touchmove', 30))
      })
      expect(getCaretPosition(caretContainer)).toBe(5)
    }
  })

  test('disable caret position', async () => {
    const KeyBoardClassPrefix = 'adm-number-keyboard'
    const Wrapper = () => {
      return (
        <VirtualInput
          data-testid='virtualInput'
          clearable
          placeholder='请输入内容'
          keyboard={<NumberKeyboard confirmText='确定' customKey='.' />}
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

    const targetElement = input.querySelector(`.${classPrefix}-content`)

    // click '1', '2', '3' by keyboard，content should be '123'
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    expect(targetElement).toHaveTextContent('123')
    const caretContainer = input.querySelector(
      `.${classPrefix}-caret-container`
    )
    expect(caretContainer).toBeTruthy()
    expect(getCaretPosition(caretContainer)).toBe(3)

    // touchmove 无法改变光标位置
    if (caretContainer && targetElement) {
      const rect = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 60, // caret 的坐标
        x: 60,
        y: 0,
        width: 2,
        height: 20,
        toJSON: () => {},
      }
      jest
        .spyOn(caretContainer.children[0], 'getBoundingClientRect')
        .mockReturnValue(rect)

      await act(() => {
        targetElement.dispatchEvent(makeTouchEvent('touchstart', 60))
        targetElement.dispatchEvent(makeTouchEvent('touchmove', 60 - 32))
      })

      expect(getCaretPosition(caretContainer)).toBe(3)

      // 点击无法改变光标位置
      await act(() => {
        clickSiblingElements(caretContainer, 0, true)
      })
      expect(getCaretPosition(caretContainer)).toBe(3)
    }
  })
})
