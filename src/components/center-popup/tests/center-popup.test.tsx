import React from 'react'
import { render, screen, testA11y } from 'testing'
import ConfigProvider from '../../config-provider'
import { CenterPopup } from '../center-popup'

describe('center-popup', () => {
  test('a11y', async () => {
    await testA11y(<CenterPopup visible>foobar</CenterPopup>)
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
        <ConfigProvider
          popup={{ closeIcon: 'little' }}
          prefixCls='config-prefix'
        >
          <CenterPopup visible showCloseButton>
            foobar
          </CenterPopup>
        </ConfigProvider>
      )
      expect(document.querySelector('.config-prefix-center-popup')).toBeTruthy()
      expect(screen.getByText('little')).toBeVisible()
    })

    it('props override context', () => {
      render(
        <ConfigProvider
          popup={{ closeIcon: 'little' }}
          prefixCls='config-prefix'
        >
          <CenterPopup
            visible
            showCloseButton
            closeIcon='bamboo'
            prefixCls='component-prefix'
          >
            foobar
          </CenterPopup>
        </ConfigProvider>
      )
      expect(document.querySelector('.component-prefix')).toBeTruthy()
      expect(document.querySelector('.config-prefix-center-popup')).toBeFalsy()
      expect(screen.getByText('bamboo')).toBeVisible()
    })
  })
})
