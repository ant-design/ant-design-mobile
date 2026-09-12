import React from 'react'
import { render, screen, userEvent } from 'testing'
import NavBar from '..'
import ConfigProvider from '../../config-provider'
import enUS from '../../../locales/en-US'

describe('NavBar', () => {
  test('render title', () => {
    render(<NavBar>Title</NavBar>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  test('renders a keyboard-accessible back button', async () => {
    const onBack = jest.fn()
    render(
      <NavBar back='Back' onBack={onBack}>
        Title
      </NavBar>
    )

    const backButton = screen.getByRole('button', { name: 'Back' })
    expect(backButton).toHaveAttribute('type', 'button')

    await userEvent.tab()
    expect(backButton).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    expect(onBack).toHaveBeenCalledTimes(1)
  })

  test('keeps the back affordance non-interactive without onBack', () => {
    const { baseElement } = render(<NavBar>Title</NavBar>)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(baseElement.querySelector('.adm-nav-bar-back')).toBeVisible()
  })

  test('provides a localized name for an icon-only back button', () => {
    const onBack = jest.fn()
    render(
      <ConfigProvider locale={enUS}>
        <NavBar onBack={onBack}>Title</NavBar>
      </ConfigProvider>
    )

    expect(screen.getByRole('button', { name: 'Back' })).toBeVisible()
  })

  test('provides a name when both the back text and icon are hidden', () => {
    const onBack = jest.fn()
    render(
      <ConfigProvider locale={enUS}>
        <NavBar backIcon={false} onBack={onBack}>
          Title
        </NavBar>
      </ConfigProvider>
    )

    expect(screen.getByRole('button', { name: 'Back' })).toBeVisible()
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
