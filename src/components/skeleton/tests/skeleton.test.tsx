import React from 'react'
import { render } from 'testing'
import Skeleton from '..'

const classPrefix = `adm-skeleton`

describe('Skeleton', () => {
  test('renders with animated', () => {
    render(<Skeleton animated />)
    expect(document.querySelector(`.${classPrefix}`)).toHaveClass(
      `${classPrefix}-animated`
    )
  })
})

describe('Skeleton.Title', () => {
  test('basic usage', () => {
    render(<Skeleton.Title />)
    expect(document.querySelector(`.${classPrefix}-title`)).toBeInTheDocument()
  })
})

describe('Skeleton.Paragraph', () => {
  test('basic usage', () => {
    render(<Skeleton.Paragraph />)
    expect(
      document.querySelector(`.${classPrefix}-paragraph`)
    ).toBeInTheDocument()
  })

  test('renders with lineCount', () => {
    render(<Skeleton.Paragraph lineCount={5} />)
    expect(
      document.querySelectorAll(`.${classPrefix}-paragraph-line`)
    ).toHaveLength(5)
  })
})
