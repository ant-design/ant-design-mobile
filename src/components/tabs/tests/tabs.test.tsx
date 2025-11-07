import React, { useState } from 'react'
import { fireEvent, render, testA11y } from 'testing'
import Tabs, { TabsProps } from '..'

const classPrefix = `adm-tabs`

describe('Tabs', () => {
  const Basic = (props: TabsProps) => (
    <Tabs {...props}>
      <Tabs.Tab title='fruits' key='fruits'>
        Apple
      </Tabs.Tab>
      <Tabs.Tab title='vegetables' key='vegetables'>
        Tomato
      </Tabs.Tab>
      <Tabs.Tab title='animals' key='animals'>
        Ant
      </Tabs.Tab>
    </Tabs>
  )
  test('a11y', async () => {
    await testA11y(<Basic />)
  })

  test('basic usage', async () => {
    const { getByText } = render(<Basic defaultActiveKey='animals' />)
    expect(getByText('Ant')).toBeVisible()
    expect(getByText('animals')).toHaveClass(`${classPrefix}-tab-active`)
    fireEvent.click(getByText('vegetables'))
    expect(getByText('Tomato')).toBeVisible()
    expect(getByText('vegetables')).toHaveClass(`${classPrefix}-tab-active`)
  })

  test('controlled mode', async () => {
    const App = () => {
      const [activeKey, setActiveKey] = useState<string | null>(null)
      return <Basic activeKey={activeKey} onChange={key => setActiveKey(key)} />
    }
    const { getByText } = render(<App />)
    expect(document.querySelectorAll(`.${classPrefix}-tab-active`).length).toBe(
      0
    )
    fireEvent.click(getByText('vegetables'))
    expect(getByText('Tomato')).toBeVisible()
  })

  test('disabled tab', async () => {
    const onChange = jest.fn()
    const { getByText } = render(
      <Tabs onChange={onChange}>
        <Tabs.Tab title='fruits' key='fruits' />
        <Tabs.Tab title='vegetables' key='vegetables' />
        <Tabs.Tab title='animals' key='animals' disabled />
      </Tabs>
    )

    expect(getByText('animals')).toHaveClass(`${classPrefix}-tab-disabled`)
    fireEvent.click(getByText('animals'))
    expect(onChange).not.toBeCalled()
  })

  test('`activeLineMode` prop', async () => {
    const { container: fullContainer } = render(<Basic activeLineMode='full' />)
    const { container: fixedContainer } = render(
      <Basic activeLineMode='fixed' />
    )
    expect(fullContainer).toMatchSnapshot()
    expect(fixedContainer).toMatchSnapshot()
  })

  test('not stretch', async () => {
    const { getByTestId } = render(<Basic stretch={false} data-testid='tabs' />)
    expect(getByTestId('tabs')).not.toHaveClass(
      `${classPrefix}-tab-wrapper-stretch`
    )
  })

  test('render the DOM structure when hidden', async () => {
    const { queryByText } = render(
      <Tabs>
        <Tabs.Tab title='fruits' key='fruits'>
          Apple
        </Tabs.Tab>
        <Tabs.Tab title='vegetables' key='vegetables'>
          Tomato
        </Tabs.Tab>
        <Tabs.Tab title='animals' key='animals' forceRender>
          Ant
        </Tabs.Tab>
      </Tabs>
    )

    expect(queryByText('Ant')).toBeInTheDocument()
  })

  test('unmount content when not visible', async () => {
    const { getByText, queryByText } = render(
      <Tabs>
        <Tabs.Tab title='fruits' key='fruits' destroyOnClose>
          Apple
        </Tabs.Tab>
        <Tabs.Tab title='vegetables' key='vegetables'>
          Tomato
        </Tabs.Tab>
        <Tabs.Tab title='animals' key='animals'>
          Ant
        </Tabs.Tab>
      </Tabs>
    )
    expect(queryByText('Apple')).toBeInTheDocument()
    fireEvent.click(getByText('vegetables'))
    expect(queryByText('Apple')).not.toBeInTheDocument()
  })

  test('RTL render component should be rendered correctly in RTL direction', async () => {
    const { container } = render(
      <Tabs direction='rtl'>
        <Tabs.Tab title='fruits' key='fruits'>
          Apple
        </Tabs.Tab>
        <Tabs.Tab title='vegetables' key='vegetables'>
          Tomato
        </Tabs.Tab>
      </Tabs>
    )
    expect(container).toMatchSnapshot()
  })

  test('tabs should be focusable and keyboard-navigable', async () => {
    const { getByText } = render(<Basic />)

    const fruitsTab = getByText('fruits')
    const vegetablesTab = getByText('vegetables')
    const animalsTab = getByText('animals')

    expect(fruitsTab).toHaveAttribute('tabIndex', '0')
    expect(vegetablesTab).toHaveAttribute('tabIndex', '-1')
    expect(animalsTab).toHaveAttribute('tabIndex', '-1')

    fruitsTab.focus()
    expect(fruitsTab).toHaveFocus()

    fireEvent.keyDown(fruitsTab, { key: 'ArrowRight' })
    expect(vegetablesTab).toHaveFocus()
    expect(vegetablesTab).toHaveClass(`${classPrefix}-tab-active`)
    expect(fruitsTab).toHaveAttribute('tabIndex', '-1')
    expect(vegetablesTab).toHaveAttribute('tabIndex', '0')

    fireEvent.keyDown(vegetablesTab, { key: 'ArrowRight' })
    expect(animalsTab).toHaveFocus()
    expect(animalsTab).toHaveClass(`${classPrefix}-tab-active`)

    fireEvent.keyDown(animalsTab, { key: 'ArrowLeft' })
    expect(vegetablesTab).toHaveFocus()
    expect(vegetablesTab).toHaveClass(`${classPrefix}-tab-active`)
  })

  test('controlled activeKey: keyboard navigation should trigger focus, programmatic change should not', async () => {
    const App = () => {
      const [activeKey, setActiveKey] = useState('fruits')
      return (
        <div>
          <Tabs activeKey={activeKey} onChange={setActiveKey}>
            <Tabs.Tab title='fruits' key='fruits'>
              Apple
            </Tabs.Tab>
            <Tabs.Tab title='vegetables' key='vegetables'>
              Tomato
            </Tabs.Tab>
            <Tabs.Tab title='animals' key='animals'>
              Ant
            </Tabs.Tab>
          </Tabs>
          <button onClick={() => setActiveKey('animals')}>
            Set to animals
          </button>
        </div>
      )
    }

    const { getByText } = render(<App />)

    const fruitsTab = getByText('fruits')
    const vegetablesTab = getByText('vegetables')
    const animalsTab = getByText('animals')
    const button = getByText('Set to animals')

    // First: keyboard navigation should trigger focus
    fruitsTab.focus()
    expect(fruitsTab).toHaveFocus()

    fireEvent.keyDown(fruitsTab, { key: 'ArrowRight' })
    expect(vegetablesTab).toHaveClass(`${classPrefix}-tab-active`)
    expect(vegetablesTab).toHaveFocus() // 键盘切换应该触发 focus

    // Second: programmatic activeKey change should NOT trigger focus
    fireEvent.click(button)
    expect(animalsTab).toHaveClass(`${classPrefix}-tab-active`)
    expect(animalsTab).not.toHaveFocus() // 直接改 activeKey 不应该触发 focus
  })
})
