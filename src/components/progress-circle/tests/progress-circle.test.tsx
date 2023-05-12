import React from 'react'
import { render, screen } from 'testing'
import ProgressCircle from '..'

const classPrefix = `adm-progress-circle`

describe('ProgressBar', () => {
  test('renders with percent', () => {
    render(<ProgressCircle percent={20} />)
    expect(document.querySelector(`.${classPrefix}`)).toHaveStyle(
      '--percent:20;'
    )
  })

  test('renders with percent text', () => {
    render(<ProgressCircle percent={50}>50%</ProgressCircle>)
    expect(screen.getByText('50%')).toBeInTheDocument()
  })
})
