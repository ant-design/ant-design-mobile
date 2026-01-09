import React from 'react'
import { act, screen, waitFor } from 'testing'

import { renderToBody } from '../render-to-body'

describe('render utils', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('renderToBody should append to document.body and unmount', async () => {
    let unmount: (() => void) | undefined
    const initialBody = document.body.innerHTML
    act(() => {
      unmount = renderToBody(<div data-testid='to-body'>ok</div>)
    })

    await waitFor(() => expect(screen.getByTestId('to-body')).toBeTruthy())

    const el = screen.getByTestId('to-body')
    // renderToBody 添加的临时 root
    const parentTempDiv = el.parentElement
    expect(parentTempDiv?.parentElement).toBe(document.body)

    act(() => {
      unmount!()
    })

    await waitFor(() => expect(screen.queryByTestId('to-body')).toBeNull())
    // after unmount, the document body should be the same as before render
    expect(document.body.innerHTML).toBe(initialBody)
  })
})
