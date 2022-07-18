import React from 'react'
import { render, screen } from 'testing'
import ProgressBar from '..'

const classPrefix = `adm-progress-bar`

describe('ProgressBar', () => {
  test('renders with percent', () => {
    render(<ProgressBar percent={20} />)
    const bar = document.querySelector(`.${classPrefix}-fill`)
    expect(bar).toHaveStyle('width: 20%')
  })

  test('renders with progress text', () => {
    render(<ProgressBar percent={20} text />)
    expect(screen.getByText('20%')).toBeInTheDocument()
  })

  test('renders with function text', () => {
    render(<ProgressBar percent={20} text={percent => `percent:${percent}`} />)
    expect(screen.getByText('percent:20')).toBeInTheDocument()
  })
})
