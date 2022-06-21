import React, { createRef } from 'react'
import { render, testA11y } from 'testing'
import List from '..'
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
})
