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
        <ConfigProvider list={{ arrowIcon: 'little' }}>
          <List>
            <List.Item clickable />
          </List>
        </ConfigProvider>
      )

      expect(screen.getByText('little')).toBeVisible()
    })

    it('props override context', () => {
      render(
        <ConfigProvider list={{ arrowIcon: 'little' }}>
          <List>
            <List.Item clickable arrowIcon='bamboo' />
          </List>
        </ConfigProvider>
      )

      expect(screen.getByText('bamboo')).toBeVisible()
    })
  })
})
