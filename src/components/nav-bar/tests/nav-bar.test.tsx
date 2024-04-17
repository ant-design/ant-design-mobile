import React from 'react'
import { render, screen } from 'testing'
import NavBar from '..'

const classPrefix = `adm-result`

describe('NavBar', () => {
  test('render title', () => {
    render(<NavBar>Title</NavBar>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })
  test('render back arrow', () => {
    render(<NavBar backIcon>Title</NavBar>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })
  test('render custom back arrow', () => {
    render(<NavBar backIcon={'Back'}>Title</NavBar>)
    expect(screen.getByText('Back')).toBeInTheDocument()
  })
})
