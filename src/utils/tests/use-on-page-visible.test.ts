import { act, renderHook } from '@testing-library/react'
import { useOnPageVisible } from '../use-on-page-visible'

function setVisibilityState(state: 'visible' | 'hidden') {
  Object.defineProperty(document, 'visibilityState', {
    value: state,
    writable: true,
    configurable: true,
  })
}

describe('useOnPageVisible', () => {
  const callback = jest.fn()
  const originalVisibilityState = Object.getOwnPropertyDescriptor(
    document,
    'visibilityState'
  )

  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    if (originalVisibilityState) {
      Object.defineProperty(
        document,
        'visibilityState',
        originalVisibilityState
      )
    } else {
      delete (document as any).visibilityState
    }
  })

  it('should run when the page becomes visible', () => {
    renderHook(() => useOnPageVisible(callback))

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should not run while the page is hidden', () => {
    renderHook(() => useOnPageVisible(callback))

    setVisibilityState('hidden')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(callback).not.toHaveBeenCalled()
  })

  it('should use the latest callback', () => {
    const nextCallback = jest.fn()
    const { rerender } = renderHook(
      ({ onVisible }: { onVisible: () => void }) => useOnPageVisible(onVisible),
      { initialProps: { onVisible: callback } }
    )

    rerender({ onVisible: nextCallback })
    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(callback).not.toHaveBeenCalled()
    expect(nextCallback).toHaveBeenCalledTimes(1)
  })

  it('should remove the listener after unmount', () => {
    const { unmount } = renderHook(() => useOnPageVisible(callback))

    unmount()
    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(callback).not.toHaveBeenCalled()
  })
})
