import React from 'react'
import { render, testA11y } from 'testing'
import Avatar from '..'

const demoImage =
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'

describe('Avatar', () => {
  test('a11y', async () => {
    await testA11y(<Avatar src={demoImage} />)
  })

  test('default image', async () => {
    render(<Avatar src='' />)
    expect(document.querySelectorAll('.adm-avatar-fallback')[0]).toBeVisible()
  })
})
