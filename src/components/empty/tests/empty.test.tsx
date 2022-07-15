import React from 'react'
import { render, screen } from 'testing'
import Empty from '..'

const classPrefix = `adm-empty`

describe('Result', () => {
  test('basic usage', () => {
    render(<Empty />)
    expect(document.querySelector(`.${classPrefix}-image`)).toBeInTheDocument()
  })

  test('renders with string image', () => {
    render(<Empty image='url' />)
    expect(screen.getByRole('img')).toHaveAttribute('src', 'url')
  })
})
