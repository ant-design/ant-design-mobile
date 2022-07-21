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
    const radio = screen.getAllByRole('radio', { name: '1' })[0]
    fireEvent.click(radio)
    expect(radio).toHaveClass(`${classPrefix}-star-readonly`)
    expect(onChange).not.toBeCalled()
  })

  test('allowHalf should be work', () => {
    render(<Rate allowHalf />)
    const radio = screen.getAllByRole('radio', { name: '1.5' })[0]
    fireEvent.click(radio)
    expect(radio).toHaveClass(`${classPrefix}-star-half`)
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
    fireEvent.click(radio)

    expect(
      document.querySelectorAll(
        `.${classPrefix}-box > .${classPrefix}-star-active`
      )
    ).toHaveLength(0)
  })

  test('can not clear', () => {
    render(<Rate allowClear={false} defaultValue={1} />)
    const radio = screen.getAllByRole('radio', { name: '1' })[0]
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
    fireEvent.click(radio)
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
  })
})
