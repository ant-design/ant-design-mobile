import React from 'react'
import { testA11y } from 'testing'
import DotLoading from '..'

describe('DotLoading', () => {
  test('a11y', async () => {
    await testA11y(<DotLoading />)
  })
})
