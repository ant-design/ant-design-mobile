import React, { useState } from 'react'
import { fireEvent, render, screen, testA11y, waitFor } from 'testing'
import Cascader, { CascaderValue } from '../'
import { options } from '../demos/data'

describe('Cascader', () => {
  test('a11y', async () => {
    await testA11y(<Cascader options={options} visible={true} />)
  })

  test('basic usage', async () => {
    const onConfirm = jest.fn()
    const onTabsChange = jest.fn()
    const App = () => {
      const [visible, setVisible] = useState(false)

      return (
        <>
          <button
            onClick={() => {
              setVisible(true)
            }}
          >
            Choose
          </button>

          <Cascader
            onTabsChange={onTabsChange}
            options={options}
            visible={visible}
            onClose={() => {
              setVisible(false)
            }}
            onConfirm={onConfirm}
          />
        </>
      )
    }

    const { getByText } = render(<App />)

    fireEvent.click(getByText('Choose'))
    await waitFor(() => {
      fireEvent.click(getByText('浙江'))
      fireEvent.click(getByText('杭州'))
    })
    fireEvent.click(getByText('请选择'))
    expect(onTabsChange).toBeCalledTimes(2)

    fireEvent.click(getByText('确定'))

    expect(onConfirm.mock.calls[0][0]).toEqual(['浙江', '杭州'])
  })

  test('should sync value when visible and external value changes', async () => {
    const App = () => {
      const [visible, setVisible] = useState(false)
      const [value, setValue] = useState<CascaderValue[]>([])

      return (
        <>
          <button onClick={() => setVisible(true)}>Open</button>
          <button onClick={() => setValue(['安徽', '合肥'])}>Set Value</button>
          <Cascader
            options={options}
            visible={visible}
            value={value}
            onConfirm={val => {
              setValue(val)
              setVisible(false)
            }}
            onClose={() => setVisible(false)}
            onCancel={() => setVisible(false)}
          />
        </>
      )
    }

    render(<App />)

    fireEvent.click(screen.getByText('Open'))
    await waitFor(() => {
      expect(screen.getByText('浙江')).toBeInTheDocument()
    })

    // While the popup is open, change the external value
    fireEvent.click(screen.getByText('Set Value'))

    // The cascader should reflect the new value (合肥 should appear in both tab and list)
    await waitFor(() => {
      const matches = screen.getAllByText('合肥')
      expect(matches.length).toBeGreaterThanOrEqual(1)
    })
  })

  test('should preserve draft selection when parent re-renders with same value', async () => {
    const App = () => {
      const [visible, setVisible] = useState(false)
      const [value, setValue] = useState<CascaderValue[]>([])
      const [, setTick] = useState(0)

      return (
        <>
          <button onClick={() => setVisible(true)}>Open</button>
          {/* Trigger a parent re-render without changing value content */}
          <button onClick={() => setTick(t => t + 1)}>Rerender</button>
          <Cascader
            options={options}
            visible={visible}
            value={value}
            onConfirm={val => {
              setValue(val)
              setVisible(false)
            }}
            onClose={() => setVisible(false)}
            onCancel={() => setVisible(false)}
          />
        </>
      )
    }

    render(<App />)

    fireEvent.click(screen.getByText('Open'))
    await waitFor(() => {
      expect(screen.getByText('浙江')).toBeInTheDocument()
    })

    // User selects 浙江 in the cascader (draft, not confirmed)
    fireEvent.click(screen.getByText('浙江'))

    // Wait for the selection to take effect
    await waitFor(() => {
      expect(screen.getAllByText('浙江').length).toBeGreaterThanOrEqual(2)
    })

    // Parent re-renders with the same value content ([])
    fireEvent.click(screen.getByText('Rerender'))

    // The draft selection should be preserved — 浙江 should still appear as a selected tab
    expect(screen.getAllByText('浙江').length).toBeGreaterThanOrEqual(2)
  })

  test('use in an imperative way', async () => {
    const fn = jest.fn()
    const onClick = async () => {
      const value = await Cascader.prompt({
        options,
        title: 'Select the address',
      })
      fn(value)
    }

    const { getByText } = render(<button onClick={onClick}>Popup</button>)

    fireEvent.click(getByText('Popup'))

    await waitFor(() => {
      fireEvent.click(getByText('浙江'))
      fireEvent.click(getByText('杭州'))
      fireEvent.click(getByText('西湖区'))
    })

    fireEvent.click(getByText('确定'))

    await waitFor(() => {
      expect(fn.mock.calls[0][0]).toEqual(['浙江', '杭州', '西湖区'])
    })
  })
})
