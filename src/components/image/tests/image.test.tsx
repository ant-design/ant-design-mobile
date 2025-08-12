import React from 'react'
import { act, fireEvent, render } from 'testing'
import Image from '../index'

const classPrefix = `adm-image`

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'

describe('Image', () => {
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

  test('load successfully', () => {
    render(<Image src={demoSrc} />)
    const img = document.querySelectorAll(`.${classPrefix}-img`)[0]
    fireEvent.load(img)
    expect(img).toHaveAttribute('src', demoSrc)
  })

  test('load failed', () => {
    render(<Image src='404' />)
    const img = document.querySelectorAll(`.${classPrefix}-img`)[0]
    fireEvent.error(img)
    expect(img).not.toBeInTheDocument()
    expect(
      document.querySelectorAll(`.${classPrefix}-tip`)[0]
    ).toBeInTheDocument()
  })

  test('lazy load should be work', () => {
    // mock useInViewport
    // https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useInViewport/__tests__/index.test.ts
    const mockIntersectionObserver = jest.fn().mockReturnValue({
      observe: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver

    render(<Image src={demoSrc} lazy />)
    // 初始状态下，由于懒加载，img 元素不应该存在
    let img = document.querySelectorAll(`.${classPrefix}-img`)[0]
    expect(img).toBeUndefined()

    const calls = mockIntersectionObserver.mock.calls
    const [onChange] = calls[calls.length - 1]
    act(() => {
      onChange([
        {
          isIntersecting: true,
        },
      ])
    })
    img = document.querySelectorAll(`.${classPrefix}-img`)[0]
    expect(img).toHaveAttribute('src', demoSrc)
  })

  test('renders with width and height', () => {
    const { getByTestId } = render(
      <Image src={demoSrc} width={100} height={100} data-testid='image' />
    )
    expect(getByTestId('image')).toHaveStyle('--width: 100px;--height: 100px')
  })
})
