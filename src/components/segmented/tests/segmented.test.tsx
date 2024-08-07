import React, { useState } from 'react'
import { render, testA11y, fireEvent } from 'testing'
import { AppOutline, UnorderedListOutline } from 'antd-mobile-icons'

import Segmented from '..'
import type { SegmentedValue } from '..'

const classPrefix = `adm-segmented`

function expectMatchChecked(container: HTMLElement, checkedList: boolean[]) {
  const inputList = Array.from(
    container.querySelectorAll<HTMLInputElement>(`.${classPrefix}-item-input`)
  )
  expect(inputList).toHaveLength(checkedList.length)

  inputList.forEach((input, i) => {
    const checked = checkedList[i]

    expect(input.checked).toBe(checked)
  })
}

describe('adm-segmented', () => {
  test('a11y', async () => {
    await testA11y(
      <Segmented
        options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
      />
    )
  })

  test('render empty segmented', () => {
    const { asFragment } = render(<Segmented options={[]} />)
    expect(asFragment().firstChild).toMatchSnapshot()
  })

  test('render segmented ok', () => {
    const { asFragment, container } = render(
      <Segmented
        options={[{ label: 'Daily', value: 'Daily' }, 'Weekly', 'Monthly']}
      />
    )

    expect(asFragment().firstChild).toMatchSnapshot()

    expectMatchChecked(container, [true, false, false])
  })

  test('render label with ReactNode', () => {
    const { asFragment, container } = render(
      <Segmented
        options={[
          { label: 'Daily', value: 'Daily' },
          { label: <div id='weekly'>Weekly</div>, value: 'Weekly' },
          { label: <div className='little'>Monthly</div>, value: 'Monthly' },
        ]}
      />
    )

    expect(asFragment().firstChild).toMatchSnapshot()

    expectMatchChecked(container, [true, false, false])

    expect(container.querySelector('#weekly')?.textContent).toContain('Weekly')
    expect(container.querySelector('.little')?.textContent).toContain('Monthly')
  })

  test('render segmented with defaultValue', () => {
    const { container } = render(
      <Segmented
        options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
        defaultValue='Quarterly'
      />
    )

    expectMatchChecked(container, [false, false, false, true, false])
  })

  test('render segmented with string options', () => {
    const handleValueChange = jest.fn()
    const { asFragment, container } = render(
      <Segmented
        options={['Daily', 'Weekly', 'Monthly']}
        onChange={handleValueChange}
      />
    )
    expect(asFragment().firstChild).toMatchSnapshot()

    expectMatchChecked(container, [true, false, false])
    expect(
      container
        .querySelectorAll(`label.${classPrefix}-item`)[0]
        .classList.contains(`${classPrefix}-item-selected`)
    ).toBeTruthy()

    fireEvent.click(container.querySelectorAll(`.${classPrefix}-item-input`)[2])
    expect(handleValueChange).toHaveBeenCalledWith('Monthly')

    expectMatchChecked(container, [false, false, true])
  })

  test('render segmented with numeric options', () => {
    const handleValueChange = jest.fn()
    const { asFragment, container } = render(
      <Segmented
        options={[1, 2, 3, 4, 5]}
        onChange={value => handleValueChange(value)}
      />
    )
    expect(asFragment().firstChild).toMatchSnapshot()
    expectMatchChecked(container, [true, false, false, false, false])

    fireEvent.click(container.querySelectorAll(`.${classPrefix}-item-input`)[4])
    expect(handleValueChange).toHaveBeenCalledWith(5)

    expectMatchChecked(container, [false, false, false, false, true])
  })

  test('render segmented with mixed options', () => {
    const handleValueChange = jest.fn()
    const { asFragment, container } = render(
      <Segmented
        options={['Daily', { label: 'Weekly', value: 'Weekly' }, 'Monthly']}
        onChange={value => handleValueChange(value)}
      />
    )
    expect(asFragment().firstChild).toMatchSnapshot()
    expectMatchChecked(container, [true, false, false])

    fireEvent.click(container.querySelectorAll(`.${classPrefix}-item-input`)[1])
    expect(handleValueChange).toHaveBeenCalledWith('Weekly')

    expectMatchChecked(container, [false, true, false])
  })

  test('render segmented with options: disabled', () => {
    const handleValueChange = jest.fn()
    const { asFragment, container } = render(
      <Segmented
        options={[
          'Daily',
          { label: 'Weekly', value: 'Weekly', disabled: true },
          'Monthly',
        ]}
        onChange={value => handleValueChange(value)}
      />
    )
    expect(asFragment().firstChild).toMatchSnapshot()
    expect(
      container
        .querySelectorAll(`label.${classPrefix}-item`)[1]
        .classList.contains(`${classPrefix}-item-disabled`)
    ).toBeTruthy()
    expect(
      container.querySelectorAll(`.${classPrefix}-item-input`)[1]
    ).toHaveAttribute('disabled')

    fireEvent.click(container.querySelectorAll(`.${classPrefix}-item-input`)[1])
    expect(handleValueChange).not.toHaveBeenCalled()

    expectMatchChecked(container, [true, false, false])

    fireEvent.click(container.querySelectorAll(`.${classPrefix}-item-input`)[2])
    expect(handleValueChange).toHaveBeenCalledWith('Monthly')
    expect(handleValueChange).toHaveBeenCalledTimes(1)

    expectMatchChecked(container, [false, false, true])
  })

  test('render segmented: disabled', () => {
    const handleValueChange = jest.fn()
    const { asFragment, container } = render(
      <Segmented
        disabled
        options={['Daily', 'Weekly', 'Monthly']}
        onChange={value => handleValueChange(value)}
      />
    )
    expect(asFragment().firstChild).toMatchSnapshot()
    expect(
      container
        .querySelectorAll(`.${classPrefix}`)[0]
        .classList.contains(`${classPrefix}-disabled`)
    ).toBeTruthy()

    fireEvent.click(container.querySelectorAll(`.${classPrefix}-item-input`)[1])
    expect(handleValueChange).not.toHaveBeenCalled()

    expectMatchChecked(container, [true, false, false])

    fireEvent.click(container.querySelectorAll(`.${classPrefix}-item-input`)[2])
    expect(handleValueChange).not.toHaveBeenCalled()

    expectMatchChecked(container, [true, false, false])
  })

  test('render segmented with className and other html attributes', () => {
    const { container } = render(
      <Segmented
        options={['Daily', 'Monthly', 'Weekly']}
        defaultValue='Weekly'
        className='mock-cls'
        data-test-id='hello'
      />
    )

    expect(container.querySelector('.mock-cls')).toBeTruthy()
    expect(container.querySelector('[data-test-id]')).toHaveAttribute(
      'data-test-id',
      'hello'
    )
  })

  test('render segmented with ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(
      <Segmented
        options={['Daily', 'Monthly', 'Weekly']}
        defaultValue='Weekly'
        ref={ref}
      />
    )

    expect(ref.current).toBe(container.querySelector(`.${classPrefix}`))
  })

  test('render segmented with controlled mode', async () => {
    const Demo: React.FC = () => {
      const [value, setValue] = useState<SegmentedValue>('Map')
      return (
        <>
          <Segmented
            options={['Map', 'Transit', 'Satellite']}
            value={value}
            onChange={setValue}
          />
          <div className='value'>{value}</div>
          <input
            className='control'
            onChange={e => {
              setValue(e.target.value)
            }}
          />
        </>
      )
    }
    const { container } = render(<Demo />)
    fireEvent.click(container.querySelectorAll(`.${classPrefix}-item-input`)[0])
    expect(container.querySelector('.value')?.textContent).toBe('Map')

    fireEvent.click(container.querySelectorAll(`.${classPrefix}-item-input`)[1])
    expect(container.querySelector('.value')?.textContent).toBe('Transit')
  })

  test('render segmented with options null/undefined', () => {
    const handleValueChange = jest.fn()
    const { asFragment, container } = render(
      <Segmented
        options={[null, undefined, ''] as any}
        disabled
        onChange={value => handleValueChange(value)}
      />
    )
    expect(asFragment().firstChild).toMatchSnapshot()
    expect(
      Array.from(container.querySelectorAll(`.${classPrefix}-item-label`)).map(
        n => n.textContent
      )
    ).toEqual(['', '', ''])
  })

  test('render segmented with thumb', () => {
    const handleValueChange = jest.fn()
    const { asFragment, container } = render(
      <Segmented
        options={['Map', 'Transit', 'Satellite']}
        onChange={value => handleValueChange(value)}
      />
    )
    expect(asFragment().firstChild).toMatchSnapshot()

    expectMatchChecked(container, [true, false, false])
    expect(
      container
        .querySelectorAll(`label.${classPrefix}-item`)[0]
        .classList.contains(`${classPrefix}-item-selected`)
    ).toBeTruthy()

    fireEvent.click(container.querySelectorAll(`.${classPrefix}-item-input`)[2])
    expect(handleValueChange).toHaveBeenCalledWith('Satellite')

    expectMatchChecked(container, [false, false, true])

    // change selection again
    fireEvent.click(container.querySelectorAll(`.${classPrefix}-item-input`)[1])
    expect(handleValueChange).toHaveBeenCalledWith('Transit')

    expectMatchChecked(container, [false, true, false])
  })

  test('render segmented with `block`', () => {
    const { asFragment, container } = render(
      <Segmented block options={['Daily', 'Weekly', 'Monthly']} />
    )

    expect(asFragment().firstChild).toMatchSnapshot()

    expect(
      container
        .querySelectorAll(`.${classPrefix}`)[0]
        .classList.contains(`${classPrefix}-block`)
    ).toBeTruthy()
  })

  test('render with icons', () => {
    const { asFragment, container } = render(
      <Segmented
        options={[
          {
            value: 'List',
            icon: <UnorderedListOutline />,
          },
          {
            value: 'Kanban',
            label: 'KanbanYes',
            icon: <AppOutline />,
          },
        ]}
      />
    )
    expect(asFragment().firstChild).toMatchSnapshot()
    expect(
      container.querySelectorAll(`span.${classPrefix}-item-icon`).length
    ).toBe(2)
    expect(
      container
        .querySelectorAll(`div.${classPrefix}-item-label`)[1]
        .textContent?.includes('KanbanYes')
    ).toBeTruthy()
  })
})
