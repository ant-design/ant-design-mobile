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
      const { baseElement } = render(
        <NavBar backArrow={<span className='bamboo' />}>Title</NavBar>
      )
      expect(baseElement.querySelector('.bamboo')).toBeTruthy()
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
      const { baseElement } = render(
        <ConfigProvider navBar={{ backIcon: <span className='little' /> }}>
          <NavBar backIcon>Title</NavBar>
        </ConfigProvider>
      )

      expect(baseElement.querySelector('.little')).toBeTruthy()
    })

    it('props override context', () => {
      const { baseElement } = render(
        <ConfigProvider navBar={{ backIcon: <span className='little' /> }}>
          <NavBar backIcon={<span className='bamboo' />}>Title</NavBar>
        </ConfigProvider>
      )

      expect(baseElement.querySelector('.bamboo')).toBeTruthy()
    })
  })
})
