import * as React from 'react'
import { render, cleanup, fireEvent, mockDrag } from 'testing'
import Popup from '..'

describe('Popup', () => {
  test('top swipe should be closed', () => {
    const onClose = jest.fn()
    render(
      <Popup visible={true} onClose={onClose} closeWhenSwipe position='top'>
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

  test('left swipe should be closed', () => {
    const onClose = jest.fn()
    render(
      <Popup visible={true} onClose={onClose} closeWhenSwipe position='left'>
        <div style={{ height: '400px', width: '400px' }}></div>
      </Popup>
    )

    mockDrag(
      document.querySelector('.adm-popup') as Element,
      new Array(8).fill(0).map((_, i) => {
        return {
          clientX: 50 * i,
        }
      })
    )

    expect(onClose).toBeCalledTimes(0)

    mockDrag(
      document.querySelector('.adm-popup') as Element,
      new Array(8).fill(0).map((_, i) => {
        return {
          clientX: 400 - 50 * i,
        }
      })
    )

    expect(onClose).toBeCalledTimes(1)
  })

  test('bottom swipe should be closed', () => {
    const onClose = jest.fn()
    render(
      <Popup visible={true} onClose={onClose} closeWhenSwipe position='bottom'>
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

  test('right swipe should be closed', () => {
    const onClose = jest.fn()
    render(
      <Popup visible={true} onClose={onClose} closeWhenSwipe position='right'>
        <div style={{ height: '400px', width: '400px' }}></div>
      </Popup>
    )

    mockDrag(
      document.querySelector('.adm-popup') as Element,
      new Array(8).fill(0).map((_, i) => {
        return {
          clientX: 50 * i,
        }
      })
    )

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
