import React from 'react'
import { render, screen } from 'testing'
import Result from '..'

const classPrefix = `adm-result`

describe('Result', () => {
  test('renders with success status', () => {
    render(<Result status='success' title='title' description='desc' />)
    expect(document.querySelector(`.${classPrefix}`)).toHaveClass(
      `${classPrefix}-success`
    )
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('desc')).toBeInTheDocument()
  })
})
