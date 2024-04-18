import * as React from 'react'
import { mockDrag, render, screen, testA11y } from 'testing'
import Popup from '..'
import ConfigProvider from '../../config-provider'

describe('Popup', () => {
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
})
