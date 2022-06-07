import React, { useState } from 'react'
import { render, testA11y, fireEvent } from 'testing'
import CapsuleTabs, { CapsuleTabsProps } from '..'

const classPrefix = `adm-capsule-tabs`

describe('CapsuleTabs', () => {
  const Basic = (props: CapsuleTabsProps) => (
    <CapsuleTabs {...props}>
      <CapsuleTabs.Tab title='fruits' key='fruits'>
        Apple
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title='vegetables' key='vegetables'>
        Tomato
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title='animals' key='animals'>
        Ant
      </CapsuleTabs.Tab>
    </CapsuleTabs>
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
      <CapsuleTabs onChange={onChange}>
        <CapsuleTabs.Tab title='fruits' key='fruits' />
        <CapsuleTabs.Tab title='vegetables' key='vegetables' />
        <CapsuleTabs.Tab title='animals' key='animals' disabled />
      </CapsuleTabs>
    )

    expect(getByText('animals')).toHaveClass(`${classPrefix}-tab-disabled`)
    fireEvent.click(getByText('animals'))
    expect(onChange).not.toBeCalled()
  })

  test('render the DOM structure when hidden', async () => {
    const { queryByText } = render(
      <CapsuleTabs>
        <CapsuleTabs.Tab title='fruits' key='fruits'>
          Apple
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title='vegetables' key='vegetables'>
          Tomato
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title='animals' key='animals' forceRender>
          Ant
        </CapsuleTabs.Tab>
      </CapsuleTabs>
    )

    expect(queryByText('Ant')).toBeInTheDocument()
  })

  test('unmount content when not visible', async () => {
    const { getByText, queryByText } = render(
      <CapsuleTabs>
        <CapsuleTabs.Tab title='fruits' key='fruits' destroyOnClose>
          Apple
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title='vegetables' key='vegetables'>
          Tomato
        </CapsuleTabs.Tab>
        <CapsuleTabs.Tab title='animals' key='animals'>
          Ant
        </CapsuleTabs.Tab>
      </CapsuleTabs>
    )
    expect(queryByText('Apple')).toBeInTheDocument()
    fireEvent.click(getByText('vegetables'))
    expect(queryByText('Apple')).not.toBeInTheDocument()
  })
})
