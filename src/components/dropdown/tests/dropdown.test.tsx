import React, { useState } from 'react'
import { act, fireEvent, render, screen, waitFor } from 'testing'
import Dropdown from '..'

jest.mock('../../../utils/get-scroll-parent', () => ({
  getScrollParent: jest.fn(),
}))

import { getScrollParent } from '../../../utils/get-scroll-parent'

const mockedGetScrollParent = getScrollParent as jest.MockedFunction<
  typeof getScrollParent
>

const classPrefix = `adm-dropdown`

describe('Dropdown', () => {
  test('basic usage', async () => {
    render(
      <Dropdown data-testid='dropdown'>
        <Dropdown.Item title='sorter' key='sorter' data-testid='item'>
          content
        </Dropdown.Item>
      </Dropdown>
    )

    fireEvent.click(screen.getByText('sorter'))
    const content = screen.getByText('content')
    expect(content).toBeInTheDocument()
    expect(screen.getByTestId('dropdown')).toHaveClass(`${classPrefix}-open`)
    expect(screen.getByTestId('item')).toHaveClass(
      `${classPrefix}-item-active ${classPrefix}-item-highlight`
    )

    fireEvent.click(document.body)
    waitFor(() => expect(content).not.toBeVisible())
  })

  test('multi item', () => {
    render(
      <Dropdown data-testid='dropdown'>
        <Dropdown.Item title='item1' key='item1' data-testid='item1'>
          content1
        </Dropdown.Item>
        <Dropdown.Item title='item2' key='item2' data-testid='item2'>
          content2
        </Dropdown.Item>
      </Dropdown>
    )

    fireEvent.click(screen.getByText('item1'))
    expect(screen.getByText('content1')).toBeVisible()
    expect(screen.getByTestId('item1')).toHaveClass(
      `${classPrefix}-item-active ${classPrefix}-item-highlight`
    )
    fireEvent.click(screen.getByText('item2'))
    expect(screen.getByText('content2')).toBeVisible()
    expect(screen.getByTestId('item2')).toHaveClass(
      `${classPrefix}-item-active ${classPrefix}-item-highlight`
    )
  })

  test('renders with invalid react element', () => {
    render(<Dropdown>{1}</Dropdown>)
    expect(screen.getByText(1)).toBeInTheDocument()
  })

  test('rendered to the current node', async () => {
    const { getByText, container } = render(
      <Dropdown getContainer={null}>
        <Dropdown.Item key='bizop' title='Item'>
          <div style={{ padding: 12 }}>内容</div>
        </Dropdown.Item>
      </Dropdown>
    )

    fireEvent.click(getByText('Item'))

    await waitFor(() => {
      expect(
        container.querySelectorAll(`.${classPrefix} .${classPrefix}-popup`)[0]
      ).toBeTruthy()
    })
  })

  test('forceRender should be work', () => {
    render(
      <Dropdown data-testid='dropdown'>
        <Dropdown.Item title='sorter' key='sorter' forceRender>
          content
        </Dropdown.Item>
      </Dropdown>
    )
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  test('trigger the click of Dropdown.Item ', () => {
    const ClickTest = () => {
      const [count, setCount] = useState(0)
      return (
        <Dropdown>
          <Dropdown.Item
            onClick={() => setCount(count + 1)}
            title='sorter'
            key='sorter'
          >
            click{count}
          </Dropdown.Item>
        </Dropdown>
      )
    }

    render(<ClickTest />)

    fireEvent.click(screen.getByText('sorter'))
    expect(screen.getByText('click1'))
    fireEvent.click(screen.getByText('sorter'))
    expect(screen.getByText('click2'))
  })

  describe('arrow', () => {
    it('Dropdown - arrow', () => {
      render(
        <Dropdown arrow='little'>
          <Dropdown.Item title='sorter' key='sorter' />
        </Dropdown>
      )
      expect(screen.getByText('little')).toBeVisible()
    })

    it('Dropdown - arrowIcon', () => {
      render(
        <Dropdown arrowIcon='bamboo' arrow='little'>
          <Dropdown.Item title='sorter' key='sorter' />
        </Dropdown>
      )
      expect(screen.getByText('bamboo')).toBeVisible()
    })

    it('Dropdown.Item - arrow', () => {
      render(
        <Dropdown arrowIcon='ignore' arrow='ignore'>
          <Dropdown.Item title='sorter' key='sorter' arrow='little' />
        </Dropdown>
      )
      expect(screen.getByText('little')).toBeVisible()
    })

    it('Dropdown.Item - arrowIcon', () => {
      render(
        <Dropdown arrowIcon='ignore' arrow='ignore'>
          <Dropdown.Item
            title='sorter'
            key='sorter'
            arrow='little'
            arrowIcon='bamboo'
          />
        </Dropdown>
      )
      expect(screen.getByText('bamboo')).toBeVisible()
    })
  })

  test('should lock scroll of nested scrollable container when open', async () => {
    const scrollParentEl = document.createElement('div')
    scrollParentEl.style.overflowY = 'auto'
    mockedGetScrollParent.mockReturnValue(scrollParentEl)

    render(
      <Dropdown>
        <Dropdown.Item title='sorter' key='sorter'>
          content
        </Dropdown.Item>
      </Dropdown>
    )

    expect(scrollParentEl.style.overflowY).toBe('auto')

    fireEvent.click(screen.getByText('sorter'))
    await waitFor(() => {
      expect(screen.getByText('content')).toBeVisible()
    })

    expect(scrollParentEl.style.overflowY).toBe('hidden')

    fireEvent.click(screen.getByText('sorter'))
    await waitFor(() => {
      expect(screen.getByText('content')).not.toBeVisible()
    })

    expect(scrollParentEl.style.overflowY).toBe('auto')

    mockedGetScrollParent.mockRestore()
  })

  test('should not lock scroll when scroll parent is window', async () => {
    mockedGetScrollParent.mockReturnValue(window)

    render(
      <Dropdown>
        <Dropdown.Item title='sorter' key='sorter'>
          content
        </Dropdown.Item>
      </Dropdown>
    )

    // 打开 Dropdown
    fireEvent.click(screen.getByText('sorter'))
    await waitFor(() => {
      expect(screen.getByText('content')).toBeVisible()
    })

    // scroll parent 为 window 时不应设置 overflow
    expect(document.body.style.overflow).toBe('')

    mockedGetScrollParent.mockRestore()
  })

  test('should not prematurely unlock when multiple Dropdowns share the same scroll parent', async () => {
    const scrollParentEl = document.createElement('div')
    scrollParentEl.style.overflowY = 'auto'

    mockedGetScrollParent.mockImplementation(() => {
      if (scrollParentEl.style.overflowY === 'hidden') {
        return window
      }
      return scrollParentEl
    })

    const container = document.createElement('div')
    scrollParentEl.appendChild(container)
    document.body.appendChild(scrollParentEl)

    const { unmount } = render(
      <Dropdown>
        <Dropdown.Item title='A' key='a'>
          a-content
        </Dropdown.Item>
      </Dropdown>,
      { container }
    )

    fireEvent.click(screen.getByText('A'))
    await waitFor(() => {
      expect(screen.getByText('a-content')).toBeVisible()
    })
    expect(scrollParentEl.style.overflowY).toBe('hidden')

    const container2 = document.createElement('div')
    scrollParentEl.appendChild(container2)
    const { unmount: unmount2 } = render(
      <Dropdown>
        <Dropdown.Item title='B' key='b'>
          b-content
        </Dropdown.Item>
      </Dropdown>,
      { container: container2 }
    )

    fireEvent.click(screen.getByText('B'))
    await waitFor(() => {
      expect(screen.getByText('b-content')).toBeVisible()
    })
    expect(scrollParentEl.style.overflowY).toBe('hidden')

    fireEvent.click(screen.getByText('A'))
    await waitFor(() => {
      expect(screen.getByText('a-content')).not.toBeVisible()
    })
    expect(scrollParentEl.style.overflowY).toBe('hidden')

    fireEvent.click(screen.getByText('B'))
    await waitFor(() => {
      expect(screen.getByText('b-content')).not.toBeVisible()
    })
    expect(scrollParentEl.style.overflowY).toBe('auto')

    unmount()
    unmount2()
    document.body.removeChild(scrollParentEl)
    mockedGetScrollParent.mockRestore()
  })

  describe('onVisibleChange', () => {
    test('should fire onVisibleChange when opening and closing', async () => {
      const onVisibleChange = jest.fn()
      render(
        <Dropdown onVisibleChange={onVisibleChange}>
          <Dropdown.Item title='sorter' key='sorter'>
            content
          </Dropdown.Item>
        </Dropdown>
      )

      // 打开
      fireEvent.click(screen.getByText('sorter'))
      await waitFor(() => {
        expect(onVisibleChange).lastCalledWith(true, { key: 'sorter' })
      })
      expect(onVisibleChange).toHaveBeenCalledTimes(1)

      // 再次点击同一项关闭
      fireEvent.click(screen.getByText('sorter'))
      await waitFor(() => {
        expect(onVisibleChange).lastCalledWith(false, { key: 'sorter' })
      })
      expect(onVisibleChange).toHaveBeenCalledTimes(2)
    })

    test('should fire onVisibleChange when switching items', async () => {
      const onVisibleChange = jest.fn()
      render(
        <Dropdown onVisibleChange={onVisibleChange}>
          <Dropdown.Item title='sorter' key='sorter'>
            sorter content
          </Dropdown.Item>
          <Dropdown.Item title='filter' key='filter'>
            filter content
          </Dropdown.Item>
        </Dropdown>
      )

      // 打开 sorter
      fireEvent.click(screen.getByText('sorter'))
      await waitFor(() => {
        expect(onVisibleChange).lastCalledWith(true, { key: 'sorter' })
      })

      // 切换 item 不会改变 visible，不应触发 onVisibleChange
      fireEvent.click(screen.getByText('filter'))
      expect(onVisibleChange).toHaveBeenCalledTimes(1)
    })

    test('should fire onVisibleChange when closing via click away', async () => {
      const onVisibleChange = jest.fn()
      render(
        <Dropdown closeOnClickAway onVisibleChange={onVisibleChange}>
          <Dropdown.Item title='sorter' key='sorter'>
            content
          </Dropdown.Item>
        </Dropdown>
      )

      // 打开
      fireEvent.click(screen.getByText('sorter'))
      await waitFor(() => {
        expect(onVisibleChange).lastCalledWith(true, { key: 'sorter' })
      })

      // 点击外部关闭
      act(() => {
        fireEvent.click(document.body)
      })
      await waitFor(() => {
        expect(onVisibleChange).lastCalledWith(false, { key: 'sorter' })
      })
    })

    test('should fire onVisibleChange when closing via ref.close()', async () => {
      const ref = React.createRef<{ close: () => void }>()
      const onVisibleChange = jest.fn()
      render(
        <Dropdown ref={ref} onVisibleChange={onVisibleChange}>
          <Dropdown.Item title='sorter' key='sorter'>
            content
          </Dropdown.Item>
        </Dropdown>
      )

      // 打开
      fireEvent.click(screen.getByText('sorter'))
      await waitFor(() => {
        expect(onVisibleChange).lastCalledWith(true, { key: 'sorter' })
      })

      // 通过 ref 关闭
      ref.current?.close()
      await waitFor(() => {
        expect(onVisibleChange).lastCalledWith(false, { key: 'sorter' })
      })
    })
  })
})
