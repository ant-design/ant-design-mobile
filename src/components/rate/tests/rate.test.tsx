import React from 'react'
import { render, testA11y, fireEvent, screen, mockDrag } from 'testing'
import Rate from '..'

const classPrefix = `adm-rate`

describe('Rate', () => {
  const getBoundingClientRectMock = jest.spyOn(
    HTMLElement.prototype,
    'getBoundingClientRect'
  )

  beforeAll(() => {
    getBoundingClientRectMock.mockReturnValue({
      left: 12,
      width: 155.9375,
    } as DOMRect)
  })

  test('a11y', async () => {
    await testA11y(<Rate />)
  })

  test('readOnly should be work', () => {
    const onChange = jest.fn()
    render(<Rate value={4} readOnly onChange={onChange} />)
    const radioGroup = screen.getByRole('radiogroup')
    const radio = screen.getByRole('radio', { name: '1' })
    mockDrag(radioGroup, [
      {
        clientX: 0,
      },
      {
        clientX: 100,
      },
    ])
    expect(radio).toHaveClass(`${classPrefix}-star-readonly`)
    expect(onChange).not.toBeCalled()
  })

  test('allowHalf should be work', () => {
    render(<Rate allowHalf />)
    const radio = screen.getByRole('radio', { name: '1.5' })
    const shouldNotActiveRadio = screen.getByRole('radio', { name: '2' })
    const radioGroup = screen.getByRole('radiogroup')

    mockDrag(radioGroup, [
      {
        clientX: 54,
      },
      {
        clientX: 54,
      },
    ])

    expect(radio).toHaveClass(`${classPrefix}-star-half`)
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
    expect(shouldNotActiveRadio).not.toHaveClass(`${classPrefix}-star-active`)
    mockDrag(radioGroup, [
      {
        clientX: 54,
      },
      {
        clientX: 54,
      },
    ])
    expect(
      document.querySelectorAll(`.${classPrefix}-star-active`)
    ).toHaveLength(0)
  })

  test('can not clear', () => {
    render(<Rate allowClear={false} defaultValue={1} />)
    const radio = screen.getByRole('radio', { name: '1' })
    const radioGroup = screen.getByRole('radiogroup')
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
    mockDrag(radioGroup, [{ clientX: 40 }, { clientX: 40 }])
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
  })
})
