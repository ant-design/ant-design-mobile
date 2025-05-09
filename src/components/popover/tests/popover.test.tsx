import * as React from 'react'
import { fireEvent, render } from 'testing'
import Popover from '..'
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
})
