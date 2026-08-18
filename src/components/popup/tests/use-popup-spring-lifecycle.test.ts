import { act, renderHook } from '@testing-library/react'
import { usePopupSpringLifecycle } from '../../../utils/use-popup-spring-lifecycle'

function setVisibilityState(state: 'visible' | 'hidden') {
  Object.defineProperty(document, 'visibilityState', {
    value: state,
    writable: true,
    configurable: true,
  })
}

describe('usePopupSpringLifecycle', () => {
  const afterShow = jest.fn()
  const afterClose = jest.fn()
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

  it('should initialize active from visible', () => {
    const { result } = renderHook(() =>
      usePopupSpringLifecycle({
        visible: true,
        afterShow,
        afterClose,
      })
    )

    expect(result.current.active).toBe(true)
  })

  it('should activate before showing and finish showing on rest', () => {
    const { result, rerender } = renderHook(
      ({ visible }: { visible: boolean }) =>
        usePopupSpringLifecycle({ visible, afterShow, afterClose }),
      { initialProps: { visible: false } }
    )

    expect(result.current.active).toBe(false)

    rerender({ visible: true })
    expect(result.current.active).toBe(true)

    act(() => {
      result.current.onRest()
    })

    expect(afterShow).toHaveBeenCalledTimes(1)
    expect(afterClose).not.toHaveBeenCalled()
  })

  it('should finish closing normally on rest', () => {
    const { result, rerender } = renderHook(
      ({ visible }: { visible: boolean }) =>
        usePopupSpringLifecycle({ visible, afterShow, afterClose }),
      { initialProps: { visible: true } }
    )

    rerender({ visible: false })
    expect(result.current.active).toBe(true)

    act(() => {
      result.current.onRest()
    })

    expect(result.current.active).toBe(false)
    expect(afterClose).toHaveBeenCalledTimes(1)
  })

  it('should finish closing when the hidden page becomes visible', () => {
    const { result, rerender } = renderHook(
      ({ visible }: { visible: boolean }) =>
        usePopupSpringLifecycle({ visible, afterShow, afterClose }),
      { initialProps: { visible: true } }
    )

    setVisibilityState('hidden')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    rerender({ visible: false })
    expect(result.current.active).toBe(true)
    expect(afterClose).not.toHaveBeenCalled()

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(result.current.active).toBe(false)
    expect(afterClose).toHaveBeenCalledTimes(1)
  })

  it('should not finish closing twice after visibility resumes', () => {
    const { result, rerender } = renderHook(
      ({ visible }: { visible: boolean }) =>
        usePopupSpringLifecycle({ visible, afterShow, afterClose }),
      { initialProps: { visible: true } }
    )

    rerender({ visible: false })
    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
      result.current.onRest()
    })

    expect(afterClose).toHaveBeenCalledTimes(1)
  })

  it('should reset closing state for the next visible cycle', () => {
    const { result, rerender } = renderHook(
      ({ visible }: { visible: boolean }) =>
        usePopupSpringLifecycle({ visible, afterShow, afterClose }),
      { initialProps: { visible: true } }
    )

    rerender({ visible: false })
    act(() => {
      result.current.onRest()
    })

    rerender({ visible: true })
    rerender({ visible: false })
    act(() => {
      result.current.onRest()
    })

    expect(afterClose).toHaveBeenCalledTimes(2)
  })

  it('should not close when initially hidden', () => {
    const { result } = renderHook(() =>
      usePopupSpringLifecycle({
        visible: false,
        afterShow,
        afterClose,
      })
    )

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
      result.current.onRest()
    })

    expect(result.current.active).toBe(false)
    expect(afterClose).not.toHaveBeenCalled()
  })

  it('should not finish closing after unmount', () => {
    const { rerender, unmount } = renderHook(
      ({ visible }: { visible: boolean }) =>
        usePopupSpringLifecycle({ visible, afterShow, afterClose }),
      { initialProps: { visible: true } }
    )

    rerender({ visible: false })
    unmount()

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(afterClose).not.toHaveBeenCalled()
  })
})
