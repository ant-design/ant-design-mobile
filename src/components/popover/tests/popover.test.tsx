import * as React from 'react'
import { act, fireEvent, render } from 'testing'
import Popover, { PopoverRef } from '..'
import Button from '../../button'

describe('Popover', () => {
  test('Touch outside to move should close Popover', () => {
    const { container } = render(
      <Popover content='Bamboo' trigger='click' defaultVisible>
        <Button />
      </Popover>
    )

    expect(document.querySelector('.adm-popover-hidden')).toBeFalsy()
    expect(
      document.querySelector('.adm-popover-inner-content')?.textContent
    ).toEqual('Bamboo')

    // Not close
    fireEvent.touchMove(document.querySelector('.adm-popover-inner-content')!)
    expect(document.querySelector('.adm-popover-hidden')).toBeFalsy()

    // Close
    fireEvent.touchMove(document.body)
    expect(document.querySelector('.adm-popover-hidden')).toBeTruthy()
  })

  test('Popover should work without ref', () => {
    const My = () => <button>Hi</button>

    const { getByRole } = render(
      <Popover content='Bamboo' trigger='click'>
        <My />
      </Popover>
    )

    expect(
      document.querySelectorAll('*[class^=adm-popover]').length
    ).toBeFalsy()

    // open
    fireEvent.click(getByRole('button'))

    expect(
      document.querySelectorAll('*[class^=adm-popover]').length
    ).toBeTruthy()
    expect(
      document.querySelector('.adm-popover-inner-content')?.textContent
    ).toEqual('Bamboo')

    // close
    fireEvent.click(getByRole('button'))
    expect(document.querySelector('.adm-popover-hidden')).toBeTruthy()
  })

  // https://github.com/ant-design/ant-design-mobile/issues/6731
  test('ref.show() should keep Popover open when already visible under trigger="click"', () => {
    const Wrap = () => {
      const ref = React.useRef<PopoverRef>(null)
      return (
        <>
          <Popover content='Bamboo' trigger='click' ref={ref}>
            <button id='inner'>Hi</button>
          </Popover>
          <button id='ext' onClick={() => ref.current?.show()}>
            external
          </button>
        </>
      )
    }

    const { container } = render(<Wrap />)
    const inner = container.querySelector('#inner') as HTMLElement
    const ext = container.querySelector('#ext') as HTMLElement

    fireEvent.click(inner)
    expect(document.querySelector('.adm-popover-hidden')).toBeFalsy()

    fireEvent.click(ext)
    expect(document.querySelector('.adm-popover-hidden')).toBeFalsy()
  })

  test('after ref.show(), clicking outside should still close Popover', async () => {
    const Wrap = () => {
      const ref = React.useRef<PopoverRef>(null)
      return (
        <>
          <Popover content='Bamboo' trigger='click' ref={ref}>
            <button id='inner'>Hi</button>
          </Popover>
          <button id='ext' onClick={() => ref.current?.show()}>
            external
          </button>
        </>
      )
    }

    const { container } = render(<Wrap />)
    const inner = container.querySelector('#inner') as HTMLElement
    const ext = container.querySelector('#ext') as HTMLElement

    fireEvent.click(inner)
    fireEvent.click(ext)

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    fireEvent.touchMove(document.body)
    expect(document.querySelector('.adm-popover-hidden')).toBeTruthy()
  })

  test('ref.show() should open Popover from closed state', () => {
    const Wrap = () => {
      const ref = React.useRef<PopoverRef>(null)
      return (
        <>
          <Popover content='Bamboo' trigger='click' ref={ref}>
            <button id='inner'>Hi</button>
          </Popover>
          <button id='ext' onClick={() => ref.current?.show()}>
            external
          </button>
        </>
      )
    }

    const { container } = render(<Wrap />)
    const ext = container.querySelector('#ext') as HTMLElement

    fireEvent.click(ext)
    expect(
      document.querySelector('.adm-popover-inner-content')?.textContent
    ).toEqual('Bamboo')
    expect(document.querySelector('.adm-popover-hidden')).toBeFalsy()
  })
})
