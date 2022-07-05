import React from 'react'
import { render, testA11y, fireEvent, screen } from 'testing'
import Selector from '..'
import { options } from '../demos/options'

const classPrefix = `adm-selector`

describe('Selector', () => {
  test('a11y', async () => {
    await testA11y(<Selector options={options} />)
  })

  test('onChange should be work', () => {
    const onChange = jest.fn()
    render(<Selector options={options} onChange={onChange} />)

    const label = screen.getByText(options[1].label)
    fireEvent.click(label)
    expect(label).toHaveClass(`${classPrefix}-item-active`)
    expect(onChange.mock.calls[0][0]).toMatchObject([options[1].value])
    expect(onChange.mock.calls[0][1].items).toMatchObject([options[1]])
  })

  test('disabled should be work', () => {
    const onChange = jest.fn()
    render(
      <Selector
        options={[
          {
            label: '1',
            value: '1',
            disabled: true,
          },
        ]}
        onChange={onChange}
      />
    )

    const label = screen.getByText('1')
    expect(label).toHaveClass(`${classPrefix}-item-disabled`)
    fireEvent.click(label)
    expect(onChange).not.toBeCalled()
  })

  test('renders with columns', () => {
    render(<Selector columns={2} options={options} />)
    expect(document.querySelectorAll('.adm-grid')[0]).toBeInTheDocument()
  })

  test('multiple should be work', () => {
    render(<Selector options={options} multiple />)
    const label1 = screen.getByText(options[0].label)
    const label2 = screen.getByText(options[1].label)
    fireEvent.click(label1)
    expect(label1).toHaveClass(`${classPrefix}-item-multiple-active`)
    fireEvent.click(label2)
    expect(label2).toHaveClass(`${classPrefix}-item-multiple-active`)
    expect(
      document.querySelectorAll(`.${classPrefix}-item-multiple-active`)
    ).toHaveLength(2)

    fireEvent.click(label1)
    expect(
      document.querySelectorAll(`.${classPrefix}-item-multiple-active`)
    ).toHaveLength(1)
  })

  test('renders with description', () => {
    render(
      <Selector
        options={[
          {
            label: '1',
            value: '1',
            description: 'desc',
          },
        ]}
      />
    )
    expect(screen.getByText('desc')).toBeInTheDocument()
  })

  test('renders without check mark', () => {
    render(
      <Selector
        options={options}
        showCheckMark={false}
        defaultValue={[options[0].value]}
      />
    )
    const label = screen.getByText(options[0].label)
    expect(label).toHaveClass(`${classPrefix}-item-active`)
    expect(
      document.querySelectorAll(`.${classPrefix}check-mark-wrapper`)
    ).toHaveLength(0)
  })
})
