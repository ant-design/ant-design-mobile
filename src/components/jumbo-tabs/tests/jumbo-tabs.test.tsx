import React, { useState } from 'react'
import { render, testA11y, fireEvent } from 'testing'
import JumboTabs, { JumboTabsProps } from '..'

const classPrefix = `adm-jumbo-tabs`

describe('JumboTabs', () => {
  const Basic = (props: JumboTabsProps) => (
    <JumboTabs {...props}>
      <JumboTabs.Tab title='fruits' description='fruits-desc' key='fruits'>
        Apple
      </JumboTabs.Tab>
      <JumboTabs.Tab
        title='vegetables'
        description='vegetables-desc'
        key='vegetables'
      >
        Tomato
      </JumboTabs.Tab>
      <JumboTabs.Tab title='animals' description='animals-desc' key='animals'>
        Ant
      </JumboTabs.Tab>
    </JumboTabs>
  )
  test('a11y', async () => {
    await testA11y(<Basic />)
  })

  test('basic usage', async () => {
    const { getByText } = render(<Basic defaultActiveKey='animals' />)
    expect(getByText('Ant')).toBeVisible()
    expect(getByText('animals').parentElement).toHaveClass(
      `${classPrefix}-tab-active`
    )
    fireEvent.click(getByText('vegetables'))
    expect(getByText('Tomato')).toBeVisible()
    expect(getByText('vegetables').parentElement).toHaveClass(
      `${classPrefix}-tab-active`
    )
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
      <JumboTabs onChange={onChange}>
        <JumboTabs.Tab title='fruits' description='description' key='fruits' />
        <JumboTabs.Tab
          title='vegetables'
          description='description'
          key='vegetables'
        />
        <JumboTabs.Tab
          title='animals'
          description='description'
          key='animals'
          disabled
        />
      </JumboTabs>
    )

    expect(getByText('animals').parentElement).toHaveClass(
      `${classPrefix}-tab-disabled`
    )
    fireEvent.click(getByText('animals'))
    expect(onChange).not.toBeCalled()
  })

  test('render the DOM structure when hidden', async () => {
    const { queryByText } = render(
      <JumboTabs>
        <JumboTabs.Tab title='fruits' description='description' key='fruits'>
          Apple
        </JumboTabs.Tab>
        <JumboTabs.Tab
          title='vegetables'
          description='description'
          key='vegetables'
        >
          Tomato
        </JumboTabs.Tab>
        <JumboTabs.Tab
          title='animals'
          description='description'
          key='animals'
          forceRender
        >
          Ant
        </JumboTabs.Tab>
      </JumboTabs>
    )

    expect(queryByText('Ant')).toBeInTheDocument()
  })

  test('unmount content when not visible', async () => {
    const { getByText, queryByText } = render(
      <JumboTabs>
        <JumboTabs.Tab
          title='fruits'
          description='description'
          key='fruits'
          destroyOnClose
        >
          Apple
        </JumboTabs.Tab>
        <JumboTabs.Tab
          title='vegetables'
          description='description'
          key='vegetables'
        >
          Tomato
        </JumboTabs.Tab>
        <JumboTabs.Tab title='animals' description='description' key='animals'>
          Ant
        </JumboTabs.Tab>
      </JumboTabs>
    )
    expect(queryByText('Apple')).toBeInTheDocument()
    fireEvent.click(getByText('vegetables'))
    expect(queryByText('Apple')).not.toBeInTheDocument()
  })
})
