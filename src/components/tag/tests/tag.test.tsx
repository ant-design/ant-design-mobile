import React from 'react'
import { render, testA11y } from 'testing'
import Tag from '..'

describe('Tag', () => {
  test('a11y', async () => {
    await testA11y(<Tag>tag</Tag>)
  })

  test('renders with color', async () => {
    const { container } = await render(
      <>
        <Tag color='#primary'>primary</Tag>
        <Tag color='#2db7f5'>#2db7f5</Tag>
      </>
    )

    expect(container).toMatchSnapshot()
  })

  test('renders with fill', async () => {
    const { container } = await render(
      <>
        <Tag fill='outline'>outline</Tag>
        <Tag fill='solid'>solid</Tag>
      </>
    )

    expect(container).toMatchSnapshot()
  })
})
