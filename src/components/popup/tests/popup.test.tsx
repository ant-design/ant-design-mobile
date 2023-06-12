import * as React from 'react'
import { render, mockDrag } from 'testing'
import Popup from '..'

describe('Popup', () => {
  test('top swipe should be closed', () => {
    const onClose = jest.fn()
    render(
      <Popup visible onClose={onClose} position='top' closeOnSwipe>
        <div style={{ height: '400px', width: '400px' }}></div>
      </Popup>
    )

    mockDrag(
      document.querySelector('.adm-popup') as Element,
      new Array(8).fill(0).map((_, i) => {
        return {
          clientY: 400 - 50 * i,
        }
      })
    )

    expect(onClose).toBeCalledTimes(1)
  })

  test('bottom swipe should be closed', () => {
    const onClose = jest.fn()
    render(
      <Popup visible onClose={onClose} position='bottom' closeOnSwipe>
        <div style={{ height: '400px', width: '400px' }}></div>
      </Popup>
    )

    mockDrag(
      document.querySelector('.adm-popup') as Element,
      new Array(8).fill(0).map((_, i) => {
        return {
          clientY: 50 * i,
        }
      })
    )

    expect(onClose).toBeCalledTimes(1)
  })
})
