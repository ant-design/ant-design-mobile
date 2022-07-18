import React from 'react'
import { render, testA11y, fireEvent, screen } from 'testing'
import Rate from '..'

const classPrefix = `adm-rate`

describe('Rate', () => {
  test('a11y', async () => {
    await testA11y(<Rate />)
  })

  test('readOnly should be work', () => {
    const onChange = jest.fn()
    render(<Rate value={4} readOnly onChange={onChange} />)
    const radio = screen.getByRole('radio', { name: '1' })
    fireEvent.click(radio)
    expect(radio).toHaveClass(`${classPrefix}-star-readonly`)
    expect(onChange).not.toBeCalled()
  })

  test('allowHalf should be work', () => {
    render(<Rate allowHalf />)
    const radio = screen.getByRole('radio', { name: '1.5' })
    const input = screen.getByRole('slider')
    fireEvent.change(input, {
      target: {
        value: 1.5,
      },
    })
    expect(radio).toHaveClass(`${classPrefix}-star-half`)
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
    fireEvent.change(input, {
      target: {
        value: 0,
      },
    })
    expect(
      document.querySelectorAll(`.${classPrefix}-star-active`)
    ).toHaveLength(0)
  })

  test('can not clear', () => {
    render(<Rate allowClear={false} defaultValue={1} />)
    const radio = screen.getByRole('radio', { name: '1' })
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
    fireEvent.click(radio)
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
  })
})
