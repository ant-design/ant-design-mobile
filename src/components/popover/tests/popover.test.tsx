import * as React from 'react'
import { render, cleanup, fireEvent } from 'testing'
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
})
