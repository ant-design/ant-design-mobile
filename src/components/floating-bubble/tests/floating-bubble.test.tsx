import React from 'react'
import { render, fireEvent, waitFor, sleep } from 'testing'
import FloatingBubble from '..'

const classPrefix = `adm-floating-bubble`

function mockRect(el: Element, value: any) {
  jest.spyOn(el, 'getBoundingClientRect').mockReturnValue(value)
}

function mockBoundaryRect() {
  const boundary = document.querySelectorAll(`.${classPrefix}-boundary`)[0]
  mockRect(boundary, {
    top: 0,
    right: 300,
    bottom: 600,
    left: 0,
    x: 0,
    y: 0,
  })
}

function mockButtonRect(data: any = {}) {
  const btn = document.querySelectorAll(`.${classPrefix}-button`)[0]
  const defaultRect = {
    x: 252,
    left: 252,
    right: 300,
    y: 500,
    top: 552,
    bottom: 600,
  }
  mockRect(btn, {
    ...defaultRect,
    ...data,
  })
}

describe('FloatingBubble', () => {
  test('onClick should be called', async () => {
    const onClick = jest.fn()
    render(<FloatingBubble onClick={onClick} />)
    const btn = document.querySelectorAll(`.${classPrefix}-button`)[0]
    fireEvent.click(btn)
    waitFor(() => expect(onClick).toBeCalled())
  })

  test('automatic magnetic attraction to the left', async () => {
    render(<FloatingBubble axis='xy' magnetic='x' />)
    mockBoundaryRect()
    const btn = document.querySelectorAll(`.${classPrefix}-button`)[0]
    mockButtonRect()

    fireEvent.mouseDown(btn, {
      buttons: 1,
      clientX: 303,
    })
    fireEvent.mouseMove(btn, {
      buttons: 1,
      clientX: 100,
    })
    mockButtonRect({
      x: 100,
      left: 100,
      right: 148,
    })
    fireEvent.mouseUp(btn)

    await waitFor(() =>
      expect(btn).toHaveStyle('transform: translate(-300px, 0px)')
    )
  })

  test('automatic magnetic attraction to the right', async () => {
    render(<FloatingBubble axis='xy' magnetic='x' />)
    mockBoundaryRect()
    const btn = document.querySelectorAll(`.${classPrefix}-button`)[0]
    mockButtonRect()

    fireEvent.mouseDown(btn, {
      buttons: 1,
      clientX: 255,
    })
    fireEvent.mouseMove(btn, {
      buttons: 1,
      clientX: 200,
    })
    mockButtonRect({
      x: 200,
      left: 200,
      right: 248,
    })
    fireEvent.mouseUp(btn)

    await sleep(0)
    expect(btn).toHaveStyle('transform: translate(0px, 0px)')
  })

  test('automatic magnetic attraction to the top', async () => {
    render(<FloatingBubble axis='xy' magnetic='y' />)
    mockBoundaryRect()
    const btn = document.querySelectorAll(`.${classPrefix}-button`)[0]
    mockButtonRect()

    fireEvent.mouseDown(btn, {
      buttons: 1,
      clientY: 503,
    })
    fireEvent.mouseMove(btn, {
      buttons: 1,
      clientY: 200,
    })
    mockButtonRect({
      y: 200,
      top: 200,
      bottom: 248,
    })
    fireEvent.mouseUp(btn)

    await waitFor(() =>
      expect(btn).toHaveStyle('transform: translate(0px, -500px)')
    )
  })

  test('automatic magnetic attraction to the top', async () => {
    render(<FloatingBubble axis='xy' magnetic='y' />)
    mockBoundaryRect()
    const btn = document.querySelectorAll(`.${classPrefix}-button`)[0]
    mockButtonRect()

    fireEvent.mouseDown(btn, {
      buttons: 1,
      clientY: 603,
    })
    fireEvent.mouseMove(btn, {
      buttons: 1,
      clientY: 548,
    })
    mockButtonRect({
      y: 500,
      top: 500,
      bottom: 548,
    })
    fireEvent.mouseUp(btn)

    await sleep(0)
    expect(btn).toHaveStyle('transform: translate(0px, 0px)')
  })
})
