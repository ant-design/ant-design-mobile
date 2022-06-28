import React from 'react'
import { fireEvent, render, testA11y } from 'testing'
import Image from '../index'

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'

describe('image', () => {
  test('a11y', async () => {
    await testA11y(<Image src={demoSrc} />)
  })

  test('onContainerClick can work', () => {
    const onContainerClick = jest.fn()
    const { getByTestId } = render(
      <Image
        src={demoSrc}
        onContainerClick={onContainerClick}
        data-testid='img'
      />
    )
    fireEvent.click(getByTestId('img'))
    expect(onContainerClick).toBeCalledTimes(1)
  })
})
