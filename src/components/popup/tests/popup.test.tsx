import * as React from 'react'
import { render, cleanup, fireEvent, mockDrag } from 'testing'
import Popup from '..'

describe('Popup', () => {
  test('Swipe should be closed', () => {
    const onClose = jest.fn()
    render(
      <Popup visible={true} onClose={onClose} closeWhenSwipe position='top'>
        <div style={{ height: '400px', width: '400px' }}></div>
      </Popup>
    )

    const draggableElement = document.querySelector(
      '.adm-popup-body'
    ) as Element

    mockDrag(draggableElement, [
      { clientY: 160 },
      { clientY: 100 },
      { clientY: 60 },
      { clientY: 0 },
    ])

    expect(onClose).toBeCalledTimes(1)
  })

  test('Swipe should’t be closed', () => {
    const onClose = jest.fn()
    render(
      <Popup visible={true} onClose={onClose} position='top'>
        <div style={{ height: '400px', width: '400px' }}></div>
      </Popup>
    )

    const draggableElement = document.querySelector(
      '.adm-popup-body'
    ) as Element

    mockDrag(draggableElement, [
      { clientY: 160 },
      { clientY: 100 },
      { clientY: 60 },
      { clientY: 0 },
    ])

    expect(onClose).toBeCalledTimes(0)
  })
})
