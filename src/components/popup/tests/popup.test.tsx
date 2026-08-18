import * as React from 'react'
import { act, mockDrag, render, screen, testA11y } from 'testing'
import Popup from '..'
import ConfigProvider from '../../config-provider'

function setVisibilityState(state: 'visible' | 'hidden') {
  Object.defineProperty(document, 'visibilityState', {
    value: state,
    writable: true,
    configurable: true,
  })
}

describe('Popup', () => {
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
    await testA11y(<Popup visible>foobar</Popup>)
  })

  test('top swipe should be closed', async () => {
    const onClose = jest.fn()
    render(
      <Popup visible onClose={onClose} position='top' closeOnSwipe>
        <div style={{ height: '400px', width: '400px' }}></div>
      </Popup>
    )

    await mockDrag(
      document.querySelector('.adm-popup') as Element,
      new Array(4).fill(0).map((_, i) => {
        return {
          clientY: 400 - 50 * i,
        }
      }),
      5
    )
    expect(onClose).toBeCalledTimes(1)
  })

  test('bottom swipe should be closed', async () => {
    const onClose = jest.fn()
    render(
      <Popup visible onClose={onClose} position='bottom' closeOnSwipe>
        <div style={{ height: '400px', width: '400px' }}></div>
      </Popup>
    )

    await mockDrag(
      document.querySelector('.adm-popup') as Element,
      new Array(6).fill(0).map((_, i) => {
        return {
          clientY: 50 * i,
        }
      }),
      5
    )
    expect(onClose).toBeCalledTimes(1)
  })

  describe('closeIcon', () => {
    it('default', () => {
      const { baseElement } = render(
        <Popup visible showCloseButton>
          foobar
        </Popup>
      )
      expect(baseElement.querySelector('.antd-mobile-icon')).toBeTruthy()
    })

    it('props', () => {
      render(
        <Popup visible showCloseButton closeIcon='bamboo'>
          foobar
        </Popup>
      )
      expect(screen.getByText('bamboo')).toBeVisible()
    })

    it('context', () => {
      render(
        <ConfigProvider popup={{ closeIcon: 'little' }}>
          <Popup visible showCloseButton>
            foobar
          </Popup>
        </ConfigProvider>
      )

      expect(screen.getByText('little')).toBeVisible()
    })

    it('props override context', () => {
      render(
        <ConfigProvider popup={{ closeIcon: 'little' }}>
          <Popup visible showCloseButton closeIcon='bamboo'>
            foobar
          </Popup>
        </ConfigProvider>
      )

      expect(screen.getByText('bamboo')).toBeVisible()
    })
  })

  describe('visibilitychange', () => {
    it('should call afterClose when page becomes visible after close while hidden', () => {
      const afterClose = jest.fn()
      const { rerender } = render(
        <Popup visible destroyOnClose afterClose={afterClose}>
          foobar
        </Popup>
      )

      setVisibilityState('hidden')
      act(() => {
        document.dispatchEvent(new Event('visibilitychange'))
      })

      rerender(
        <Popup visible={false} destroyOnClose afterClose={afterClose}>
          foobar
        </Popup>
      )

      expect(afterClose).not.toHaveBeenCalled()
      expect(screen.getByText('foobar')).toBeInTheDocument()

      // Simulate page becoming visible (e.g. user switches back to tab)
      setVisibilityState('visible')
      act(() => {
        document.dispatchEvent(new Event('visibilitychange'))
      })

      expect(afterClose).toHaveBeenCalledTimes(1)
      expect(screen.queryByText('foobar')).not.toBeInTheDocument()
    })

    it('should not call afterClose when popup is still visible', () => {
      const afterClose = jest.fn()
      render(
        <Popup visible afterClose={afterClose}>
          foobar
        </Popup>
      )

      setVisibilityState('visible')
      act(() => {
        document.dispatchEvent(new Event('visibilitychange'))
      })

      expect(afterClose).not.toHaveBeenCalled()
    })
  })
})
