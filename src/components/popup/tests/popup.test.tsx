import * as React from 'react'
import { render, cleanup, fireEvent, mockDrag } from 'testing'
import Popup from '..'

describe('Popup', () => {
  test('top swipe should be closed', () => {
    const onClose = jest.fn()
    render(
      <Popup visible={true} onClose={onClose} position='top'>
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
      <Popup visible={true} onClose={onClose} position='bottom'>
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
