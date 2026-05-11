import { renderHook, act } from '@testing-library/react'
import { useSpringVisibility } from '../use-spring-visibility'

describe('useSpringVisibility', () => {
  const mockSetActive = jest.fn()
  const mockAfterClose = jest.fn()
  const mockUnmountedRef = { current: false }
  const originalVisibilityState = Object.getOwnPropertyDescriptor(
    document,
    'visibilityState'
  )

  beforeEach(() => {
    jest.clearAllMocks()
    mockUnmountedRef.current = false
  })

  afterEach(() => {
    if (originalVisibilityState) {
      Object.defineProperty(
        document,
        'visibilityState',
        originalVisibilityState
      )
    }
  })

  it('should call setActive(false) and afterClose when page becomes visible after close while hidden', () => {
    const { result } = renderHook(() =>
      useSpringVisibility({
        visible: false,
        active: true,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    // Simulate page becoming visible (visibilitychange event)
    Object.defineProperty(document, 'visibilityState', {
      value: 'visible',
      writable: true,
    })
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(mockSetActive).toHaveBeenCalledWith(false)
    expect(mockAfterClose).toHaveBeenCalledTimes(1)
  })

  it('should not call afterClose when page is already visible and active matches visible', () => {
    renderHook(() =>
      useSpringVisibility({
        visible: false,
        active: false,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    Object.defineProperty(document, 'visibilityState', {
      value: 'visible',
      writable: true,
    })
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(mockSetActive).not.toHaveBeenCalled()
    expect(mockAfterClose).not.toHaveBeenCalled()
  })

  it('should not call afterClose when component is unmounted', () => {
    mockUnmountedRef.current = true

    renderHook(() =>
      useSpringVisibility({
        visible: false,
        active: true,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    Object.defineProperty(document, 'visibilityState', {
      value: 'visible',
      writable: true,
    })
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(mockSetActive).not.toHaveBeenCalled()
    expect(mockAfterClose).not.toHaveBeenCalled()
  })

  it('shouldCallAfterClose should prevent double-calling afterClose', () => {
    const { result } = renderHook(() =>
      useSpringVisibility({
        visible: false,
        active: true,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    // Simulate visibilitychange handler calling afterClose first
    Object.defineProperty(document, 'visibilityState', {
      value: 'visible',
      writable: true,
    })
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(mockAfterClose).toHaveBeenCalledTimes(1)

    // Now onRest fires later - shouldCallAfterClose should return false
    expect(result.current.shouldCallAfterClose()).toBe(false)
  })

  it('shouldCallAfterClose should return true when afterClose has not been called', () => {
    const { result } = renderHook(() =>
      useSpringVisibility({
        visible: false,
        active: false,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    // onRest fires normally (no visibilitychange handler intervention)
    expect(result.current.shouldCallAfterClose()).toBe(true)
    // Second call should return false
    expect(result.current.shouldCallAfterClose()).toBe(false)
  })

  it('should reset closedRef when visible becomes true', () => {
    const { result, rerender } = renderHook(
      ({ visible }: { visible: boolean }) =>
        useSpringVisibility({
          visible,
          active: true,
          setActive: mockSetActive,
          afterClose: mockAfterClose,
          unmountedRef: mockUnmountedRef,
        }),
      { initialProps: { visible: false } }
    )

    // Simulate afterClose being called (via onRest or visibilitychange)
    // shouldCallAfterClose returns true on first call, then false on subsequent calls
    expect(result.current.shouldCallAfterClose()).toBe(true)
    expect(result.current.shouldCallAfterClose()).toBe(false)

    // Now visible becomes true (new show cycle) - closedRef should be reset
    rerender({ visible: true })

    // shouldCallAfterClose should be reset and return true again
    expect(result.current.shouldCallAfterClose()).toBe(true)
  })

  it('should not trigger on visibilitychange when document is hidden', () => {
    renderHook(() =>
      useSpringVisibility({
        visible: false,
        active: true,
        setActive: mockSetActive,
        afterClose: mockAfterClose,
        unmountedRef: mockUnmountedRef,
      })
    )

    Object.defineProperty(document, 'visibilityState', {
      value: 'hidden',
      writable: true,
    })
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(mockSetActive).not.toHaveBeenCalled()
    expect(mockAfterClose).not.toHaveBeenCalled()
  })
})
