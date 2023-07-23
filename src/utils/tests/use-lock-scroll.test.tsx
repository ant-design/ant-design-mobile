import React, { createRef } from 'react'
import { render, renderHook } from '@testing-library/react'
import { useLockScroll } from '../use-lock-scroll'

describe('Lock the scroll element by adding the adm-overflow-hidden class name', () => {
  test('', async () => {
    const ref = createRef<HTMLDivElement>()
    renderHook(() => useLockScroll(ref, true))

    render(
      <div
        className='parent'
        style={{ height: '400px', width: '400px', overflow: 'auto' }}
      >
        <div className='child' style={{ height: '800px', width: '400px' }}>
          Scroll Child
        </div>
      </div>
    )

    expect(document.body).toHaveClass('adm-overflow-hidden')
  })
})
