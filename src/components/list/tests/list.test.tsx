import React, { createRef } from 'react'
import { render, screen, testA11y } from 'testing'
import List from '..'
import ConfigProvider from '../../config-provider'
import { ListRef } from '../list'

describe('list', () => {
  test('a11y', async () => {
    await testA11y(
      <List>
        <List.Item>1</List.Item>
      </List>
    )
  })

  test('should works given ref', async () => {
    const ref = createRef<ListRef>()
    const { baseElement } = render(
      <List ref={ref}>
        <List.Item>1</List.Item>
      </List>
    )
    expect(ref.current).toBeDefined()
    expect(ref.current?.nativeElement).toBeDefined()
    expect(baseElement).toMatchSnapshot()
  })

  describe('arrow', () => {
    it('show arrow', () => {
      const { baseElement } = render(
        <List>
          <List.Item arrow />
        </List>
      )
      expect(
        baseElement.querySelector('.adm-list-item-content-arrow')
      ).toBeTruthy()
    })

    it('legacy arrow', () => {
      render(
        <List>
          <List.Item arrow='little' />
        </List>
      )
      expect(screen.getByText('little')).toBeVisible()
    })

    it('arrowIcon', () => {
      render(
        <List>
          <List.Item arrow='little' arrowIcon='bamboo' />
        </List>
      )
      expect(screen.getByText('bamboo')).toBeVisible()
    })

    it('context', () => {
      render(
        <ConfigProvider
          list={{ arrowIcon: 'little' }}
          prefixCls='config-prefix'
        >
          <List>
            <List.Item clickable />
          </List>
        </ConfigProvider>
      )

      expect(document.querySelector('.config-prefix-list')).toBeTruthy()
      expect(screen.getByText('little')).toBeVisible()
    })

    it('props override context', () => {
      render(
        <ConfigProvider
          list={{ arrowIcon: 'little' }}
          prefixCls='config-prefix'
        >
          <List prefixCls='list-prefix'>
            <List.Item clickable arrowIcon='bamboo' prefixCls='item-prefix' />
          </List>
        </ConfigProvider>
      )
      expect(document.querySelector('.item-prefix')).toBeTruthy()
      expect(document.querySelector('.list-prefix')).toBeTruthy()
      expect(document.querySelector('.config-prefix-list')).toBeFalsy()
      expect(screen.getByText('bamboo')).toBeVisible()
    })
  })
})
