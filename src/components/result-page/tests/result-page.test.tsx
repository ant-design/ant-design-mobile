import React from 'react'
import { render, screen } from 'testing'
import ResultPage from '..'

const classPrefix = 'adm-result-page'

describe('ResultPage', () => {
  test('renders with success status', () => {
    render(
      <ResultPage
        status='success'
        title='title'
        description='desc'
        primaryButtonText='primary'
        secondaryButtonText='secondary'
      />
    )
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('desc')).toBeInTheDocument()
    expect(screen.getByText('primary')).toBeInTheDocument()
    expect(screen.getByText('secondary')).toBeInTheDocument()
  })

  test('renders with details: null', () => {
    render(
      <ResultPage
        status='success'
        title='title'
        description='desc'
        details={null}
      />
    )
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('desc')).toBeInTheDocument()
    expect(document.querySelector(`.${classPrefix}-detail`)).not.toBeInTheDocument()
  })

  test('renders with no footer', () => {
    render(<ResultPage status='success' title='title' description='desc' />)
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('desc')).toBeInTheDocument()
    expect(document.querySelector(`.${classPrefix}-footer`)).not.toBeInTheDocument()
  })
})
