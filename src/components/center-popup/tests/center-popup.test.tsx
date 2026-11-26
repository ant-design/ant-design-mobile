import React from 'react'
import { act, render, screen, testA11y } from 'testing'
import ConfigProvider from '../../config-provider'
import { CenterPopup } from '../center-popup'

function setVisibilityState(state: 'visible' | 'hidden') {
  Object.defineProperty(document, 'visibilityState', {
    value: state,
    writable: true,
    configurable: true,
  })
}

describe('center-popup', () => {
  const originalVisibilityState = Object.getOwnPropertyDescriptor(
    document,
    'visibilityState'
  )

  afterEach(() => {
    if (originalVisibilityState) {
      Object.defineProperty(
        document,
        'visibilityState',
        originalVisibilityState
      )
    } else {
      delete (document as any).visibilityState
    }
  })

  test('a11y', async () => {
    await testA11y(<CenterPopup visible>foobar</CenterPopup>)
  })

  test('should finish closing after the hidden page becomes visible', () => {
    const afterClose = jest.fn()
    const { rerender } = render(
      <CenterPopup visible destroyOnClose afterClose={afterClose}>
        foobar
      </CenterPopup>
    )

    setVisibilityState('hidden')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    rerender(
      <CenterPopup visible={false} destroyOnClose afterClose={afterClose}>
        foobar
      </CenterPopup>
    )

    expect(afterClose).not.toHaveBeenCalled()
    expect(screen.getByText('foobar')).toBeInTheDocument()

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(afterClose).toHaveBeenCalledTimes(1)
    expect(screen.queryByText('foobar')).not.toBeInTheDocument()
  })

  describe('closeIcon', () => {
    it('default', () => {
      const { baseElement } = render(
        <CenterPopup visible showCloseButton>
          foobar
        </CenterPopup>
      )
      expect(baseElement.querySelector('.antd-mobile-icon')).toBeTruthy()
    })

    it('props', () => {
      render(
        <CenterPopup visible showCloseButton closeIcon='bamboo'>
          foobar
        </CenterPopup>
      )
      expect(screen.getByText('bamboo')).toBeVisible()
    })

    it('context', () => {
      render(
        <ConfigProvider popup={{ closeIcon: 'little' }}>
          <CenterPopup visible showCloseButton>
            foobar
          </CenterPopup>
        </ConfigProvider>
      )

      expect(screen.getByText('little')).toBeVisible()
    })

    it('props override context', () => {
      render(
        <ConfigProvider popup={{ closeIcon: 'little' }}>
          <CenterPopup visible showCloseButton closeIcon='bamboo'>
            foobar
          </CenterPopup>
        </ConfigProvider>
      )

      expect(screen.getByText('bamboo')).toBeVisible()
    })
  })
})
