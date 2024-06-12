import React from 'react'
import { render, screen } from 'testing'
import NavBar from '..'
import ConfigProvider from '../../config-provider'

describe('NavBar', () => {
  test('render title', () => {
    render(<NavBar>Title</NavBar>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  describe('backIcon', () => {
    it('default', () => {
      const { baseElement } = render(<NavBar backIcon>Title</NavBar>)
      expect(baseElement.querySelector('.antd-mobile-icon')).toBeTruthy()
    })

    it('legacy', () => {
      const { baseElement } = render(<NavBar backArrow>Title</NavBar>)
      expect(baseElement.querySelector('.antd-mobile-icon')).toBeTruthy()
    })

    it('props', () => {
      render(<NavBar backIcon='bamboo'>Title</NavBar>)
      expect(screen.getByText('bamboo')).toBeVisible()
    })

    it('props override legacy props', () => {
      render(
        <NavBar backArrow='little' backIcon='bamboo'>
          Title
        </NavBar>
      )
      expect(screen.getByText('bamboo')).toBeVisible()
    })

    it('context', () => {
      render(
        <ConfigProvider navBar={{ backIcon: 'little' }}>
          <NavBar backIcon>Title</NavBar>
        </ConfigProvider>
      )

      expect(screen.getByText('little')).toBeVisible()
    })

    it('props override context', () => {
      render(
        <ConfigProvider navBar={{ backIcon: 'little' }}>
          <NavBar backIcon='bamboo'>Title</NavBar>
        </ConfigProvider>
      )

      expect(screen.getByText('bamboo')).toBeVisible()
    })
  })
})
