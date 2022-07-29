import React from 'react'
import { render, testA11y, fireEvent, screen, mockDrag } from 'testing'
import Rate from '..'

const classPrefix = `adm-rate`

describe('Rate', () => {
  test('a11y', async () => {
    await testA11y(<Rate />)
  })

  test('readOnly should be work', () => {
    const onChange = jest.fn()
    render(<Rate value={4} readOnly onChange={onChange} />)
    const radioGroup = screen.getByRole('radiogroup')
    radioGroup.getBoundingClientRect = jest.fn(
      () =>
        ({
          bottom: 82,
          height: 30,
          left: 12,
          right: 167.9375,
          top: 52,
          width: 155.9375,
          x: 12,
          y: 52,
        } as DOMRect)
    )
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
    radioGroup.getBoundingClientRect = jest.fn(
      () =>
        ({
          bottom: 82,
          height: 30,
          left: 12,
          right: 167.9375,
          top: 52,
          width: 155.9375,
          x: 12,
          y: 52,
        } as DOMRect)
    )

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

  test('can clear', () => {
    render(<Rate defaultValue={1} />)
    const radio = screen.getByRole('radio', { name: '1' })
    const radioGroup = screen.getByRole('radiogroup')
    radioGroup.getBoundingClientRect = jest.fn(
      () =>
        ({
          bottom: 82,
          height: 30,
          left: 12,
          right: 167.9375,
          top: 52,
          width: 155.9375,
          x: 12,
          y: 52,
        } as DOMRect)
    )
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
    // fireEvent.click(radio)
    mockDrag(radioGroup, [{ clientX: 40 }, { clientX: 40 }])
    expect(radio).not.toHaveClass(`${classPrefix}-star-active`)
  })

  test('can not clear', () => {
    render(<Rate allowClear={false} defaultValue={1} />)
    const radio = screen.getByRole('radio', { name: '1' })
    const radioGroup = screen.getByRole('radiogroup')
    radioGroup.getBoundingClientRect = jest.fn(
      () =>
        ({
          bottom: 82,
          height: 30,
          left: 12,
          right: 167.9375,
          top: 52,
          width: 155.9375,
          x: 12,
          y: 52,
        } as DOMRect)
    )
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
    mockDrag(radioGroup, [{ clientX: 40 }, { clientX: 40 }])
    expect(radio).toHaveClass(`${classPrefix}-star-active`)
  })
})
